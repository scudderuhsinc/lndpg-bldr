export default {
    name: 'teasers',
    type: 'document',
    title: 'Landing Page Teasers',
    description: `Teasers, each a single column. * Two required *`,
    fields: [
        {
            name: 'teaser01',
            title: '1st Teaser',
            type: 'bodyPortableText',
            validation: Rule => Rule.error('You have to define a 1st Teaser.').required()
        },
        {
            name: 'teaser02',
            title: '2nd Teaser',
            type: 'bodyPortableText',
            validation: Rule => Rule.error('You have to define a 2nd Teaser.').required()
        },
        {
            name: 'teaser03',
            title: '3rd Teaser',
            type: 'bodyPortableText'
        }
    ]
}