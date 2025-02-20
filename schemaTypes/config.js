import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'config',
  title: 'Configuracion del sitio',
  type: 'document',
  fields: [
    defineField({
      name: 'tituloDelSitio',
      title: 'Título del sitio',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
  ],
})
