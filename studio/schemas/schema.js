// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

// document schemas
import active from './documents/active'
import campaign from './documents/campaign'
import contact from './documents/contact'
import links from './documents/links'
import logoImage from './documents/logoImage'
import form from './documents/form'
import hero from './documents/hero'
import keywords from './documents/keywords'
import teaserLft from './documents/teaserLft'
import teaserRt from './documents/teaserRt'
import thankyou from './documents/thankyou'
import topCopy from './documents/topCopy'

// Object types
import bodyPortableText from './objects/bodyPortableText'
import mainImage from './objects/mainImage'

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'campaigns',
  // Then proceed to concatenate our our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    // The following are document types which will appear
    // in the studio.
    active,
    campaign,
    contact,
    links,
    logoImage,
    bodyPortableText,
    form,
    hero,
    keywords,
    mainImage,
    teaserLft,
    teaserRt,
    thankyou,
    topCopy

    // When added to this list, object types can be used as
    // { type: 'typename' } in other document schemas
  ])
})
