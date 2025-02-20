import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'config',
  title: 'Configuracion del sitio',
  type: 'document',
  fields: [
    defineField({
      name: 'tituloDelSitio',
      title: 'Titulo del sitio',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'embed',
      title: 'Codigo de embed inicial',
      type: 'text',
    }),
  ],
})
