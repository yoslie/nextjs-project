import Head from 'next/head'
import { Inter } from '@next/font/google'

import HeroBanner from '../components/HeroBanner'
import Experience from '../components/Experience'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Yoslie Portofolio</title>
      </Head>
      <main>
        <HeroBanner />
        <Experience />
      </main>
    </>
  )
}
