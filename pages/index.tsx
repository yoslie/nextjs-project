import Head from 'next/head'
import { Inter } from '@next/font/google'

import HeroBanner from '../components/HeroBanner'
import Experience from '../components/Experience'
import Skills from '../components/Skills'
import Project from '../components/Project'
import Footer from '../components/Footer'

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
        <Skills />
        <Project />
        <Footer />
      </main>
    </>
  )
}
