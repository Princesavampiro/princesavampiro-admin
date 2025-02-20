import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'live',
  title: 'Live',
  type: 'document',
  fields: [
    defineField({
      name: 'titulo',
      title: 'Titulo',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'titulo',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'fecha',
      title: 'Fecha',
      type: 'date',
      options: {
        dateFormat: 'DD-MM-YYYY',
      },
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'imagenes',
      title: 'Imágenes',
      type: 'array',
      of: [{type: 'image'}],
      options: {
        layout: 'grid',
      },
    }),

    defineField({
      name: 'embedVideo',
      title: 'Codigo de embed de video',
      type: 'text',
    }),

    defineField({
      name: 'embedAudio',
      title: 'Codigo de embed de audio',
      type: 'text',
    }),

    defineField({
      name: 'texto',
      title: 'Texto',
      type: 'object',
      fields: [
        {
          name: 'es',
          title: 'Español',
          type: 'blockContent',
        },
        {
          name: 'en',
          title: 'Inglés',
          type: 'blockContent',
        },
      ],
    }),

    defineField({
      name: 'links',
      title: 'Links',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'link',
          title: 'Link',
          fields: [
            {name: 'titulo', title: 'Titulo', type: 'string'},
            {name: 'url', title: 'URL', type: 'url'},
          ],
        },
      ],
    }),
  ],
})
