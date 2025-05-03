import Link from "next/link";

export const metadata = {
  title: "Privacy Policy | Academic Help Services",
  description: "Our privacy policy outlining how we collect, use, and protect your personal information.",
};

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative py-24 md:py-28 overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 bg-gradient-to-b from-background to-background/80 dark:from-background dark:to-background/90 z-0" />
        
        {/* Gradient accents */}
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-primary/10 to-transparent rounded-full blur-3xl z-0" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-accent/10 to-transparent rounded-full blur-3xl z-0" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 dark:from-white dark:via-gray-200 dark:to-white bg-clip-text text-transparent">
              Privacy Policy
            </h1>
            
            <div className="prose prose-lg dark:prose-invert max-w-none space-y-8">
              <p className="text-lg text-muted-foreground">
                Last Updated: May 4, 2025
              </p>
              
              <section>
                <h2 className="text-2xl font-bold">Introduction</h2>
                <p>
                  Welcome to Academic Help Services. At Academic Help Services, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
                </p>
                <p>
                  By accessing or using our website and services, you acknowledge that you have read and understood this Privacy Policy. We reserve the right to change this Privacy Policy at any time, and we will notify you of any significant changes by posting the new policy on our website.
                </p>
              </section>
              
              <section>
                <h2 className="text-2xl font-bold">Information We Collect</h2>
                <p>We may collect different types of information from or about you, including:</p>
                <ul>
                  <li><strong>Personal Information</strong>: Name, email address, phone number, and other contact details you provide when registering or ordering services.</li>
                  <li><strong>Academic Information</strong>: Details about your assignments, educational level, subject areas, and deadlines.</li>
                  <li><strong>Payment Information</strong>: Payment method details, billing address, and transaction history.</li>
                  <li><strong>Usage Information</strong>: Data about how you interact with our website, including IP address, browser type, referring/exit pages, operating system, date/time stamps, and clickstream data.</li>
                  <li><strong>Communications</strong>: Records of your interactions with us, including emails, chat logs, and support requests.</li>
                </ul>
              </section>
              
              <section>
                <h2 className="text-2xl font-bold">How We Use Your Information</h2>
                <p>We may use the information we collect for various purposes, including:</p>
                <ul>
                  <li>To provide and maintain our services</li>
                  <li>To process and fulfill your orders</li>
                  <li>To communicate with you about your account or services</li>
                  <li>To improve our website and services</li>
                  <li>To personalize your experience</li>
                  <li>To assist with customer service</li>
                  <li>To send promotional materials and newsletters (if you opt-in)</li>
                  <li>To detect and prevent fraud or abuse</li>
                  <li>To comply with legal obligations</li>
                </ul>
              </section>
              
              <section>
                <h2 className="text-2xl font-bold">Data Sharing and Disclosure</h2>
                <p>We may share your information with:</p>
                <ul>
                  <li><strong>Service Providers</strong>: Third-party vendors who assist us in providing our services, such as payment processors, tutors, writers, and IT support.</li>
                  <li><strong>Business Partners</strong>: Trusted partners who help us deliver our services or enhance your experience.</li>
                  <li><strong>Legal Requirements</strong>: In response to legal processes, court orders, or governmental regulations.</li>
                  <li><strong>Protection of Rights</strong>: To enforce our terms, prevent fraud, or protect our rights, property, or safety, or that of our users or others.</li>
                </ul>
                <p>We do not sell your personal information to third parties.</p>
              </section>
              
              <section>
                <h2 className="text-2xl font-bold">Data Security</h2>
                <p>
                  We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
                </p>
              </section>
              
              <section>
                <h2 className="text-2xl font-bold">Your Privacy Rights</h2>
                <p>Depending on your location, you may have certain rights regarding your personal information, such as:</p>
                <ul>
                  <li>The right to access your personal information</li>
                  <li>The right to rectify inaccurate or incomplete information</li>
                  <li>The right to delete your personal information</li>
                  <li>The right to restrict or object to the processing of your data</li>
                  <li>The right to data portability</li>
                  <li>The right to withdraw consent at any time</li>
                </ul>
                <p>
                  To exercise these rights, please contact us using the information provided in the "Contact Us" section below.
                </p>
              </section>
              
              <section>
                <h2 className="text-2xl font-bold">Cookies and Tracking Technologies</h2>
                <p>
                  We use cookies and similar tracking technologies to collect information about your browsing activities and to understand how you use our website. You can manage your cookie preferences through your browser settings.
                </p>
              </section>
              
              <section>
                <h2 className="text-2xl font-bold">Children's Privacy</h2>
                <p>
                  Our services are not intended for individuals under the age of 16. We do not knowingly collect personal information from children under 16. If we become aware that we have collected personal information from a child under 16, we will take steps to delete that information.
                </p>
              </section>
              
              <section>
                <h2 className="text-2xl font-bold">International Data Transfers</h2>
                <p>
                  Your information may be transferred to and processed in countries other than your own, where our servers are located or our service providers operate. We ensure that appropriate safeguards are in place to protect your information in compliance with applicable data protection laws.
                </p>
              </section>
              
              <section>
                <h2 className="text-2xl font-bold">Changes to This Privacy Policy</h2>
                <p>
                  We may update this Privacy Policy from time to time. The updated version will be indicated by an updated "Last Updated" date at the top of this page. We encourage you to review this Privacy Policy periodically for any changes.
                </p>
              </section>
              
              <section>
                <h2 className="text-2xl font-bold">Contact Us</h2>
                <p>
                  If you have any questions or concerns about this Privacy Policy or our privacy practices, please contact us at:
                </p>
                <p className="mt-4">
                  Email: <a href="mailto:privacy@academichelpservices.com" className="text-primary hover:underline">privacy@academichelpservices.com</a>
                </p>
                <p>
                  Or visit our <Link href="/contact" className="text-primary hover:underline">Contact Page</Link>.
                </p>
              </section>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
