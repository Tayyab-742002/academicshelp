import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'contactInfo',
  title: 'Contact Information',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'A name for this contact information set (e.g., "Main Contact", "Support Team")',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'emails',
      title: 'Email Addresses',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'emailType',
              title: 'Email Type',
              type: 'string',
              options: {
                list: [
                  { title: 'General', value: 'general' },
                  { title: 'Support', value: 'support' },
                  { title: 'Sales', value: 'sales' },
                  { title: 'Privacy', value: 'privacy' },
                  { title: 'Legal', value: 'legal' },
                  { title: 'Other', value: 'other' },
                ],
              },
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'email',
              title: 'Email Address',
              type: 'string',
              validation: (Rule) => 
                Rule.required()
                .regex(
                  /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  {
                    name: 'email',
                    invert: false,
                  }
                )
                .error('Invalid email address'),
            }),
            defineField({
              name: 'primary',
              title: 'Primary Contact',
              type: 'boolean',
              description: 'Is this the primary email for this type?',
              initialValue: false,
            }),
          ],
        },
      ],
    }),
    defineField({
      name: 'phoneNumbers',
      title: 'Phone Numbers',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'phoneType',
              title: 'Phone Type',
              type: 'string',
              options: {
                list: [
                  { title: 'Office', value: 'office' },
                  { title: 'Mobile', value: 'mobile' },
                  { title: 'WhatsApp', value: 'whatsapp' },
                  { title: 'Telegram', value: 'telegram' },
                  { title: 'Signal', value: 'signal' },
                  { title: 'Viber', value: 'viber' },
                  { title: 'Fax', value: 'fax' },
                  { title: 'Other', value: 'other' },
                ],
              },
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'number',
              title: 'Phone Number',
              type: 'string',
              description: 'Include country code (e.g., +1 555-123-4567)',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'primary',
              title: 'Primary Contact',
              type: 'boolean',
              description: 'Is this the primary number for this type?',
              initialValue: false,
            }),
            defineField({
              name: 'availableHours',
              title: 'Available Hours',
              type: 'string',
              description: 'When this number is available (e.g., "24/7" or "9 AM - 5 PM EST")',
            }),
          ],
        },
      ],
    }),
    defineField({
      name: 'socialMedia',
      title: 'Social Media',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'platform',
              title: 'Platform',
              type: 'string',
              options: {
                list: [
                  { title: 'Facebook', value: 'facebook' },
                  { title: 'Twitter', value: 'twitter' },
                  { title: 'Instagram', value: 'instagram' },
                  { title: 'LinkedIn', value: 'linkedin' },
                  { title: 'YouTube', value: 'youtube' },
                  { title: 'TikTok', value: 'tiktok' },
                  { title: 'Pinterest', value: 'pinterest' },
                  { title: 'Discord', value: 'discord' },
                  { title: 'Reddit', value: 'reddit' },
                  { title: 'Other', value: 'other' },
                ],
              },
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'url',
              title: 'URL',
              type: 'url',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'handle',
              title: 'Handle/Username',
              type: 'string',
              description: 'Your username on this platform (e.g., @academichelp)',
            }),
          ],
        },
      ],
    }),
    defineField({
      name: 'messengerApps',
      title: 'Messenger Apps',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'appType',
              title: 'App Type',
              type: 'string',
              options: {
                list: [
                  { title: 'WhatsApp', value: 'whatsapp' },
                  { title: 'Telegram', value: 'telegram' },
                  { title: 'Messenger', value: 'messenger' },
                  { title: 'Skype', value: 'skype' },
                  { title: 'WeChat', value: 'wechat' },
                  { title: 'Line', value: 'line' },
                  { title: 'Other', value: 'other' },
                ],
              },
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'handle',
              title: 'Username/ID',
              type: 'string',
              description: 'Username or ID for this messenger app',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'url',
              title: 'Direct Link',
              type: 'url',
              description: 'Direct link to chat (if applicable)',
            }),
          ],
        },
      ],
    }),
    defineField({
      name: 'address',
      title: 'Physical Address',
      type: 'object',
      fields: [
        defineField({
          name: 'street',
          title: 'Street Address',
          type: 'string',
        }),
        defineField({
          name: 'city',
          title: 'City',
          type: 'string',
        }),
        defineField({
          name: 'state',
          title: 'State/Province',
          type: 'string',
        }),
        defineField({
          name: 'postalCode',
          title: 'Postal/Zip Code',
          type: 'string',
        }),
        defineField({
          name: 'country',
          title: 'Country',
          type: 'string',
        }),
        defineField({
          name: 'showOnWebsite',
          title: 'Display on Website',
          type: 'boolean',
          description: 'Whether to display the physical address on the website',
          initialValue: true,
        }),
      ],
    }),
    defineField({
      name: 'businessHours',
      title: 'Business Hours',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'day',
              title: 'Day',
              type: 'string',
              options: {
                list: [
                  { title: 'Monday', value: 'monday' },
                  { title: 'Tuesday', value: 'tuesday' },
                  { title: 'Wednesday', value: 'wednesday' },
                  { title: 'Thursday', value: 'thursday' },
                  { title: 'Friday', value: 'friday' },
                  { title: 'Saturday', value: 'saturday' },
                  { title: 'Sunday', value: 'sunday' },
                ],
              },
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'open',
              title: 'Opening Time',
              type: 'string',
              description: 'Format: HH:MM AM/PM (e.g., "9:00 AM")',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'close',
              title: 'Closing Time',
              type: 'string',
              description: 'Format: HH:MM AM/PM (e.g., "5:00 PM")',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'closed',
              title: 'Closed',
              type: 'boolean',
              description: 'Check if closed on this day',
              initialValue: false,
            }),
          ],
        },
      ],
    }),
    defineField({
      name: 'timezone',
      title: 'Timezone',
      type: 'string',
      description: 'Your business timezone (e.g., "EST", "GMT+1", "Pacific Time")',
    }),
    defineField({
      name: 'responseTime',
      title: 'Average Response Time',
      type: 'string',
      description: 'How quickly you typically respond to inquiries (e.g., "Within 1 hour", "24 hours")',
    }),
    defineField({
      name: 'preferredContactMethod',
      title: 'Preferred Contact Method',
      type: 'string',
      options: {
        list: [
          { title: 'Email', value: 'email' },
          { title: 'Phone', value: 'phone' },
          { title: 'WhatsApp', value: 'whatsapp' },
          { title: 'Contact Form', value: 'form' },
          { title: 'Other', value: 'other' },
        ],
      },
      description: 'The best way for clients to reach you',
    }),
  ],
  preview: {
    select: {
      title: 'title',
    },
  },
}) 