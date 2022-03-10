import "@fontsource/inter/400.css"
import "@fontsource/inter/500.css"
import "@fontsource/inter/600.css"
import { BaseLayout } from "components"
import type { AppProps } from 'next/app'
import { resetCSS } from 'stitches.config'

function MyApp({ Component, pageProps }: AppProps) {
  resetCSS()
  return (
    <div>
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
