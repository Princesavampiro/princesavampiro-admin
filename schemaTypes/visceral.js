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

    {
      name: 'descripcion',
      title: 'Descripción',
      type: 'object',
      fields: [
        {name: 'es', title: 'Español', type: 'enhancedBlockContent'},
        {name: 'en', title: 'Inglés', type: 'enhancedBlockContent'},
      ],
      deprecated: {
        reason: 'Usar el campo de abajo.',
      },
      hidden: true,
    },

    {
      name: 'texto',
      title: 'Descripción',
      type: 'object',
      fields: [
        {name: 'es', title: 'Español', type: 'enhancedBlockContent'},
        {name: 'en', title: 'Inglés', type: 'enhancedBlockContent'},
      ],
    },

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

    defineField({
      name: 'icono',
      title: 'Icono',
      type: 'image',
      hidden: true,
    }),
  ],
})
