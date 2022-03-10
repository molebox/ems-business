import sanityClient from '@sanity/client'

export default sanityClient({
  projectId: 'g1ikcedb', // you can find this in sanity.json
  dataset: 'production', // or the name you chose in step 1
  useCdn: true,
  apiVersion: '2021-08-31' // `false` if you want to ensure fresh data
})