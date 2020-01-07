const BlocksToMarkdown=require('@sanity/block-content-to-markdown')
const groq=require('groq')
const client=require('./sanityClient.js')
const serializers=require('./serializers')

function generatePages(landingPage) {
  return {
    ...landingPage,
    main: BlocksToMarkdown(landingPage.topCopy.body, { serializers, ...client.config() }),
    //form: BlocksToMarkdown(landingPage.form.body, { serializers, ...client.config() }) //,
    lftCol: BlocksToMarkdown(landingPage.teaserLft.body, { serializers, ...client.config() }),
    rtCol: BlocksToMarkdown(landingPage.teaserRt.body, { serializers, ...client.config() })
  }
}

async function getPages() {
  const filter=groq`*[_type == "campaign" && schedual.startDate < now()]`
  const projection=groq`{
    _id,
    owner,
    description,
    active,
    schedual,
    keywords,
    links,
    "logoSrc": logo.logoImage.asset->url,
    "logoAlt": logo.logoImage.alt,
    "heroSrc": hero.heroImage.asset->url,
    hero,
    topCopy,
    form,
    teaserLft,
    teaserRt,
    contact
  }`
  const order=`| order(schedual.startDate asc)`
  const query=[filter, projection, order].join(' ')
  const docs=await client.fetch(query).catch(err => console.error(err))
  const preparePages=docs.map(generatePages)
  //console.log(`Page: `+JSON.stringify(preparePages[0]))
  //console.log(preparePages)
  return preparePages
}

module.exports=getPages
