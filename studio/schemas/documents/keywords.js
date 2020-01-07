export default {
    name: 'keywords',
    title: 'Keywords',
    description: 'Keywords associated with this campaign.',
    type: 'object',
    fields: [
        {
            name: 'terms',
            type: 'array',
            of: [{
                type: 'string',
                options: {
                    layout: 'tags'
                }
            }]
        }
    ],
    preview: {
        select: {
            termList: 'terms'
        },
        prepare({ title='Keywords' }) {
            return {
                title
            }
        }
    }
}