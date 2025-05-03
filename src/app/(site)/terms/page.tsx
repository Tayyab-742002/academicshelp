import Link from "next/link";

export const metadata = {
  title: "Terms of Service | Academic Help Services",
  description: "Our terms of service outlining the rules, guidelines, and legal agreements for using our academic services.",
};

export default function TermsOfService() {
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
              Terms of Service
            </h1>
            
            <div className="prose prose-lg dark:prose-invert max-w-none space-y-8">
              <p className="text-lg text-muted-foreground">
                Last Updated: May 4, 2025
              </p>
              
              <section>
                <h2 className="text-2xl font-bold">Introduction</h2>
                <p>
                  Welcome to Academic Help Services. These Terms of Service ("Terms") govern your access to and use of our website, products, and services. By accessing or using our services, you agree to be bound by these Terms and our Privacy Policy.
                </p>
                <p>
                  Please read these Terms carefully before using our services. If you do not agree to these Terms, you may not access or use our services.
                </p>
              </section>
              
              <section>
                <h2 className="text-2xl font-bold">Definitions</h2>
                <p>In these Terms:</p>
                <ul>
                  <li><strong>"Services"</strong> refers to all products, services, content, features, technologies, or functions offered by Academic Help Services.</li>
                  <li><strong>"You"</strong> or <strong>"User"</strong> refers to the individual or entity that accesses or uses our Services.</li>
                  <li><strong>"Content"</strong> refers to any text, data, information, images, videos, materials, or other content provided through our Services.</li>
                  <li><strong>"Academic Materials"</strong> refers to essays, research papers, homework solutions, or other academic content delivered through our Services.</li>
                </ul>
              </section>
              
              <section>
                <h2 className="text-2xl font-bold">Account Registration</h2>
                <p>
                  To access certain features of our Services, you may need to register for an account. When you register, you agree to provide accurate, current, and complete information and to update such information to keep it accurate, current, and complete.
                </p>
                <p>
                  You are responsible for safeguarding your account credentials and for all activities that occur under your account. You agree to notify us immediately of any unauthorized use of your account or any other breach of security.
                </p>
              </section>
              
              <section>
                <h2 className="text-2xl font-bold">Services and Use Guidelines</h2>
                <p>
                  Our Services provide academic assistance, including essay writing, research papers, and homework help. You agree to use our Services only for lawful purposes and in accordance with these Terms.
                </p>
                <p>
                  The Academic Materials we provide are intended to be used for reference, research, and learning purposes only. You agree not to:
                </p>
                <ul>
                  <li>Submit any Academic Materials we provide as your own work without proper attribution</li>
                  <li>Use our Services to engage in academic dishonesty or violate any academic institution's honor code or policies</li>
                  <li>Distribute, publish, or sell any Academic Materials received through our Services</li>
                  <li>Use our Services for any illegal or unauthorized purpose</li>
                  <li>Attempt to access areas of our Services or systems that you are not authorized to access</li>
                </ul>
              </section>
              
              <section>
                <h2 className="text-2xl font-bold">Payment and Refunds</h2>
                <p>
                  You agree to pay all fees associated with the Services you order. All payments are processed through secure third-party payment processors.
                </p>
                <p>
                  Refunds may be issued under certain circumstances, as outlined in our Refund Policy. In general, refunds may be considered when:
                </p>
                <ul>
                  <li>The Academic Materials delivered do not meet the specified requirements</li>
                  <li>The Academic Materials are delivered after the agreed-upon deadline</li>
                  <li>The quality of the Academic Materials does not meet our standard of excellence</li>
                </ul>
                <p>
                  Refund requests must be submitted within 7 days of delivery. All refund requests are evaluated on a case-by-case basis.
                </p>
              </section>
              
              <section>
                <h2 className="text-2xl font-bold">Intellectual Property</h2>
                <p>
                  All content, features, and functionality of our Services, including but not limited to text, graphics, logos, icons, images, audio clips, digital downloads, and software, are the exclusive property of Academic Help Services or its licensors and are protected by copyright, trademark, and other intellectual property laws.
                </p>
                <p>
                  Upon full payment, you are granted a non-exclusive, non-transferable license to use the Academic Materials for reference and research purposes only. We retain all right, title, and interest in and to the Academic Materials.
                </p>
              </section>
              
              <section>
                <h2 className="text-2xl font-bold">Privacy</h2>
                <p>
                  Your privacy is important to us. Please review our <Link href="/privacy" className="text-primary hover:underline">Privacy Policy</Link>, which explains how we collect, use, and disclose information about you.
                </p>
              </section>
              
              <section>
                <h2 className="text-2xl font-bold">Disclaimer of Warranties</h2>
                <p>
                  OUR SERVICES ARE PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT ANY WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
                </p>
                <p>
                  WE DO NOT GUARANTEE THAT OUR SERVICES WILL MEET YOUR REQUIREMENTS, BE UNINTERRUPTED, TIMELY, SECURE, OR ERROR-FREE.
                </p>
              </section>
              
              <section>
                <h2 className="text-2xl font-bold">Limitation of Liability</h2>
                <p>
                  TO THE MAXIMUM EXTENT PERMITTED BY LAW, IN NO EVENT SHALL ACADEMIC HELP SERVICES, ITS DIRECTORS, EMPLOYEES, PARTNERS, AGENTS, SUPPLIERS, OR AFFILIATES BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING WITHOUT LIMITATION, LOSS OF PROFITS, DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES, RESULTING FROM:
                </p>
                <ul>
                  <li>YOUR ACCESS TO OR USE OF OR INABILITY TO ACCESS OR USE OUR SERVICES</li>
                  <li>ANY CONDUCT OR CONTENT OF ANY THIRD PARTY ON OUR SERVICES</li>
                  <li>ANY CONTENT OBTAINED FROM OUR SERVICES</li>
                  <li>UNAUTHORIZED ACCESS, USE, OR ALTERATION OF YOUR TRANSMISSIONS OR CONTENT</li>
                </ul>
              </section>
              
              <section>
                <h2 className="text-2xl font-bold">Indemnification</h2>
                <p>
                  You agree to indemnify, defend, and hold harmless Academic Help Services, its directors, officers, employees, agents, and affiliates from and against any and all claims, liabilities, damages, losses, costs, expenses, or fees (including reasonable attorneys' fees) that such parties may incur as a result of or arising from your violation of these Terms.
                </p>
              </section>
              
              <section>
                <h2 className="text-2xl font-bold">Termination</h2>
                <p>
                  We may terminate or suspend your account and access to our Services immediately, without prior notice or liability, for any reason, including if you breach these Terms.
                </p>
                <p>
                  Upon termination, your right to use our Services will immediately cease. All provisions of these Terms which by their nature should survive termination shall survive termination, including, without limitation, ownership provisions, warranty disclaimers, indemnity, and limitations of liability.
                </p>
              </section>
              
              <section>
                <h2 className="text-2xl font-bold">Changes to Terms</h2>
                <p>
                  We reserve the right to modify or replace these Terms at any time. If a revision is material, we will provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.
                </p>
                <p>
                  By continuing to access or use our Services after those revisions become effective, you agree to be bound by the revised Terms.
                </p>
              </section>
              
              <section>
                <h2 className="text-2xl font-bold">Governing Law</h2>
                <p>
                  These Terms shall be governed by and construed in accordance with the laws of [Your Jurisdiction], without regard to its conflict of law provisions.
                </p>
              </section>
              
              <section>
                <h2 className="text-2xl font-bold">Contact Us</h2>
                <p>
                  If you have any questions about these Terms, please contact us at:
                </p>
                <p className="mt-4">
                  Email: <a href="mailto:terms@academichelpservices.com" className="text-primary hover:underline">terms@academichelpservices.com</a>
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
