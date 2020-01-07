export default {
    name: 'form',
    type: 'document',
    title: 'Form Element',
    description: `Top copy block, right column.`,
    fields: [
        {
            name: 'body',
            type: 'bodyPortableText'
        }
    ],
    preview: {
        select: {},
        prepare({ title='Form' }) {
            return {
                title
            }
        }
    }
}