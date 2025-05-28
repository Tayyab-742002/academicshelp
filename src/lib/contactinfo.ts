import { client } from "@/sanity/lib/client";

/**
 * Fetches contact information from Sanity
 * @returns Contact information document
 */
export async function getContactInfo() {
  try {
    console.log("Fetching contact info...");
    const query = `*[_type == "contactInfo"][0] {
      title,
      emails[] {
        emailType,
        email,
        primary
      },
      phoneNumbers[] {
        phoneType,
        number,
        primary,
        availableHours
      },
      socialMedia[] {
        platform,
        url,
        handle
      },
      messengerApps[] {
        appType,
        handle,
        url
      },
      address {
        street,
        city,
        state,
        postalCode,
        country,
        showOnWebsite
      },
      businessHours[] {
        day,
        open,
        close,
        closed
      },
      timezone,
      responseTime,
      preferredContactMethod
    }`;

    // First check if any contactInfo documents exist
    const count = await client.fetch(`count(*[_type == "contactInfo"])`);
    console.log(`Found ${count} contactInfo documents`);
    
    if (count === 0) {
      console.log("No contactInfo documents found in Sanity");
      // Return fallback data
      return {
        emails: [
          {
            emailType: "support",
            email: "academichelp0007@gmail.com",
            primary: true
          }
        ],
        phoneNumbers: [
          {
            phoneType: "office",
            number: "+61489911266",
            primary: true
          },
          {
            phoneType: "whatsapp",
            number: "+14169070931",
            primary: false
          }
        ],
        socialMedia: [
          {
            platform: "facebook",
            url: "https://facebook.com/academicassist",
            handle: "@academicassist"
          },
          {
            platform: "twitter",
            url: "https://twitter.com/academicassist",
            handle: "@academicassist"
          },
          {
            platform: "instagram",
            url: "https://instagram.com/academicassist",
            handle: "@academicassist"
          },
          {
            platform: "linkedin",
            url: "https://linkedin.com/company/academicassist",
            handle: "Academic Assist"
          }
        ],
        address: {
          street: "123 Education St",
          city: "Academic City",
          state: "State",
          postalCode: "12345",
          country: "Country",
          showOnWebsite: true
        }
      };
    }

    const contactInfo = await client.fetch(query);
    console.log("Contact info fetched:", contactInfo ? "success" : "null");
    return contactInfo;
  } catch (error) {
    console.error('Error fetching contact info:', error);
    return null;
  }
} 