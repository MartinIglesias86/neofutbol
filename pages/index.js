import Head from 'next/head'
import Header from '../components/Header'
import Hero from '../components/Hero'

export default function Home() {
  return (
    <div>
      <Head>
        <title>NFT Neo FuTbol</title>
        <meta name="description" content="NFT Neo FuTbol" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main >
        <Header />
        <Hero />
        <div>Hola</div>
      </main>
    </div>
  )
}
