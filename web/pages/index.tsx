import { BaseLayout, Hero } from 'components'
import {styled} from '../stitches.config'
import type { NextPage } from 'next'
import Head from 'next/head'

// inspo https://minimalism.life/

const PageLayout = styled('div', {
  variants: {
    m: {
      none: {
        m: '$none',
      },
      slight: {
        m: '$slight',
      },
      medium: {
        m: '$medium',
      },
      large: {
        m: '$large',
      },
      xl: {
        m: '$xl',
      },
      xxl: {
        m: '$xxl',
      },
      huge: {
        m: '$huge',
      }
    },
  },
})

const Home: NextPage = () => {
  return (
    <BaseLayout>
      <Hero/>
    </BaseLayout>
  )
}

export default Home
