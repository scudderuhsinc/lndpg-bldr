export default {
    name: 'teaserRt',
    type: 'document',
    title: 'Landing Page Right Teaser',
    description: `Right Teaser block, right column.`,
    fields: [
        {
            name: 'body',
            type: 'bodyPortableText'
        }
    ],
    preview: {
        select: {
            body: 'body'
        },
        prepare({ title='Right Teaser' }) {
            return {
                title
            }
        }
    }
}