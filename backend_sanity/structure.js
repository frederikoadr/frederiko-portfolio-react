import { orderableDocumentListDeskItem } from '@sanity/orderable-document-list'

const orderableTypes = [
  { type: 'abouts', title: '👤 Abouts' },
  { type: 'works', title: '💼 Works' },
  { type: 'skills', title: '🏂 Skills' },
  { type: 'testimonials', title: '🗣️ Testimonials' },
  { type: 'experiences', title: '🧑‍💻 Experiences' },
]

export const structure = (S, context) =>
  S.list()
    .title('Content')
    .items([
      ...orderableTypes.map(({ type, title }) =>
        orderableDocumentListDeskItem({
          type,
          title,
          S,
          context,
        })
      ),
      ...S.documentTypeListItems().filter(
        (item) => !orderableTypes.some(({ type }) => type === item.getId())
      ),
    ])
