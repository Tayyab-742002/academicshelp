export interface Email {
  emailType: string;
  email: string;
  primary: boolean;
}

export interface PhoneNumber {
  phoneType: string;
  number: string;
  primary: boolean;
  availableHours?: string;
}

export interface SocialMedia {
  platform: string;
  url: string;
  handle?: string;
}

export interface MessengerApp {
  appType: string;
  handle: string;
  url?: string;
}

export interface Address {
  street?: string;
  city?: string;
  state?: string;
  postalCode?: string;
  country?: string;
  showOnWebsite?: boolean;
}

export interface BusinessHour {
  day: string;
  open: string;
  close: string;
  closed: boolean;
}

export interface ContactInfo {
  title?: string;
  emails?: Email[];
  phoneNumbers?: PhoneNumber[];
  socialMedia?: SocialMedia[];
  messengerApps?: MessengerApp[];
  address?: Address;
  businessHours?: BusinessHour[];
  timezone?: string;
  responseTime?: string;
  preferredContactMethod?: string;
}

export interface ContactMethod {
  title: string;
  content: string;
  icon: React.ReactNode;
  href: string;
} 