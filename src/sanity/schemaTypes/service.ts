import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'service',
  title: 'Services',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'icon',
      title: 'Icon',
      description: 'Icon name from Lucide React (e.g., "book", "pen-tool", "code")',
      type: 'string',
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Writing', value: 'writing' },
          { title: 'Advanced', value: 'advanced' },
          { title: 'Editing', value: 'editing' },
          { title: 'Assistance', value: 'assistance' },
          { title: 'Coding', value: 'coding' },
          { title: 'Homework', value: 'homework' },
          { title: 'Other', value: 'other' },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'features',
      title: 'Key Features',
      description: 'List of key features for this service (displayed on cards)',
      type: 'array',
      of: [{ type: 'string' }],
      validation: (Rule) => Rule.max(6),
    }),
    defineField({
      name: 'shortDescription',
      title: 'Short Description',
      description: 'Brief description for service cards (max 150 chars)',
      type: 'text',
      validation: (Rule) => Rule.required().max(150),
    }),
    defineField({
      name: 'fullDescription',
      title: 'Full Description',
      description: 'Detailed description of the service',
      type: 'array',
      of: [{ type: 'block' }],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'featured',
      title: 'Featured',
      type: 'boolean',
      description: 'Set to true to feature this service on the homepage',
      initialValue: false,
    }),
    defineField({
      name: 'mainImage',
      title: 'Main Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'sampleWorks',
      title: 'Sample Works',
      description: 'Examples of previous work for this service',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'title',
              title: 'Title',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'description',
              title: 'Description',
              type: 'text',
            }),
            defineField({
              name: 'image',
              title: 'Image',
              type: 'image',
              options: {
                hotspot: true,
              },
            }),
            defineField({
              name: 'fileUrl',
              title: 'File URL',
              description: 'URL to download sample file (if applicable)',
              type: 'url',
            }),
          ],
        },
      ],
    }),
    defineField({
      name: 'deliveryTimeframes',
      title: 'Delivery Timeframes',
      description: 'Available delivery timeframes for this service',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'name',
              title: 'Name',
              type: 'string',
              validation: (Rule) => Rule.required(),
              description: 'E.g., "Standard", "Express", "Urgent"',
            }),
            defineField({
              name: 'duration',
              title: 'Duration',
              type: 'string',
              validation: (Rule) => Rule.required(),
              description: 'E.g., "3-5 days", "24 hours", "8 hours"',
            }),
            defineField({
              name: 'priceMultiplier',
              title: 'Price Multiplier',
              type: 'number',
              validation: (Rule) => Rule.required().min(1),
              description: 'Multiplier for base price (e.g., 1.0 for standard, 1.5 for express)',
            }),
          ],
        },
      ],
    }),
    defineField({
      name: 'academicLevels',
      title: 'Academic Levels',
      description: 'Available academic levels for this service',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'name',
              title: 'Name',
              type: 'string',
              validation: (Rule) => Rule.required(),
              description: 'E.g., "High School", "Undergraduate", "Master\'s", "PhD"',
            }),
            defineField({
              name: 'priceMultiplier',
              title: 'Price Multiplier',
              type: 'number',
              validation: (Rule) => Rule.required().min(1),
              description: 'Multiplier for base price (e.g., 1.0 for high school, 1.3 for undergraduate)',
            }),
          ],
        },
      ],
    }),
    defineField({
      name: 'basePrice',
      title: 'Base Price Per Page/Hour',
      type: 'number',
      validation: (Rule) => Rule.required().min(1),
      description: 'Base price per page or hour for standard delivery and high school level',
    }),
    defineField({
      name: 'pricingUnit',
      title: 'Pricing Unit',
      type: 'string',
      options: {
        list: [
          { title: 'Per Page', value: 'page' },
          { title: 'Per Hour', value: 'hour' },
          { title: 'Fixed Price', value: 'fixed' },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'faqs',
      title: 'FAQs',
      description: 'Frequently asked questions about this service',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'question',
              title: 'Question',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'answer',
              title: 'Answer',
              type: 'array',
              of: [{ type: 'block' }],
              validation: (Rule) => Rule.required(),
            }),
          ],
        },
      ],
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
      description: 'Order to display services in the dropdown menu (lower numbers first)',
      initialValue: 10,
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'shortDescription',
      media: 'mainImage',
    },
  },
})
