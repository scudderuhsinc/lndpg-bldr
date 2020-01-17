const BlocksToMarkdown=require('@sanity/block-content-to-markdown')
const groq=require('groq')
const client=require('./sanityClient.js')
const serializers=require('./serializers')

function generate(ea) {
  return {
    ...ea,
    main: BlocksToMarkdown(ea.main.body, { serializers, ...client.config() }),
    t01: BlocksToMarkdown(ea.teaser01, { serializers, ...client.config() }),
    t02: BlocksToMarkdown(ea.teaser02, { serializers, ...client.config() }),
    t03: BlocksToMarkdown(ea.teaser03, { serializers, ...client.config() }),
    thankyou: BlocksToMarkdown(ea.thankyou.body, { serializers, ...client.config() })
  }
}

async function getArchived() {
  const filter=groq`*[_type == "campaign" && schedual.startDate < now()]`
  const projection=groq`{
    _id,
    owner,
    description,
    active,
    schedual,
    analytics,
    contact,
    links,
    "logoSrc": logo.logoImage.asset->url,
    "logoAlt": logo.logoImage.alt,
    "heroSrc": hero.heroImage.asset->url,
    hero,
    main,
    "teaser01": teasers.teaser01,
    "teaser02": teasers.teaser02,
    "teaser03": teasers.teaser03,
    thankyou
  }`
  const order=`| order(schedual.startDate asc)`
  const query=[filter, projection, order].join(' ')
  const docs=await client.fetch(query).catch(err => console.error(err))
  const archivedPages=docs.map(generate)
  //console.log(`Page: `+JSON.stringify(preparePages[0]))
  //console.log(preparePages)
  return archivedPages
}

module.exports=getArchived
