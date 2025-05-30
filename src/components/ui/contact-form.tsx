"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Send,
  CheckCircle,
  AlertTriangle,
  Loader2,
  ChevronDown,
  FileText,
  Sparkles,
} from "lucide-react";
import { getServices } from "@/lib/services";
import { Service } from "@/lib/fallbackdata/service";
import { FileUpload } from "./file-upload";
import { submitContactForm, ContactFormData } from "@/lib/actions/contactForm";

type FormStatus = "idle" | "submitting" | "success" | "error";

type FormField = {
  value: string;
  error: string;
  touched: boolean;
};

export function ContactForm({ withServicesSelect = true }) {
  // Form fields state
  const [name, setName] = useState<FormField>({
    value: "",
    error: "",
    touched: false,
  });
  const [email, setEmail] = useState<FormField>({
    value: "",
    error: "",
    touched: false,
  });
  const [phone, setPhone] = useState<FormField>({
    value: "",
    error: "",
    touched: false,
  });
  const [subject, setSubject] = useState<FormField>({
    value: "",
    error: "",
    touched: false,
  });
  const [message, setMessage] = useState<FormField>({
    value: "",
    error: "",
    touched: false,
  });
  const [service, setService] = useState<FormField>({
    value: "",
    error: "",
    touched: false,
  });
  const [servicesOptions, setServicesOptions] = useState<Service[]>([]);
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);
  const [fileError, setFileError] = useState("");

  // Form status
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    async function loadServices() {
      try {
        const servicesData = await getServices();
        setServicesOptions(servicesData);
      } catch (error) {
        console.error("Error loading services:", error);
      }
    }

    loadServices();
  }, []);

  // Validate an individual field
  const validateField = (field: FormField, fieldName: string): FormField => {
    let error = "";

    if (!field.value.trim()) {
      error = `${fieldName} is required`;
    } else if (fieldName === "Email" && !/^\S+@\S+\.\S+$/.test(field.value)) {
      error = "Please enter a valid email address";
    } else if (
      fieldName === "Phone" &&
      !/^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/.test(
        field.value
      )
    ) {
      error = "Please enter a valid phone number";
    }

    return { ...field, error };
  };

  // Handle field blur - validate on blur
  const handleBlur = (
    fieldName: string,
    field: FormField,
    setField: (field: FormField) => void
  ) => {
    if (field.touched) {
      setField(validateField(field, fieldName));
    }
  };

  // Handle field change
  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
    setField: (field: FormField) => void
  ) => {
    setField({
      value: e.target.value,
      error: "",
      touched: true,
    });
  };

  // Toggle service dropdown
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  // Select a service
  const selectService = (serviceTitle: string) => {
    setService({ value: serviceTitle, error: "", touched: true });
    setIsServicesOpen(false);
  };

  // Validate entire form
  const validateForm = (): boolean => {
    const validatedName = validateField(name, "Name");
    setName(validatedName);

    const validatedEmail = validateField(email, "Email");
    setEmail(validatedEmail);

    const validatedSubject = validateField(subject, "Subject");
    setSubject(validatedSubject);

    const validatedMessage = validateField(message, "Message");
    setMessage(validatedMessage);

    // Phone is optional, only validate if has value
    let validatedPhone = phone;
    if (phone.value) {
      validatedPhone = validateField(phone, "Phone");
      setPhone(validatedPhone);
    }

    // Service is required if services dropdown is enabled
    let validatedService = service;
    if (withServicesSelect) {
      validatedService = validateField(service, "Service");
      setService(validatedService);
    }

    // Check if any field has an error
    return !(
      validatedName.error ||
      validatedEmail.error ||
      validatedPhone.error ||
      validatedSubject.error ||
      validatedMessage.error ||
      (withServicesSelect && validatedService.error)
    );
  };

  // Handle file change
  const handleFileChange = (files: File[]) => {
    // Calculate total size of all files
    const totalSize = files.reduce((sum, file) => sum + file.size, 0);
    const maxTotalSize = 20 * 1024 * 1024; // 20MB in bytes

    if (totalSize > maxTotalSize) {
      setFileError(
        `Total file size exceeds the 20MB limit. Please reduce the size or number of files.`
      );
      return;
    }

    setUploadedFiles(files);
    setFileError("");
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate form
    const isValid = validateForm();
    if (!isValid) return;

    // Update status
    setStatus("submitting");

    // Create form data for submission
    const formData: ContactFormData = {
      name: name.value,
      email: email.value,
      phone: phone.value,
      subject: subject.value,
      message: message.value,
      service: service.value,
    };

    try {
      // Process files (convert to base64) if they exist
      const fileAttachments = [];
      if (uploadedFiles.length > 0) {
        for (const file of uploadedFiles) {
          try {
            const attachment = await fileToBase64(file);
            fileAttachments.push(attachment);
          } catch (error) {
            console.error("Error converting file to base64:", error);
            setStatus("error");
            setErrorMessage("Error processing file uploads. Please try again.");
            return;
          }
        }
      }

      // Submit form using server action
      const result = await submitContactForm(formData, fileAttachments);

      if (result.success) {
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
          setUploadedFiles([]);
          setStatus("idle");
        }, 3000);
      } else {
        // If error from server action
        setStatus("error");
        setErrorMessage(
          result.error || "Something went wrong. Please try again later."
        );

        // Apply field errors if any
        if (result.fieldErrors) {
          if (result.fieldErrors.name) {
            setName((prev) => ({ ...prev, error: result.fieldErrors.name }));
          }
          if (result.fieldErrors.email) {
            setEmail((prev) => ({ ...prev, error: result.fieldErrors.email }));
          }
          if (result.fieldErrors.phone) {
            setPhone((prev) => ({ ...prev, error: result.fieldErrors.phone }));
          }
          if (result.fieldErrors.subject) {
            setSubject((prev) => ({
              ...prev,
              error: result.fieldErrors.subject,
            }));
          }
          if (result.fieldErrors.message) {
            setMessage((prev) => ({
              ...prev,
              error: result.fieldErrors.message,
            }));
          }
          if (result.fieldErrors.service) {
            setService((prev) => ({
              ...prev,
              error: result.fieldErrors.service,
            }));
          }
        }

        // Reset status after error
        setTimeout(() => {
          setStatus("idle");
        }, 3000);
      }
    } catch (error) {
      // If unexpected error
      setStatus("error");
      console.error(error);
      setErrorMessage("Something went wrong. Please try again later.");

      // Reset status after error
      setTimeout(() => {
        setStatus("idle");
      }, 3000);
    }
  };

  // Helper to convert File to base64
  const fileToBase64 = (
    file: File
  ): Promise<{ name: string; type: string; content: string }> => {
    return new Promise((resolve, reject) => {
      // For image files, compress them first
      if (file.type.startsWith("image/")) {
        const img = new Image();
        const reader = new FileReader();
        
        reader.onload = (e) => {
          if (!e.target?.result) {
            reject(new Error("Failed to read file"));
            return;
          }
          
          img.onload = () => {
            // Create canvas for compression
            const canvas = document.createElement("canvas");
            // Max dimensions for the image (reduces file size)
            const MAX_WIDTH = 1200;
            const MAX_HEIGHT = 1200;
            
            let width = img.width;
            let height = img.height;
            
            // Calculate new dimensions
            if (width > height) {
              if (width > MAX_WIDTH) {
                height *= MAX_WIDTH / width;
                width = MAX_WIDTH;
              }
            } else {
              if (height > MAX_HEIGHT) {
                width *= MAX_HEIGHT / height;
                height = MAX_HEIGHT;
              }
            }
            
            // Set canvas dimensions
            canvas.width = width;
            canvas.height = height;
            
            // Draw image on canvas
            const ctx = canvas.getContext("2d");
            if (!ctx) {
              reject(new Error("Failed to get canvas context"));
              return;
            }
            
            ctx.drawImage(img, 0, 0, width, height);
            
            // Get compressed image data (0.7 quality - good balance)
            const quality = 0.7;
            const dataUrl = canvas.toDataURL(file.type, quality);
            
            // Convert data URL to base64 content
            const base64Content = dataUrl.split(",")[1];
            
            resolve({
              name: file.name,
              type: file.type,
              content: base64Content,
            });
          };
          
          img.src = e.target.result as string;
        };
        
        reader.onerror = () => {
          reject(new Error("Error reading file"));
        };
        
        reader.readAsDataURL(file);
      } else {
        // For non-image files, use standard base64 conversion
        const reader = new FileReader();
        
        reader.onload = (e) => {
          if (!e.target?.result) {
            reject(new Error("Failed to read file"));
            return;
          }
          
          const base64Content = (e.target.result as string).split(",")[1];
          
          resolve({
            name: file.name,
            type: file.type,
            content: base64Content,
          });
        };
        
        reader.onerror = () => {
          reject(new Error("Error reading file"));
        };
        
        reader.readAsDataURL(file);
      }
    });
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
            className="rounded-2xl bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/40 dark:to-green-800/20 p-8 text-center border border-green-200 dark:border-green-700 shadow-lg"
          >
            <div className="flex justify-center mb-4">
              <motion.div
                animate={{
                  scale: [1, 1.1, 1],
                  rotate: [0, 5, 0, -5, 0],
                }}
                transition={{
                  duration: 0.5,
                  repeat: 1,
                  repeatDelay: 1,
                }}
                className="h-16 w-16 rounded-full bg-green-100 dark:bg-green-800/50 flex items-center justify-center"
              >
                <CheckCircle className="h-10 w-10 text-green-500 dark:text-green-400" />
              </motion.div>
            </div>
            <h3 className="text-2xl font-bold text-green-800 dark:text-green-300 mb-2">
              Message Sent Successfully!
            </h3>
            <p className="text-green-700 dark:text-green-400 mb-4">
              Thank you for contacting us. We&apos;ll get back to you as soon as
              possible.
            </p>
            <div className="flex items-center justify-center gap-1 text-green-500 dark:text-green-400 text-sm">
              <Sparkles className="h-4 w-4" />
              <span>Your request has been recorded with our team</span>
            </div>
          </motion.div>
        ) : status === "error" ? (
          <motion.div
            key="error"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="rounded-2xl bg-gradient-to-br from-red-50 to-red-100 dark:from-red-900/40 dark:to-red-800/20 p-8 text-center border border-red-200 dark:border-red-700 shadow-lg"
          >
            <div className="flex justify-center mb-4">
              <motion.div
                animate={{
                  x: [0, -5, 5, -5, 0],
                }}
                transition={{
                  duration: 0.5,
                  repeat: 1,
                  repeatDelay: 0.2,
                }}
                className="h-16 w-16 rounded-full bg-red-100 dark:bg-red-800/50 flex items-center justify-center"
              >
                <AlertTriangle className="h-10 w-10 text-red-500 dark:text-red-400" />
              </motion.div>
            </div>
            <h3 className="text-2xl font-bold text-red-800 dark:text-red-300 mb-2">
              Error Sending Message
            </h3>
            <p className="text-red-700 dark:text-red-400 mb-4">
              {errorMessage || "Something went wrong. Please try again later."}
            </p>
            <button
              onClick={() => setStatus("idle")}
              className="text-red-700 dark:text-red-400 underline text-sm hover:text-red-800 dark:hover:text-red-300"
            >
              Try again
            </button>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            onSubmit={handleSubmit}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 p-8 rounded-2xl bg-card/50 border border-accent/30 dark:border-accent/20 shadow-lg backdrop-blur-sm"
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
                className={`w-full px-4 py-3 rounded-xl border ${
                  name.error
                    ? "border-red-500 dark:border-red-500"
                    : "border-accent/70"
                } bg-card/50 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all duration-200`}
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
                className={`w-full px-4 py-3 rounded-xl border ${
                  email.error
                    ? "border-red-500 dark:border-red-500"
                    : "border-accent/70"
                } bg-card/50 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all duration-200`}
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
                className={`w-full px-4 py-3 rounded-xl border ${
                  phone.error
                    ? "border-red-500 dark:border-red-500"
                    : "border-accent/70"
                } bg-card/50 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all duration-200`}
                placeholder="(123) 456-7890"
                disabled={status === "submitting"}
              />
              {phone.error && (
                <p className="mt-1 text-sm text-red-500">{phone.error}</p>
              )}
            </motion.div>

            {/* Subject field */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <label
                htmlFor="subject"
                className="block text-sm font-medium mb-1"
              >
                Subject <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={subject.value}
                onChange={(e) => handleChange(e, setSubject)}
                onBlur={() => handleBlur("Subject", subject, setSubject)}
                className={`w-full px-4 py-3 rounded-xl border ${
                  subject.error
                    ? "border-red-500 dark:border-red-500"
                    : "border-accent/70"
                } bg-card/50 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all duration-200`}
                placeholder="How can we help you?"
                disabled={status === "submitting"}
              />
              {subject.error && (
                <p className="mt-1 text-sm text-red-500">{subject.error}</p>
              )}
            </motion.div>

            {/* Service dropdown */}
            {withServicesSelect && (
              <motion.div
                className="relative md:col-span-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <label
                  htmlFor="service"
                  className="block text-sm font-medium mb-1"
                >
                  Service Type <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <button
                    type="button"
                    onClick={() => setIsServicesOpen(!isServicesOpen)}
                    className={`w-full px-4 py-3 rounded-xl border ${
                      service.error
                        ? "border-red-500 dark:border-red-500"
                        : "border-accent/70"
                    } bg-card/50 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-primary/50 text-left flex justify-between items-center transition-all duration-200`}
                    disabled={status === "submitting"}
                  >
                    <span>{service.value || "Select a service"}</span>
                    <ChevronDown
                      className={`h-5 w-5 transition-transform ${isServicesOpen ? "rotate-180" : ""}`}
                    />
                  </button>

                  {isServicesOpen && (
                    <div className="absolute z-10 w-full mt-1 bg-card/90 backdrop-blur-sm shadow-lg rounded-xl border border-accent/70 max-h-56 overflow-y-auto">
                      <ul className="py-1">
                        {servicesOptions.map((serviceOption) => (
                          <li key={serviceOption._id}>
                            <button
                              type="button"
                              onClick={() => selectService(serviceOption.title)}
                              className="w-full text-left px-4 py-2 hover:bg-primary/10 transition-colors"
                            >
                              {serviceOption.title}
                            </button>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
                {service.error && (
                  <p className="mt-1 text-sm text-red-500">{service.error}</p>
                )}
              </motion.div>
            )}

            {/* Message field */}
            <motion.div
              className="relative md:col-span-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <label
                htmlFor="message"
                className="block text-sm font-medium mb-1"
              >
                Message <span className="text-red-500">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                value={message.value}
                onChange={(e) => handleChange(e, setMessage)}
                onBlur={() => handleBlur("Message", message, setMessage)}
                className={`w-full px-4 py-3 rounded-xl border ${
                  message.error
                    ? "border-red-500 dark:border-red-500"
                    : "border-accent/70"
                } bg-card/50 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-primary/50 min-h-[120px] transition-all duration-200`}
                placeholder="Please provide details about your inquiry..."
                disabled={status === "submitting"}
              />
              {message.error && (
                <p className="mt-1 text-sm text-red-500">{message.error}</p>
              )}
            </motion.div>

            {/* File Upload */}
            <motion.div
              className="relative md:col-span-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
            >
              <div className="flex items-center mb-1">
                <label htmlFor="file" className="block text-sm font-medium">
                  Upload Files <span className="text-gray-500">(Optional)</span>
                </label>
                <div className="ml-2 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 text-xs px-2 py-0.5 rounded-full flex items-center">
                  <FileText className="h-3 w-3 mr-1" />
                  Max 20MB total
                </div>
              </div>
              <FileUpload
                onChange={handleFileChange}
                maxFiles={3}
                maxSize={20}
                maxTotalSize={20}
                acceptedFileTypes=".pdf,.doc,.docx,.jpg,.jpeg,.png"
              />
              {fileError && (
                <p className="mt-1 text-sm text-red-500">{fileError}</p>
              )}
            </motion.div>

            {/* Submit button */}
            <motion.div
              className="md:col-span-2 mt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              <button
                type="submit"
                disabled={status === "submitting"}
                className="w-full py-3 px-6 rounded-xl bg-primary text-primary-foreground font-medium flex items-center justify-center transition-all duration-300 hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary/50 disabled:opacity-70 shadow-md hover:shadow-lg"
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

            {/* Privacy note */}
            <motion.div
              className="md:col-span-2 text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
            >
              <p className="text-xs text-muted-foreground mt-3">
                By submitting this form, you agree to our{" "}
                <a href="/privacy" className="text-primary hover:underline">
                  Privacy Policy
                </a>
                . We will never share your information with third parties.
              </p>
            </motion.div>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}

export default ContactForm;
