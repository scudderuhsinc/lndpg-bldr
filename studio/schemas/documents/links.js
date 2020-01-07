export default {
    name: 'links',
    title: 'URLs',
    type: 'object',
    fields: [
        {
            title: 'Domain',
            name: 'local',
            type: 'string',
            description: `https://subdomain.[ DOMAIN-NAME ].extention, the domain name only – ubunique, max 24 charactors, all lowercase and no spaces`,
            validation: Rule => Rule.error('no more than 24 charactors, all lowercase and no spaces.').lowercase().required(),
            options: {
                maxLength: 24
            }
        },
        {
            title: 'Development URL',
            name: 'dev',
            type: 'url'
        },
        {
            title: 'Production URL',
            name: 'prod',
            type: 'url'
        }
    ],
    preview: {
        select: {
            l: 'local',
            p: 'prod'
        },
        prepare({ l, p }) {
            return {
                title: `URLs & Local Files`,
                subtitle: `_sites/ `+l+` /index.html`
            }
        }
    }
}