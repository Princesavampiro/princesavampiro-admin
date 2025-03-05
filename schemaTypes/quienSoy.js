import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'quienSoy',
  title: 'Quién soy',
  type: 'document',
  fields: [
    defineField({
      name: 'titulo',
      title: 'Título de la seccion',
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
      description: 'Como aparece en la barra del navigador (ej. www.princesavampiro.com/quien-soy)',
      type: 'slug',
      options: {
        source: 'titulo.es',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'texto',
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
      name: 'tituloComentarios',
      title: 'Título de la sección de comentarios',
      type: 'object',
      fields: [
        {name: 'es', title: 'Español', type: 'string'},
        {name: 'en', title: 'Inglés', type: 'string'},
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
            {
              name: 'es',
              title: 'Español',
              type: 'blockContent',
              validation: (Rule) => Rule.required(),
            },
            {name: 'en', title: 'Inglés', type: 'blockContent'},
          ],
        },
      ],
    }),

    defineField({
      name: 'portfolio',
      title: 'Portfolio',
      type: 'object',
      description: 'no hace falta llenar los dos campos, con uno solo esta joya 💎 ',
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
            {
              name: 'comentario',
              title: 'Comentario',
              type: 'object',
              fields: [
                {name: 'es', title: 'Español', type: 'string'},
                {name: 'en', title: 'Inglés', type: 'string'},
              ],
            },
            {name: 'url', title: 'URL', type: 'url'},
          ],
        },
      ],
    }),
    defineField({
      name: 'icono',
      title: 'Icono',
      type: 'image',
      hidden: true,
    }),

    defineField({
      name: 'imagen',
      title: 'Imagen',
      type: 'image',
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
