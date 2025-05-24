"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, CheckCircle, AlertTriangle, Loader2, ChevronDown } from "lucide-react";

type FormStatus = "idle" | "submitting" | "success" | "error";
type FormField = {
  value: string;
  error: string;
  touched: boolean;
};

export function ContactForm({
  services = [],
  withServicesSelect = true,
}) {
  // Form fields state
  const [name, setName] = useState<FormField>({ value: "", error: "", touched: false });
  const [email, setEmail] = useState<FormField>({ value: "", error: "", touched: false });
  const [phone, setPhone] = useState<FormField>({ value: "", error: "", touched: false });
  const [subject, setSubject] = useState<FormField>({ value: "", error: "", touched: false });
  const [message, setMessage] = useState<FormField>({ value: "", error: "", touched: false });
  const [service, setService] = useState<FormField>({ value: "", error: "", touched: false });
  
  // Form status
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  // Validate an individual field
  const validateField = (field: FormField, fieldName: string): FormField => {
    let error = "";
    
    if (!field.value.trim()) {
      error = `${fieldName} is required`;
    } else if (fieldName === "Email" && !/^\S+@\S+\.\S+$/.test(field.value)) {
      error = "Please enter a valid email address";
    } else if (fieldName === "Phone" && !/^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/.test(field.value)) {
      error = "Please enter a valid phone number";
    }
    
    return { ...field, error };
  };

  // Validate all fields
  const validateForm = (): boolean => {
    const validatedName = validateField(name, "Name");
    const validatedEmail = validateField(email, "Email");
    const validatedSubject = validateField(subject, "Subject");
    const validatedMessage = validateField(message, "Message");
    
    // Only validate service if the select is shown
    const validatedService = withServicesSelect
      ? validateField(service, "Service")
      : service;
    
    // Update state with validation results
    setName(validatedName);
    setEmail(validatedEmail);
    setSubject(validatedSubject);
    setMessage(validatedMessage);
    setService(validatedService);
    
    // Phone is optional, but if provided, should be valid
    if (phone.value) {
      const validatedPhone = validateField(phone, "Phone");
      setPhone(validatedPhone);
      
      if (validatedPhone.error) {
        return false;
      }
    }
    
    // Check if all required fields are valid
    return (
      !validatedName.error &&
      !validatedEmail.error &&
      !validatedSubject.error &&
      !validatedMessage.error &&
      (!withServicesSelect || !validatedService.error)
    );
  };

  // Handle field change
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
    setField: React.Dispatch<React.SetStateAction<FormField>>
  ) => {
    const { name, value } = e.target;
    setField((prev) => ({ ...prev, value, touched: true }));
  };

  // Handle field blur for validation
  const handleBlur = (
    fieldName: string,
    field: FormField,
    setField: React.Dispatch<React.SetStateAction<FormField>>
  ) => {
    if (field.touched) {
      const validatedField = validateField(field, fieldName);
      setField(validatedField);
    }
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form
    const isValid = validateForm();
    if (!isValid) return;
    
    // Update status
    setStatus("submitting");
    
    // Simulate API call with timeout
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // If successful
      setStatus("success");
      
      // Reset form after success
      setTimeout(() => {
        setName({ value: "", error: "", touched: false });
        setEmail({ value: "", error: "", touched: false });
        setPhone({ value: "", error: "", touched: false });
        setSubject({ value: "", error: "", touched: false });
        setMessage({ value: "", error: "", touched: false });
        setService({ value: "", error: "", touched: false });
        setStatus("idle");
      }, 3000);
    } catch (error) {
      // If error
      setStatus("error");
      setErrorMessage("Something went wrong. Please try again later.");
      
      // Reset status after error
      setTimeout(() => {
        setStatus("idle");
      }, 3000);
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      <AnimatePresence mode="wait">
        {status === "success" ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="rounded-2xl bg-green-50 dark:bg-green-900/30 p-8 text-center border border-green-200 dark:border-green-700"
          >
            <div className="flex justify-center mb-4">
              <CheckCircle className="h-12 w-12 text-green-500 dark:text-green-400" />
            </div>
            <h3 className="text-xl font-bold text-green-800 dark:text-green-300 mb-2">
              Message Sent Successfully!
            </h3>
            <p className="text-green-700 dark:text-green-400">
              Thank you for contacting us. We'll get back to you as soon as possible.
            </p>
          </motion.div>
        ) : status === "error" ? (
          <motion.div
            key="error"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="rounded-2xl bg-red-50 dark:bg-red-900/30 p-8 text-center border border-red-200 dark:border-red-700"
          >
            <div className="flex justify-center mb-4">
              <AlertTriangle className="h-12 w-12 text-red-500 dark:text-red-400" />
            </div>
            <h3 className="text-xl font-bold text-red-800 dark:text-red-300 mb-2">
              Oops! Something went wrong.
            </h3>
            <p className="text-red-700 dark:text-red-400">
              {errorMessage || "Please try again or contact us directly via phone."}
            </p>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            onSubmit={handleSubmit}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Name field */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <label htmlFor="name" className="block text-sm font-medium mb-1">
                Full Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={name.value}
                onChange={(e) => handleChange(e, setName)}
                onBlur={() => handleBlur("Name", name, setName)}
                className={`w-full px-4 py-3 rounded-lg border ${
                  name.error
                    ? "border-red-500 dark:border-red-500"
                    : "border-gray-300 dark:border-gray-700"
                } bg-card focus:outline-none focus:ring-2 focus:ring-primary/50`}
                placeholder="Your name"
                disabled={status === "submitting"}
              />
              {name.error && (
                <p className="mt-1 text-sm text-red-500">{name.error}</p>
              )}
            </motion.div>

            {/* Email field */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <label htmlFor="email" className="block text-sm font-medium mb-1">
                Email Address <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={email.value}
                onChange={(e) => handleChange(e, setEmail)}
                onBlur={() => handleBlur("Email", email, setEmail)}
                className={`w-full px-4 py-3 rounded-lg border ${
                  email.error
                    ? "border-red-500 dark:border-red-500"
                    : "border-gray-300 dark:border-gray-700"
                } bg-card focus:outline-none focus:ring-2 focus:ring-primary/50`}
                placeholder="your.email@example.com"
                disabled={status === "submitting"}
              />
              {email.error && (
                <p className="mt-1 text-sm text-red-500">{email.error}</p>
              )}
            </motion.div>

            {/* Phone field */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <label htmlFor="phone" className="block text-sm font-medium mb-1">
                Phone Number <span className="text-gray-500">(Optional)</span>
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={phone.value}
                onChange={(e) => handleChange(e, setPhone)}
                onBlur={() => handleBlur("Phone", phone, setPhone)}
                className={`w-full px-4 py-3 rounded-lg border ${
                  phone.error
                    ? "border-red-500 dark:border-red-500"
                    : "border-gray-300 dark:border-gray-700"
                } bg-card focus:outline-none focus:ring-2 focus:ring-primary/50`}
                placeholder="+1 (555) 123-4567"
                disabled={status === "submitting"}
              />
              {phone.error && (
                <p className="mt-1 text-sm text-red-500">{phone.error}</p>
              )}
            </motion.div>

            {/* Service selection */}
            {withServicesSelect && (
              <motion.div
                className="relative"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <label htmlFor="service" className="block text-sm font-medium mb-1">
                  Service Interested In <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <select
                    id="service"
                    name="service"
                    value={service.value}
                    onChange={(e) => handleChange(e, setService)}
                    onBlur={() => handleBlur("Service", service, setService)}
                    className={`w-full px-4 py-3 rounded-lg border appearance-none ${
                      service.error
                        ? "border-red-500 dark:border-red-500"
                        : "border-gray-300 dark:border-gray-700"
                    } bg-card focus:outline-none focus:ring-2 focus:ring-primary/50`}
                    disabled={status === "submitting"}
                  >
                    <option value="">Select a service</option>
                    {services.map((service) => (
                      <option key={service.id || service.value} value={service.value || service.id}>
                        {service.label || service.name}
                      </option>
                    ))}
                  </select>
                  <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                    <ChevronDown className="h-4 w-4 text-gray-500" />
                  </div>
                </div>
                {service.error && (
                  <p className="mt-1 text-sm text-red-500">{service.error}</p>
                )}
              </motion.div>
            )}

            {/* Subject field */}
            <motion.div
              className={`relative ${withServicesSelect ? "md:col-span-2" : ""}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <label htmlFor="subject" className="block text-sm font-medium mb-1">
                Subject <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={subject.value}
                onChange={(e) => handleChange(e, setSubject)}
                onBlur={() => handleBlur("Subject", subject, setSubject)}
                className={`w-full px-4 py-3 rounded-lg border ${
                  subject.error
                    ? "border-red-500 dark:border-red-500"
                    : "border-gray-300 dark:border-gray-700"
                } bg-card focus:outline-none focus:ring-2 focus:ring-primary/50`}
                placeholder="How can we help you?"
                disabled={status === "submitting"}
              />
              {subject.error && (
                <p className="mt-1 text-sm text-red-500">{subject.error}</p>
              )}
            </motion.div>

            {/* Message field */}
            <motion.div
              className="relative md:col-span-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <label htmlFor="message" className="block text-sm font-medium mb-1">
                Message <span className="text-red-500">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                value={message.value}
                onChange={(e) => handleChange(e, setMessage)}
                onBlur={() => handleBlur("Message", message, setMessage)}
                className={`w-full px-4 py-3 rounded-lg border ${
                  message.error
                    ? "border-red-500 dark:border-red-500"
                    : "border-gray-300 dark:border-gray-700"
                } bg-card focus:outline-none focus:ring-2 focus:ring-primary/50 min-h-[120px]`}
                placeholder="Please provide details about your inquiry..."
                disabled={status === "submitting"}
              />
              {message.error && (
                <p className="mt-1 text-sm text-red-500">{message.error}</p>
              )}
            </motion.div>

            {/* Submit button */}
            <motion.div
              className="md:col-span-2 mt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
            >
              <button
                type="submit"
                disabled={status === "submitting"}
                className="w-full py-3 px-6 rounded-xl bg-primary text-primary-foreground font-medium flex items-center justify-center transition-all duration-200 hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary/50 disabled:opacity-70"
              >
                {status === "submitting" ? (
                  <>
                    <Loader2 className="animate-spin mr-2 h-5 w-5" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="mr-2 h-5 w-5" />
                    Send Message
                  </>
                )}
              </button>
            </motion.div>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}

export default ContactForm; 