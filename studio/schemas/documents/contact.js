export default {
    name: 'contact',
    title: 'Contact Information',
    type: 'document',
    fields: [
        {
            name: 'addr',
            type: 'array',
            description: `Seporate Address Lines * ignore location's name (campaign owner) *`,
            of: [{ type: 'string' }],
            title: 'Address'
        },
        {
            name: 'phone',
            type: 'string',
            title: 'Telephone Number',
            options: {
                maxLength: 40
            }
        },
        {
            name: 'map',
            title: 'Map <iframe> Source',
            type: 'string',
            description: `Google 'Embed a map', <iframe src="=> this string <="></iframe>`
        }
    ],
    preview: {
        select: {
            tel: 'phone'
        },
        prepare({ title='Contact Information', tel }) {
            return {
                title,
                subtitle: tel
            }
        }
    }
}