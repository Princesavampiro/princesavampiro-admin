import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'visceral',
  title: 'Visceral',
  type: 'document',
  fields: [
    defineField({
      name: 'titulo',
      title: 'Titulo de la seccion de Visceral',
      type: 'string',
      description: 'Como aparece en la pagina web',

      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'slug',
      title: 'Slug',
      description: 'Como aparece en la barra del navigador (ej. www.princesavampiro.com/visceral)',
      type: 'slug',
      options: {
        source: 'titulo',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'texto',
      title: 'Descripción',
      type: 'object',
      fields: [
        {name: 'es', title: 'Español', type: 'blockContent'},
        {name: 'en', title: 'Inglés', type: 'blockContent'},
      ],
    }),

    defineField({
      name: 'contacto',
      title: 'Contacto',
      type: 'object',
      fields: [
        {
          name: 'mensaje',
          title: 'Mensaje',
          type: 'object',
          fields: [
            {name: 'es', title: 'Español', type: 'string'},
            {name: 'en', title: 'Inglés', type: 'string'},
          ],
        },
        {
          name: 'email',
          title: 'Email',
          type: 'string',
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

    defineField({
      name: 'embed',
      title: 'Código de embed',
      type: 'text',
    }),
  ],
})
