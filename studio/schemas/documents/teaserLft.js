export default {
    name: 'teaserLft',
    type: 'document',
    title: 'Landing Page Left Teaser',
    description: `Left Teaser block, left column.`,
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
        prepare({ title='Left Teaser' }) {
            return {
                title
            }
        }
    }
}