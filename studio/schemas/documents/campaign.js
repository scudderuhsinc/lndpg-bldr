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
      title: 'Logo',
      type: 'logoImage'
    },
    {
      name: 'hero',
      title: 'Page Hero',
      type: 'hero'
    },
    {
      name: 'topCopy',
      title: 'Top Copy',
      type: 'topCopy'
    },
    {
      name: 'form',
      title: 'Form',
      type: 'form'
    },
    {
      name: 'teaserLft',
      title: 'Teaser Left',
      type: 'teaserLft'
    },
    {
      name: 'teaserRt',
      title: 'Teaser Right',
      type: 'teaserRt'
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
