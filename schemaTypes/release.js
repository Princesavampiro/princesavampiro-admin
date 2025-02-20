import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'release',
  title: 'Release',
  type: 'document',
  fields: [
    defineField({
      name: 'titulo',
      title: 'Título',
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
      name: 'sello',
      title: 'Sello',
      type: 'string',
    }),

    defineField({
      name: 'artwork',
      title: 'Arte de tapa',
      type: 'image',
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
      name: 'tipoDeRelease',
      title: 'Tipo de release',
      type: 'reference',
      to: {type: 'tipoDeRelease'},
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'embed',
      title: 'Código de embed',
      type: 'text',
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
      name: 'links',
      title: 'Links',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'link',
          title: 'Link',
          fields: [
            {name: 'titulo', title: 'Título', type: 'string'},
            {name: 'url', title: 'URL', type: 'url'},
          ],
        },
      ],
    }),
  ],
})
