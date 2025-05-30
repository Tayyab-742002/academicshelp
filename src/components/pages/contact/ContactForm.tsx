import React from "react";
import { ContactForm as ContactFormUI } from "@/components/ui/contact-form";
import TagLine from "@/components/ui/TagLine";
import { Mail } from "lucide-react";

const ContactForm = () => {
  return (
    <section className="py-16 sm:py-20 md:py-24 bg-gradient-to-b from-background/90 to-background relative">
      <div className="absolute inset-0 bg-background/90 pattern-dots pattern-blue-500 pattern-bg-white pattern-size-4 pattern-opacity-5"></div>
      <div className="container px-4 mx-auto relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-14">
          <TagLine
            tagline="Reach Out to Us"
            TagLineIcon={<Mail className="h-4 w-4 mr-2" />}
          />
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Contact Us</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Have questions or need assistance with your academic work? Our team
            is here to help. Fill out the form below and we will get back to you
            as soon as possible.
          </p>
        </div>

        <ContactFormUI withServicesSelect={true} />
      </div>
    </section>
  );
};

export default ContactForm;
