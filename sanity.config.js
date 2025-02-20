import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'
import {esESLocale} from '@sanity/locale-es-es'
import {structure} from './structure'

const singletonActions = new Set(['publish', 'discardChanges', 'restore'])
const singletonTypes = new Set([
  'config',
  'quienSoy',
  'sonoro',
  'visual',
  'escrito',
  'visceral',
  'investigacion',
])

export default defineConfig({
  name: 'default',
  title: 'princesavampiro',

  projectId: '89kyb225',
  dataset: 'production',

  plugins: [structureTool({structure}), visionTool(), esESLocale()],

  schema: {
    types: schemaTypes,
    templates: (templates) => templates.filter(({schemaType}) => !singletonTypes.has(schemaType)),
  },
  document: {
    actions: (input, context) =>
      singletonTypes.has(context.schemaType)
        ? input.filter(({action}) => action && singletonActions.has(action))
        : input,
  },
})
