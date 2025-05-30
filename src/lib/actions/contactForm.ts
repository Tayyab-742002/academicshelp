'use server';

import { z } from 'zod';
import { headers } from 'next/headers';

// Define validation schema for form data
const ContactFormSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().optional(),
  subject: z.string().min(1, 'Subject is required'),
  message: z.string().min(1, 'Message is required'),
  service: z.string().optional(),
});

export type ContactFormData = z.infer<typeof ContactFormSchema>;

// Define attachment type
type FileAttachment = {
  name: string;
  type: string;
  content: string;
};

// Helper function to chunk the request if needed
const sendFormData = async (
  apiUrl: string,
  validatedData: z.infer<typeof ContactFormSchema>,
  fileAttachments: FileAttachment[] = []
) => {
  // Maximum payload size (approximately 4MB to be safe)
  const MAX_PAYLOAD_SIZE = 4 * 1024 * 1024; 
  
  // If no attachments or small payload, send normally
  if (fileAttachments.length === 0) {
    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ...validatedData,
        attachments: [],
      }),
    });
    
    return await response.json();
  }

  // For requests with attachments, calculate payload size
  // Estimate the size of the JSON payload (rough approximation)
  const baseDataSize = JSON.stringify({
    ...validatedData,
    attachments: [],
  }).length;
  
  // Check if we need to split the attachments
  const needsChunking = fileAttachments.some(attachment => {
    // Base64 encoding adds approximately 33% overhead
    const estimatedSize = (attachment.content.length * 4/3) + 
                          attachment.name.length + 
                          attachment.type.length + 50; // 50 for JSON formatting
    
    return baseDataSize + estimatedSize > MAX_PAYLOAD_SIZE;
  });
  
  if (!needsChunking) {
    // Send all attachments in one request
    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ...validatedData,
        attachments: fileAttachments,
      }),
    });
    
    return await response.json();
  }
  
  // If we need to chunk, send each attachment separately
  // First send the form data with no attachments
  const initialResponse = await fetch(apiUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      ...validatedData,
      attachments: [],
    }),
  });
  
  if (!initialResponse.ok) {
    return await initialResponse.json();
  }
  
  // Then send each attachment individually
  for (const attachment of fileAttachments) {
    try {
      await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-Attachment-Only': 'true',
          'X-Original-Subject': validatedData.subject,
          'X-Sender-Email': validatedData.email,
        },
        body: JSON.stringify({
          name: validatedData.name,
          email: validatedData.email,
          subject: `Attachment for: ${validatedData.subject}`,
          message: `This is an attachment for the message from ${validatedData.name} (${validatedData.email})`,
          attachments: [attachment],
        }),
      });
    } catch (error) {
      console.error('Error sending attachment:', error);
      // Continue with other attachments even if one fails
    }
  }
  
  // Return success from the initial request
  return await initialResponse.json();
};

export async function submitContactForm(
  formData: ContactFormData, 
  fileAttachments: FileAttachment[] = []
) {
  try {
    // Validate form data
    const validatedData = ContactFormSchema.parse(formData);
    
    // Get host from headers for building absolute URL
    const headersList = await headers();
    const host = headersList.get('host') || 'localhost:3000';
    const protocol = process.env.NODE_ENV === 'production' ? 'https' : 'http';
    
    // Build absolute URL for API endpoint
    const apiUrl = `${protocol}://${host}/api/contact`;
    
    // Send data to the API route using our helper function
    const result = await sendFormData(apiUrl, validatedData, fileAttachments);
    
    // Check if the request was successful
    if (result.error) {
      throw new Error(result.error || 'Failed to submit contact form');
    }
    
    return { success: true, data: result };
  } catch (error) {
    console.error('Error submitting contact form:', error);
    
    if (error instanceof z.ZodError) {
      const fieldErrors = error.errors.reduce((acc, curr) => {
        const field = curr.path[0] as string;
        acc[field] = curr.message;
        return acc;
      }, {} as Record<string, string>);
      
      return { 
        success: false, 
        error: 'Validation error', 
        fieldErrors 
      };
    }
    
    return { 
      success: false, 
      error: error instanceof Error ? error.message : 'Unknown error occurred' 
    };
  }
} 