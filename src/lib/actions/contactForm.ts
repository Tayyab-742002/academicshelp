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

export async function submitContactForm(formData: ContactFormData) {
  try {
    // Validate form data
    const validatedData = ContactFormSchema.parse(formData);
    
    // Get host from headers for building absolute URL
    const headersList = await headers();
    const host = headersList.get('host') || 'localhost:3000';
    const protocol = process.env.NODE_ENV === 'production' ? 'https' : 'http';
    
    // Build absolute URL for API endpoint
    const apiUrl = `${protocol}://${host}/api/contact`;
    
    // Send data to the API route
    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(validatedData),
    });
    
    // Parse the response
    const result = await response.json();
    
    // Check if the request was successful
    if (!response.ok) {
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