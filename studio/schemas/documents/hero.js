export default {
    name: 'hero',
    title: 'Landing Page Hero',
    type: 'document',
    fields: [
        {
            name: 'title',
            type: 'string',
            title: 'Hero Title',
            description: 'Hero title',
            options: {
                maxLength: 96
            }
        },
        {
            name: 'subtitle',
            type: 'string',
            title: 'Hero Subtitle',
            description: 'This text will follow the title in the Hero',
            options: {
                maxLength: 140
            }
        },
        {
            name: 'heroImage',
            title: 'Hero image',
            description: `This will be the campaign page's hero image.`,
            type: 'mainImage'
        }
    ],
    preview: {
        select: {
            st: 'title'
        },
        prepare({ title='Landing Page Hero', st }) {
            return {
                title,
                subtitle: st
            }
        }
    }
}