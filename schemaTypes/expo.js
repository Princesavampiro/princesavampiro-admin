import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'exposicion',
  title: 'Exposición',
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
      name: 'lugar',
      title: 'Lugar',
      type: 'string',
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
      name: 'imagenes',
      title: 'Imágenes',
      type: 'array',
      of: [{type: 'image'}],
      options: {
        layout: 'grid',
      },
    }),

    defineField({
      name: 'obras',
      title: 'Obras',
      type: 'array',
      of: [
        {
          name: 'obra',
          title: 'Obra',
          type: 'object',
          fields: [
            {
              name: 'titulo',
              title: 'Título',
              type: 'string',
            },
            {
              name: 'fecha',
              title: 'Año',
              type: 'string',
            },
            {
              name: 'medidas',
              title: 'Medidas',
              type: 'string',
            },
            {
              name: 'materiales',
              title: 'Materiales',
              type: 'object',
              fields: [
                {name: 'es', title: 'Español', type: 'text'},
                {name: 'en', title: 'Inglés', type: 'text'},
              ],
            },
            {
              name: 'descripcion',
              title: 'Descripción',
              type: 'object',
              fields: [
                {name: 'es', title: 'Español', type: 'text'},
                {name: 'en', title: 'Inglés', type: 'text'},
              ],
            },
            {name: 'imagen', title: 'Imagen', type: 'image'},
          ],
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
            {name: 'titulo', title: 'Título', type: 'string'},
            {name: 'url', title: 'URL', type: 'url'},
          ],
        },
      ],
    }),
  ],
})
