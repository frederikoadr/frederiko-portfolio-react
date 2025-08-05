import { orderRankField } from '@sanity/orderable-document-list'

export default{
    name: 'testimonials',
    title: 'Testimonials',
    type: 'document',
    fields:[
        {
            name: 'name',
            title: 'Name',
            type: 'string'
        },
        {
            name: 'company',
            title: 'Company',
            type: 'string'
        },
        {
            name: 'image',
            title: 'ImgURL',
            type: 'image',
            options: {
                hotspot: true,
            }
        },
        {
            name: 'feedback',
            title: 'Feedback',
            type: 'string'
        },
        orderRankField({ type: 'testimonials' })
    ]
}