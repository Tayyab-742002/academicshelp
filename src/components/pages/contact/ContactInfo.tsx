"use client";

import { useEffect, useState } from "react";
import TagLine from "@/components/ui/TagLine";
import { motion } from "framer-motion";
import { Facebook, Instagram, Linkedin, Mail, MapPinned, PhoneCall, PhoneOutgoing, Twitter, Globe, MessageSquare } from "lucide-react";
import { getContactInfo } from "@/lib/contactinfo";
import Loading from "@/components/common/loading";
import { ContactInfo as ContactInfoType, SocialMedia, ContactMethod, Email, PhoneNumber, BusinessHour } from "@/types/contact";

// Create a simple cache mechanism to store the contact info
let contactInfoCache: ContactInfoType | null = null;

export default function ContactInfo() {
  const [contactInfo, setContactInfo] = useState<ContactInfoType | null>(contactInfoCache);
  const [isLoading, setIsLoading] = useState(!contactInfoCache);
  const [error, setError] = useState<string | null>(null);

  // Fetch contact information from Sanity
  useEffect(() => {
    // Skip fetching if we already have cached data
    if (contactInfoCache) {
      return;
    }

    async function fetchContactInfo() {
      try {
        setIsLoading(true);
        setError(null);
        
        console.log("ContactInfo component: Fetching contact info...");
        const info = await getContactInfo();
        
        if (info) {
          console.log("ContactInfo component: Successfully fetched contact info");
          setContactInfo(info);
          contactInfoCache = info; // Cache the data
        } else {
          console.log("ContactInfo component: No contact info returned");
          setError("Unable to load contact information");
        }
      } catch (error) {
        console.error("Error fetching contact info:", error);
        setError("Error loading contact information. Please try again later.");
      } finally {
        setIsLoading(false);
      }
    }

    fetchContactInfo();

    // Add a cleanup function to reset loading state if component unmounts during fetch
    return () => {
      if (isLoading) {
        setIsLoading(false);
      }
    };
  }, [isLoading]);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: (i: number) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    }),
  };

  // Generate contact methods from Sanity data
  const getContactMethods = (): ContactMethod[] => {
    if (!contactInfo) {
      return [];
    }

    const methods: ContactMethod[] = [];

    // Primary email
    const primaryEmail = contactInfo?.emails?.find((email: Email) => email.primary) || contactInfo?.emails?.[0];
    if (primaryEmail) {
      methods.push({
        title: primaryEmail.emailType.charAt(0).toUpperCase() + primaryEmail.emailType.slice(1) + " Email",
        content: primaryEmail.email,
        icon: <Mail className="h-6 w-6 text-primary" />,
        href: `mailto:${primaryEmail.email}`,
      });
    }

    // Primary phone
    const primaryPhone = contactInfo?.phoneNumbers?.find((phone: PhoneNumber) => 
      phone.primary && (phone.phoneType === 'office' || phone.phoneType === 'mobile')
    ) || contactInfo?.phoneNumbers?.find((phone: PhoneNumber) => 
      phone.phoneType === 'office' || phone.phoneType === 'mobile'
    );
    
    if (primaryPhone) {
      methods.push({
        title: primaryPhone.phoneType.charAt(0).toUpperCase() + primaryPhone.phoneType.slice(1) + " Phone",
        content: primaryPhone.number + (primaryPhone.availableHours ? ` (${primaryPhone.availableHours})` : ""),
        icon: <PhoneOutgoing className="h-6 w-6 text-primary" />,
        href: `tel:${primaryPhone.number.replace(/\s+/g, '')}`,
      });
    }
    
    // Messaging app (WhatsApp, Telegram, etc.)
    const messagingApp = contactInfo?.phoneNumbers?.find((phone: PhoneNumber) => 
      phone.phoneType === 'whatsapp' || phone.phoneType === 'telegram' || phone.phoneType === 'signal'
    );
    
    if (messagingApp) {
      const appName = messagingApp.phoneType.charAt(0).toUpperCase() + messagingApp.phoneType.slice(1);
      methods.push({
        title: appName,
        content: messagingApp.number,
        icon: <MessageSquare className="h-6 w-6 text-primary" />,
        href: messagingApp.phoneType === 'whatsapp' 
          ? `https://wa.me/${messagingApp.number.replace(/\+|\s+|-|\(|\)/g, '')}`
          : `tel:${messagingApp.number.replace(/\s+/g, '')}`,
      });
    }

    // Physical address
    if (contactInfo?.address && contactInfo.address.showOnWebsite !== false) {
      const addressParts = [
        contactInfo.address.street,
        contactInfo.address.city,
        contactInfo.address.state,
        contactInfo.address.postalCode,
        contactInfo.address.country
      ].filter(Boolean);
      
      if (addressParts.length) {
        methods.push({
          title: "Office",
          content: addressParts.join(", "),
          icon: <MapPinned className="h-6 w-6 text-primary" />,
          href: `https://maps.google.com/?q=${encodeURIComponent(addressParts.join(", "))}`,
        });
      }
    }

    return methods;
  };

  const contactMethods = getContactMethods();

  // Get social media links from Sanity data
  const getSocialLinks = (): SocialMedia[] => {
    if (!contactInfo?.socialMedia?.length) {
      return [];
    }
    
    return contactInfo.socialMedia.map((social: SocialMedia) => ({
      platform: social.platform,
      url: social.url,
      handle: social.handle,
    }));
  };

  const socialLinks = getSocialLinks();
  
  // Helper function to get the right icon for social platforms
  const getSocialIcon = (platform: string) => {
    switch (platform) {
      case 'facebook':
        return <Facebook className="h-5 w-5" />;
      case 'twitter':
        return <Twitter className="h-5 w-5" />;
      case 'instagram':
        return <Instagram className="h-5 w-5" />;
      case 'linkedin':
        return <Linkedin className="h-5 w-5" />;
      default:
        return <Globe className="h-5 w-5" />;
    }
  };

  // Render a loading state during initial load
  if (isLoading) {
    return (
      <Loading />
    );
  }

  // Render an error state
  if (error) {
    return (
      <section className="py-16 md:py-24 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-10xl mx-auto w-full flex flex-col place-items-center">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Contact Information
              </h2>
              <p className="text-red-500">{error}</p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      {/* Enhanced background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-muted/10 to-background dark:from-muted/5 dark:to-background z-0" />

      {/* Subtle decorative gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/5 via-accent/5 to-transparent dark:from-primary/10 dark:via-accent/5 dark:to-transparent opacity-60 z-0" />

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
          className="max-w-10xl mx-auto w-full flex flex-col place-items-center"
        >
          <motion.div
            variants={itemVariants}
            custom={0}
            className="text-center mb-12"
          >
            <TagLine
              tagline="Ways to Reach Us"
              TagLineIcon={<PhoneCall className="h-4 w-4 mr-2" />}
            />

            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Ways to Reach Us
            </h2>

            <p className="text-lg text-muted-foreground max-w-xl mx-auto">
              {contactInfo?.responseTime ? 
                `Our team typically responds ${contactInfo.responseTime.toLowerCase()}. We're available through multiple channels to ensure you get the assistance you need.` :
                `Our team is available through multiple channels to ensure you get the assistance you need, when you need it.`
              }
            </p>
            
            {contactInfo?.preferredContactMethod && (
              <p className="mt-2 text-sm text-primary font-medium">
                Preferred contact method: {contactInfo.preferredContactMethod.charAt(0).toUpperCase() + contactInfo.preferredContactMethod.slice(1)}
              </p>
            )}
          </motion.div>

          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-16"
          >
            {contactMethods.length > 0 ? (
              contactMethods.map((method, index) => (
                <motion.a
                  href={method.href}
                  key={index}
                  custom={index + 1}
                  variants={itemVariants}
                  className="relative group no-underline"
                  whileHover={{ y: -5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  target={method.title === "Office" ? "_blank" : undefined}
                  rel={method.title === "Office" ? "noopener noreferrer" : undefined}
                >
                  <div className="bg-gradient-to-br from-card/95 to-card/70 backdrop-blur-md p-6 md:p-8 rounded-2xl border border-primary/60 dark:border-primary/30 shadow-lg hover:shadow-xl transition-all duration-300 h-full relative overflow-hidden">
                    <div className="absolute -right-6 -bottom-6 w-24 h-24 rounded-full bg-primary/20 group-hover:bg-accent/40 transition-all duration-300" />

                    <div className="w-14 h-14 bg-primary/10 dark:bg-primary/20 rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300 relative">
                      {method.icon}
                    </div>

                    <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors duration-300 relative">
                      {method.title}
                    </h3>

                    <p className="text-muted-foreground relative">
                      {method.content}
                    </p>
                  </div>
                </motion.a>
              ))
            ) : (
              <motion.div
                variants={itemVariants}
                custom={1}
                className="md:col-span-3 text-center p-8"
              >
                <p className="text-muted-foreground">Contact information will be available soon.</p>
              </motion.div>
            )}
          </motion.div>

          {/* Social media links */}
          {socialLinks.length > 0 && (
            <motion.div
              variants={itemVariants}
              custom={4}
              className="flex flex-col items-center"
            >
              <div className="flex justify-center space-x-5">
                {socialLinks.map((social: SocialMedia, i: number) => (
                  <motion.a
                    key={social.platform}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    custom={i + 5}
                    variants={itemVariants}
                    className="w-12 h-12 flex items-center justify-center rounded-full dark:bg-card/20 border border-primary/50 dark:border-primary/30 text-muted-foreground hover:text-primary hover:border-primary/40 transition-all duration-200 shadow-sm hover:shadow"
                    whileHover={{ y: -3 }}
                  >
                    {getSocialIcon(social.platform)}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          )}
          
          {/* Business hours if available */}
          {contactInfo?.businessHours && contactInfo.businessHours.length > 0 && (
            <motion.div
              variants={itemVariants}
              custom={6}
              className="mt-12 p-6 rounded-xl border border-primary/20 max-w-md mx-auto bg-card/50"
            >
              <h3 className="text-lg font-semibold mb-3 text-center">Business Hours</h3>
              <div className="grid grid-cols-2 gap-2">
                {contactInfo.businessHours.map((hours: BusinessHour) => (
                  <div key={hours.day} className="flex justify-between py-1">
                    <span className="font-medium capitalize">{hours.day}:</span>
                    <span className="text-muted-foreground">
                      {hours.closed ? 'Closed' : `${hours.open} - ${hours.close}`}
                    </span>
                  </div>
                ))}
              </div>
              {contactInfo.timezone && (
                <p className="mt-3 text-xs text-center text-muted-foreground">All times in {contactInfo.timezone}</p>
              )}
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
