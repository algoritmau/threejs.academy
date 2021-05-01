import { ThemeProvider } from 'next-themes'
import Layout from '~/components/Layout'

import '~/styles/globals.sass'

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class">
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  )
}

export default MyApp
