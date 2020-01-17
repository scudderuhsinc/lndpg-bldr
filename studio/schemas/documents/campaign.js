export default {
  name: 'campaign',
  title: 'Campaign',
  type: 'document',
  fields: [
    {
      name: 'owner',
      title: 'Owner',
      type: 'string',
      description: `The Campaign's parent facility or System.`
    },
    {
      name: 'description',
      type: 'string',
      title: 'Description',
      description: `A description for campaign listings and displayed in <html> <head> <title>`
    },
    {
      name: 'schedual',
      title: 'Schedule',
      type: 'active'
    },
    {
      name: 'analytics',
      title: 'Analytics',
      type: 'analytics'
    },
    {
      name: 'keywords',
      title: 'Keywords',
      type: 'keywords'
    },
    {
      name: 'links',
      title: 'URLs & Files',
      type: 'links'
    },
    {
      name: 'logo',
      type: 'logoImage'
    },
    {
      name: 'hero',
      type: 'hero'
    },
    {
      name: 'main',
      type: 'main'
    },
    {
      name: 'teasers',
      type: 'teasers'
    },
    {
      name: 'contact',
      title: 'Contact',
      type: 'contact'
    },
    {
      name: 'thankyou',
      title: 'Thank You Message',
      type: 'thankyou'
    }
  ],
  preview: {
    select: {
      title: 'owner',
      subtitle: 'description'
    }
  }
}
