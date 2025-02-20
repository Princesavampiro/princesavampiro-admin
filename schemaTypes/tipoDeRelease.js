import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'tipoDeRelease',
  title: 'Tipo de release',
  type: 'document',
  fields: [defineField({name: 'tipoDeRelease', title: 'Tipo de Release', type: 'string'})],
})
