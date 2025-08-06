import { orderRankField } from '@sanity/orderable-document-list'

export default{
    name:'experiences',
    title:'Experiences',
    type: 'document',
    fields:[
        {
            name:'year',
            title:'Year',
            type:'string'
        },
        {
            name:'works',
            title:'Works',
            type:'array',
            of:[{ type:'workExperience'}]
        },
        orderRankField({ type: 'experiences' })
    ]
}