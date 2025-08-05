
import { orderableDocumentListDeskItem } from '@sanity/orderable-document-list'

export const structure = (S, context) =>
  S.list()
    .title('Content')
    .items([
      orderableDocumentListDeskItem({
        type: 'works',
        title: '💼 Works',
        S,
        context,
      }),
      orderableDocumentListDeskItem({
        type: 'skills',
        title: '🏂 Skills',
        S,
        context,
      }),
      orderableDocumentListDeskItem({
        type: 'testimonials',
        title: '🗣️ Testimonials',
        S,
        context,
      }),
      ...S.documentTypeListItems().filter((item) =>
        !['works', 'skills', 'testimonials'].includes(item.getId()),
    ),
  ])
