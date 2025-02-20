import {defineField, defineType} from 'sanity'

export default defineType({
  title: 'Embed',
  name: 'embed',
  type: 'object',
  fields: [
    defineField({
      name: 'html',
      type: 'text',
      title: 'HTML embed code',
    }),
  ],
})
