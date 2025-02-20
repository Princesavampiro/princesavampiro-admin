import {defineField} from 'sanity'

export default function createSection(title) {
  return {
    name: title.toLowerCase(),
    title: title,
    type: 'document',
    fields: [
      defineField({
        name: 'titulo',
        title: 'Título de la seccion de lo ' + title.toUpperCase(),
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

      {
        name: 'descripcion',
        title: 'Descripción',
        type: 'object',
        fields: [
          {name: 'es', title: 'Español', type: 'blockContent'},
          {name: 'en', title: 'Inglés', type: 'blockContent'},
        ],
      },
    ],
    preview: {
      select: {
        tituloEs: 'titulo.es',
      },
      prepare({tituloEs}) {
        return {title: tituloEs}
      },
    },
  }
}
