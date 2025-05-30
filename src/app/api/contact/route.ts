import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import ContactFormEmail from '@/components/templates/emailTemplate/ContactFormEmail';

// Initialize Resend with API key
const resend = new Resend(process.env.RESEND_API_KEY);

// Configure body parser for the API route
export const config = {
  api: {
    bodyParser: {
      sizeLimit: '10mb',
    },
    responseLimit: false,
  },
};

// Helper function to validate attachment sizes
function validateAttachments(attachments: any[]) {
  if (!attachments || !Array.isArray(attachments)) return { valid: true };
  
  const MAX_INDIVIDUAL_SIZE = 2 * 1024 * 1024; // 2MB per attachment
  const MAX_TOTAL_SIZE = 8 * 1024 * 1024; // 8MB total
  
  let totalSize = 0;
  let oversizedAttachments: string[] = [];
  
  for (const attachment of attachments) {
    // Base64 size estimation (4/3 of the base64 length)
    const estimatedSize = attachment.content ? Math.ceil(attachment.content.length * 0.75) : 0;
    totalSize += estimatedSize;
    
    if (estimatedSize > MAX_INDIVIDUAL_SIZE) {
      oversizedAttachments.push(attachment.name);
    }
  }
  
  if (oversizedAttachments.length > 0) {
    return {
      valid: false,
      error: `Some attachments exceed the 2MB limit: ${oversizedAttachments.join(', ')}`
    };
  }
  
  if (totalSize > MAX_TOTAL_SIZE) {
    return {
      valid: false,
      error: `Total attachment size (${Math.round(totalSize/1024/1024)}MB) exceeds the 8MB limit`
    };
  }
  
  return { valid: true };
}

export async function POST(request: Request) {
  try {
    // Parse the request body
    const body = await request.json();
    const { name, email, phone, subject, message, service, attachments } = body;

    // Get headers to check if this is an attachment-only request
    const headers = request.headers;
    const isAttachmentOnly = headers.get('X-Attachment-Only') === 'true';
    
    // Validate required fields for normal requests
    if (!isAttachmentOnly && (!name || !email || !message)) {
      return NextResponse.json(
        { error: 'Name, email, and message are required fields' },
        { status: 400 }
      );
    }
    
    // Validate attachments if present
    if (attachments && attachments.length > 0) {
      const validation = validateAttachments(attachments);
      if (!validation.valid) {
        return NextResponse.json(
          { error: validation.error },
          { status: 413 }
        );
      }
    }

    // Prepare email options
    const emailOptions: {
      from: string;
      to: string[];
      subject: string;
      react: React.ReactNode;
      attachments?: {
        filename: string;
        content: string;
        encoding: string;
        type: string;
      }[];
    } = {
      from: `Contact Form <onboarding@resend.dev>`,
      to: [process.env.TO_EMAIL!],
      subject: isAttachmentOnly 
        ? subject 
        : `New Contact Form Submission: ${subject || 'No Subject'}`,
      react: ContactFormEmail({
        name,
        email,
        phone: phone || 'Not provided',
        subject: subject || 'No Subject',
        message,
        service: service || 'Not specified',
        hasAttachments: attachments && attachments.length > 0
      }),
    };

    // Add file attachments if they exist
    if (attachments && attachments.length > 0) {
      emailOptions.attachments = attachments.map((attachment: { name: string, content: string, type: string }) => ({
        filename: attachment.name,
        content: attachment.content,
        encoding: 'base64',
        type: attachment.type,
      }));
    }

    // Use Resend to send email
    const { data, error } = await resend.emails.send(emailOptions);

    if (error) {
      console.error('Error sending email:', error);
      return NextResponse.json(
        { error: 'Failed to send email' },
        { status: 500 }
      );
    }

    // Return success response
    return NextResponse.json(
      { 
        message: 'Contact form submitted successfully', 
        id: data?.id 
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error processing contact form:', error);
    
    // Check if error might be related to payload size
    if (error instanceof Error && error.message.includes('body exceeded')) {
      return NextResponse.json(
        { error: 'Attachment size too large. Please reduce file sizes to under 8MB total.' },
        { status: 413 }
      );
    }
    
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
} 