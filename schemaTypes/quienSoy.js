import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'quienSoy',
  title: 'Quien soy',
  type: 'document',
  fields: [
    defineField({
      name: 'titulo',
      title: 'Titulo de la seccion',
      type: 'object',
      description: 'Como aparece en la pagina web',
      fields: [
        {name: 'es', title: 'Español', type: 'string'},
        {name: 'en', title: 'Inglés', type: 'string'},
      ],
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'slug',
      title: 'Slug',
      description:
        'Como aparece en la barra del navigador (ej. www.princesavampiro.com/titulo-de-la-seccion)',
      type: 'slug',
      options: {
        source: 'titulo.es',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'bio',
      title: 'Bio',
      type: 'object',
      fields: [
        defineField({
          name: 'es',
          title: 'Español',
          type: 'blockContent',
        }),
        defineField({
          name: 'en',
          title: 'Inglés',
          type: 'blockContent',
        }),
      ],
    }),

    defineField({
      name: 'comentarios',
      title: 'Comentarios de gente',
      type: 'array',
      of: [
        {
          name: 'comentario',
          title: 'Comentario',
          type: 'object',
          fields: [
            {
              name: 'autor',
              title: 'Autor',
              type: 'string',
            },
            {name: 'es', title: 'Español', type: 'blockContent'},
            {name: 'en', title: 'Inglés', type: 'blockContent'},
          ],
        },
      ],
    }),

    defineField({
      name: 'cv',
      title: 'CV',
      type: 'object',
      fields: [
        {name: 'file', title: 'Archivo', type: 'file'},
        {name: 'url', title: 'Link', type: 'url'},
      ],
    }),

    defineField({
      name: 'portfolio',
      title: 'Portfolio',
      type: 'object',
      fields: [
        {name: 'file', title: 'Archivo', type: 'file'},
        {name: 'url', title: 'Link', type: 'url'},
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
  preview: {
    select: {
      tituloEs: 'titulo.es',
    },
    prepare({tituloEs}) {
      return {title: tituloEs}
    },
  },
})
