import Head from 'next/head'
import Hero from '~/components/Hero'

export default function Home() {
  return (
    <>
      <Head>
        <title>Three.js Academy</title>
        <link rel="icon" href="/favicon.svg" />
      </Head>

      <Hero />
    </>
  )
}
