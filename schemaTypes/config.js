import {defineType, defineField} from 'sanity'
import embed from './embed'

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

    defineField({
      name: 'audio',
      title: 'Audio',
      type: 'object',
      fields: [
        {
          name: 'archivo',
          title: 'Archivo',
          type: 'file',
          description: 'Usar formato mp3 e intentar no subir archivos muy pesados',
        },
        {name: 'url', title: 'URL', type: 'url'},
      ],
      description:
        'Archivo de audio que se reproduce en la pagina de inicio. Es suficiente con que uno de los  campos tenga contenido.',
    }),

    defineField({
      name: 'releaseDestacado',
      title: 'Release destacado',
      type: 'reference',
      to: [{type: 'release'}],
      options: {
        disableNew: true,
      },
    }),
  ],
})
