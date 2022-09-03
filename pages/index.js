import Head from 'next/head'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Footer from '../components/Footer'
import Info from '../components/Info'

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
        <Info />
        <Footer />
      </main>
    </div>
  )
}
