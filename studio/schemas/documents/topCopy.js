export default {
    name: 'topCopy',
    type: 'document',
    title: 'Landing Page Top Copy',
    description: `Top copy block, left column next to form.`,
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
        prepare({ title='Top Copy' }) {
            return {
                title
            }
        }
    }
}