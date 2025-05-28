import { type SchemaTypeDefinition } from 'sanity'
import testimonial from './testimonial'
import service from './service'
import pricing from './pricing'
import contactInfo from './contactInfo'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [testimonial, service, pricing, contactInfo],
}
