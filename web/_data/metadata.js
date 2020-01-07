// const groq=require('groq')
// const client=require('../utils/sanityClient')
// module.exports=async function () {
//   return await client.fetch(groq`
//     *[_id == "campaign"]{
//       ...
//     }[0]
//   `)
// }
module.exports={
  title: 'Your Campaign',
  url: 'https://myurl.com/',
  description: `I am writing about my experiences as a naval navel-gazer.`,
  feed: {
    subtitle: `I am writing about my experiences as a naval navel-gazer.`,
    filename: `feed.xml`,
    path: `/feed/feed.xml`,
    id: `https://myurl.com/`
  },
  author: {
    name: `Your Name Here`,
    email: `youremailaddress@example.com`
  }
}