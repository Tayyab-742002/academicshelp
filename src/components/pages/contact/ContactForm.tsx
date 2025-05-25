import React from 'react'
import {ContactForm as ContactFormComponent} from '@/components/ui/contact-form'

const ContactForm = () => {
  return (
    <div className="w-full max-w-full px-4 sm:px-6 md:px-8 mx-auto py-8 sm:py-12 md:py-16">
      <div className="flex flex-col items-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 text-center">Contact Us</h2>
        <p className="text-sm sm:text-base md:text-lg mb-8 max-w-2xl text-center text-muted-foreground">
          Have questions or want to get in touch? Fill out the form below and we'll get back to you as soon as possible.
        </p>
        <ContactFormComponent />
      </div>
    </div>
  )
}

export default ContactForm