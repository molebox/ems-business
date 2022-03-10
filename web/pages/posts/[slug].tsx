
import groq from 'groq'
import client from '../../client'
import Image from 'next/image'
import {Avatar} from 'components/avatar'
import {Stack} from 'components'
import { useNextSanityImage } from 'next-sanity-image';

interface Props {
  post: {
    title: string;
    name: string;
    categories: string[];
    authorImage: any;
  }
}

export default function Post(props: Props) {

  const  {
    title,
    name,
    categories,
    authorImage
  } = props.post

  const imageProps = useNextSanityImage(
    client,
    authorImage
  )
  
  return (
    <article>
      <Stack gap="medium">
        <h1>{title ? title : 'No title'}</h1>
        <Stack gap="large" direction="row" align="center">
          <span>By {name}</span>
          <span>{categories && categories.map((category: string) => category).join(', ')}</span>
          <Avatar>
            <Image {...imageProps} layout="fixed" alt={name} objectFit="contain"/>
          </Avatar>
        </Stack>
        {/* <Button color="primary" cornerRadius="slight">Button</Button> */}
      </Stack>
    </article>
  )
}

const query = groq`*[_type == "post" && slug.current == $slug][0]{
  title,
  "name": author->name,
  "categories": categories[]->title,
  "authorImage": author->image
}`

export async function getStaticPaths() {
  const paths = await client.fetch(`
  *[_type == "post" && defined(slug.current)][].slug.current
  `)

  return {
    paths: paths.map((slug: any) => ({ params: { slug } })),
    fallback: true,
  }
}

export const getStaticProps = async(context: any) => {
  // default slug so it doesn't show undefined
  const { slug = '' } = context.params
  const post = await client.fetch(query, { slug })
  console.log({post})
  return {
    props: {
      post,
    },
  }
}