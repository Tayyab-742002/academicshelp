import React from 'react';
import { Html, Body, Head, Heading, Hr, Container, Preview, Section, Text, Link, Row, Column } from '@react-email/components';

interface ContactFormEmailProps {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  service?: string;
  hasAttachments?: boolean;
}

export const ContactFormEmail = ({
  name = 'Customer',
  email = 'customer@example.com',
  phone = 'Not provided',
  subject = 'Contact Form Submission',
  message = 'No message provided',
  service = 'Not specified',
  hasAttachments = false,
}: ContactFormEmailProps) => {
  return (
    <Html>
      <Head />
      <Preview>New Contact Form Submission: {subject}</Preview>
      <Body style={main}>
        <Container style={container}>
          {/* Header */}
          <Section style={header}>
            <Row>
              <Column>
                <Text style={logoText}>Academic Help Services</Text>
              </Column>
            </Row>
          </Section>

          {/* Hero section */}
          <Section style={hero}>
            <Heading style={h1}>New Contact Form Submission</Heading>
            <Text style={heroText}>
              You have received a new inquiry from the Academic Help Services website. Please find the details below.
            </Text>
          </Section>
          
          {/* Contact Information */}
          <Section style={section}>
            <Heading as="h2" style={h2}>Contact Information</Heading>
            <Hr style={hr} />
            
            <Row style={infoRow}>
              <Column style={infoLabel}>Name:</Column>
              <Column style={infoValue}>{name}</Column>
            </Row>
            
            <Row style={infoRow}>
              <Column style={infoLabel}>Email:</Column>
              <Column style={infoValue}>
                <Link href={`mailto:${email}`} style={link}>{email}</Link>
              </Column>
            </Row>
            
            <Row style={infoRow}>
              <Column style={infoLabel}>Phone:</Column>
              <Column style={infoValue}>
                {phone !== 'Not provided' ? (
                  <Link href={`tel:${phone}`} style={link}>{phone}</Link>
                ) : (
                  'Not provided'
                )}
              </Column>
            </Row>
            
            <Row style={infoRow}>
              <Column style={infoLabel}>Service:</Column>
              <Column style={infoValue}>{service}</Column>
            </Row>
          </Section>
          
          {/* Message Details */}
          <Section style={section}>
            <Heading as="h2" style={h2}>Message Details</Heading>
            <Hr style={hr} />
            
            <Row style={infoRow}>
              <Column style={infoLabel}>Subject:</Column>
              <Column style={infoValue}>{subject}</Column>
            </Row>
            
            <Text style={messageLabel}>Message:</Text>
            <Section style={messageBox}>
              <Text style={messageText}>{message}</Text>
            </Section>
            
            {hasAttachments && (
              <Section style={attachmentSection}>
                <Text style={attachmentText}>
                  📎 This message includes file attachments. Please check the attached files.
                </Text>
              </Section>
            )}
          </Section>
          
          {/* Action section */}
          <Section style={ctaSection}>
            <Text style={ctaText}>
              Please respond to this inquiry promptly to provide excellent customer service.
            </Text>
          </Section>
          
          {/* Footer */}
          <Section style={footer}>
            <Text style={footerText}>
              This is an automated email from Academic Help Services. Please do not reply to this email.
            </Text>
            <Text style={footerLinks}>
              <Link href="https://academic-help-service.com" style={footerLink}>Website</Link> • 
              <Link href="https://academic-help-service.com/privacy" style={footerLink}>Privacy Policy</Link> • 
              <Link href="https://academic-help-service.com/terms" style={footerLink}>Terms of Service</Link>
            </Text>
            <Text style={copyright}>
              © {new Date().getFullYear()} Academic Help Services. All rights reserved.
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
};

// Styles
const main = {
  backgroundColor: '#f8fafc',
  fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, sans-serif',
  color: '#334155',
};

const container = {
  margin: '0 auto',
  padding: '0',
  backgroundColor: '#ffffff',
  borderRadius: '8px',
  maxWidth: '600px',
  overflow: 'hidden',
  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
};

const header = {
  backgroundColor: '#ec705e',
  padding: '24px',
  textAlign: 'center' as const,
};

const logoText = {
  color: '#ffffff',
  fontSize: '20px',
  fontWeight: 'bold',
  margin: '0',
  textAlign: 'center' as const,
};

const hero = {
  padding: '32px 24px',
  textAlign: 'center' as const,
  backgroundColor: '#ffffff',
};

const h1 = {
  color: '#ec705e',
  fontSize: '24px',
  fontWeight: 'bold',
  margin: '0 0 16px',
  padding: '0',
  textAlign: 'center' as const,
};

const heroText = {
  fontSize: '16px',
  lineHeight: '24px',
  color: '#64748b',
  margin: '0 0 24px',
};

const section = {
  backgroundColor: '#f8fafc',
  padding: '24px',
  borderRadius: '6px',
  margin: '0 24px 24px',
  border: '1px solid #e2e8f0',
};

const h2 = {
  color: '#ec705e',
  fontSize: '18px',
  fontWeight: 'bold',
  margin: '0 0 12px',
  padding: '0',
};

const infoRow = {
  margin: '12px 0',
};

const infoLabel = {
  width: '30%',
  verticalAlign: 'top',
  paddingRight: '12px',
  fontSize: '14px',
  fontWeight: 'bold',
  color: '#030303',
};

const infoValue = {
  width: '70%',
  verticalAlign: 'top',
  fontSize: '14px',
  color: '#334155',
};

const messageLabel = {
  fontSize: '14px',
  fontWeight: 'bold',
  color: '#030303',
  margin: '12px 0 8px',
};

const messageBox = {
  backgroundColor: '#ffffff',
  padding: '16px',
  borderRadius: '6px',
  border: '1px solid #e2e8f0',
};

const messageText = {
  whiteSpace: 'pre-wrap' as const,
  fontSize: '14px',
  lineHeight: '22px',
  color: '#334155',
  margin: '0',
};

const attachmentSection = {
  backgroundColor: '#eff6ff',
  padding: '12px 16px',
  borderRadius: '6px',
  marginTop: '16px',
  border: '1px solid #bfdbfe',
};

const attachmentText = {
  fontSize: '14px',
  color: '#2563eb',
  margin: '0',
};

const ctaSection = {
  padding: '0 24px 24px',
  textAlign: 'center' as const,
};

const ctaText = {
  fontSize: '16px',
  color: '#475569',
  fontStyle: 'italic',
  margin: '0',
};

const footer = {
  backgroundColor: '#f1f5f9',
  padding: '24px',
  borderTop: '1px solid #e2e8f0',
  textAlign: 'center' as const,
};

const footerText = {
  fontSize: '14px',
  color: '#64748b',
  margin: '0 0 16px',
};

const footerLinks = {
  fontSize: '14px',
  color: '#64748b',
  margin: '0 0 16px',
};

const footerLink = {
  color: '#3b82f6',
  textDecoration: 'none',
  margin: '0 8px',
};

const copyright = {
  fontSize: '12px',
  color: '#94a3b8',
  margin: '0',
};

const hr = {
  borderColor: '#e2e8f0',
  margin: '16px 0',
};

const link = {
  color: '#3b82f6',
  textDecoration: 'none',
};

export default ContactFormEmail; 