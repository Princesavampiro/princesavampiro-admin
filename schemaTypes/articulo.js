import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'articulo',
  title: 'Articulo',
  type: 'document',
  fields: [
    defineField({
      name: 'titulo',
      title: 'Titulo',
      type: 'object',
      fields: [
        {name: 'es', title: 'Español', type: 'string'},
        {name: 'en', title: 'Inglés', type: 'string'},
      ],
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
