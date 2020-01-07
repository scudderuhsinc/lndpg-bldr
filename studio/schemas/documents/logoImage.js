export default {
    name: 'logoImage',
    title: 'Logo Image',
    type: 'document',
    fields: [
        {
            name: 'logoImage',
            title: 'Logo image',
            description: `This will be the campaign page's logo in the header.`,
            type: 'mainImage'
        }
    ],
    preview: {
        select: {
            img: 'logoImage'
        },
        prepare({ title='Header Logo', img }) {
            return {
                title,
                media: img
            }
        }
    }
}