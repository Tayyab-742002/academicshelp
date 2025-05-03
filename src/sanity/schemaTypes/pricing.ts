import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'pricing',
  title: 'Pricing Plans',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'E.g., "Standard", "Premium", "Ultimate"',
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
      name: 'description',
      title: 'Description',
      type: 'text',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'basePrice',
      title: 'Base Price',
      type: 'number',
      validation: (Rule) => Rule.required().min(0),
    }),
    defineField({
      name: 'featured',
      title: 'Featured',
      type: 'boolean',
      description: 'Set to true to highlight this plan as recommended',
      initialValue: false,
    }),
    defineField({
      name: 'color',
      title: 'Accent Color',
      description: 'Color for the pricing card (hex code)',
      type: 'string',
    }),
    defineField({
      name: 'icon',
      title: 'Icon',
      description: 'Icon name from Lucide React (e.g., "star", "shield", "zap")',
      type: 'string',
    }),
    defineField({
      name: 'features',
      title: 'Features',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'feature',
              title: 'Feature',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'included',
              title: 'Included',
              type: 'boolean',
              initialValue: true,
            }),
            defineField({
              name: 'highlight',
              title: 'Highlight',
              type: 'boolean',
              description: 'Highlight this feature',
              initialValue: false,
            }),
            defineField({
              name: 'tooltip',
              title: 'Tooltip',
              description: 'Additional information shown on hover',
              type: 'string',
            }),
          ],
        },
      ],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'subjectPricing',
      title: 'Subject-Specific Pricing',
      description: 'Price variations for different subjects',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'subject',
              title: 'Subject',
              type: 'string',
              validation: (Rule) => Rule.required(),
              description: 'E.g., "Mathematics", "Literature", "Computer Science"',
            }),
            defineField({
              name: 'priceMultiplier',
              title: 'Price Multiplier',
              type: 'number',
              validation: (Rule) => Rule.required().min(0.5),
              description: 'Multiplier for base price (e.g., 1.0 for standard subjects, 1.2 for complex subjects)',
            }),
          ],
        },
      ],
    }),
    defineField({
      name: 'ctaText',
      title: 'CTA Button Text',
      type: 'string',
      initialValue: 'Get Started',
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
      description: 'Order to display pricing plans (lower numbers first)',
      initialValue: 10,
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'basePrice',
    },
    prepare({ title, subtitle }) {
      return {
        title,
        subtitle: `$${subtitle}`,
      }
    },
  },
})
