export const structure = (S) =>
  S.list()
    .id('root')
    .title('😈 pr1nc3s4 v4mp1r0')
    .items([
      S.listItem()
        .title('Quien Soy?')
        .icon(() => '🤔')
        .schemaType('quienSoy')
        .child(
          S.editor()
            .id('quienSoy')
            .schemaType('quienSoy')
            .documentId('35d5b971-bda9-4ed2-a417-e85fc4357612'),
        ),

      S.divider(),
      S.divider(),

      S.listItem()
        .title('SECCION: VISCERAL')
        .icon(() => '🫀')
        .schemaType('visceral')
        .child(
          S.editor()
            .id('visceral')
            .schemaType('visceral')
            .documentId('d383f833-009d-4512-9c27-40e97bdf56a9'),
        ),

      S.divider(),
      S.divider(),

      S.listItem()
        .title('SECCION: SONORO')
        .icon(() => '🎼')
        .schemaType('sonoro')
        .child(
          S.editor()
            .id('sonoro')
            .schemaType('sonoro')
            .documentId('3417e1a6-3def-4160-833e-5a62f6715bd3'),
        ),
      S.listItem()
        .title('Releases')
        .icon(() => '💽')
        .child(
          S.documentTypeList('release')
            .title('Releases')
            .filter('_type == $type', {type: 'release'}),
        ),

      S.listItem()
        .title('Tipos de releases')
        .icon(() => '🏷️')
        .child(
          S.documentTypeList('tipoDeRelease')
            .title('Tipos de releases')
            .filter('_type == $type', {type: 'tipoDeRelease'}),
        ),

      S.listItem()
        .title('Lives')
        .icon(() => '🎤')
        .child(S.documentTypeList('live').title('Lives').filter('_type == $type', {type: 'live'})),

      S.divider(),
      S.divider(),

      S.listItem()
        .title('SECCION: VISUAL')
        .icon(() => '👁️')
        .schemaType('visual')
        .child(
          S.editor()
            .id('visual')
            .schemaType('visual')
            .documentId('bccf39b8-7360-4216-b2e8-4d6ee9fde36c'),
        ),

      S.listItem()
        .title('Exposiciones')
        .icon(() => '🖼️')
        .child(
          S.documentTypeList('exposicion')
            .title('Exposiciones')
            .filter('_type == $type', {type: 'exposicion'}),
        ),

      S.divider(),
      S.divider(),

      S.listItem()
        .title('SECCION: ESCRITO')
        .icon(() => '📜')
        .schemaType('escrito')
        .child(
          S.editor()
            .id('escrito')
            .schemaType('escrito')
            .documentId('77a09b1a-a520-4e71-93b0-a2d331002992'),
        ),

      S.listItem()
        .title('Investigacion')
        .icon(() => '👩‍🔬')
        .schemaType('investigacion')
        .child(
          S.editor()
            .id('investigacion')
            .schemaType('investigacion')
            .documentId('fa45ec0a-e942-49d5-befe-cce96ad4ae39'),
        ),

      S.listItem()
        .title('Articulos de la investigacion')
        .icon(() => '🧪')
        .child(
          S.documentTypeList('articulo')
            .title('Articulos')
            .filter('_type == $type', {type: 'articulo'}),
        ),

      S.listItem()
        .title('Blog')
        .icon(() => '💬')
        .child(
          S.documentTypeList('blogPost')
            .title('Posts')
            .filter('_type == $type', {type: 'blogPost'}),
        ),

      S.divider(),
      S.divider(),

      S.listItem()
        .title('Configuracion del sitio')
        .icon(() => '📎')
        .schemaType('config')
        .child(
          S.editor()
            .id('config')
            .schemaType('config')
            .documentId('10e641fd-bca3-4941-9a62-a255d4446dd7'),
        ),
    ])
