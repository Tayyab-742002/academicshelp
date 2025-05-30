import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import ContactFormEmail from '@/components/templates/emailTemplate/ContactFormEmail';

// Initialize Resend with API key
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    // Parse the request body
    const body = await request.json();
    const { name, email, phone, subject, message, service, attachments } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required fields' },
        { status: 400 }
      );
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
      subject: `New Contact Form Submission: ${subject || 'No Subject'}`,
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
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
} 