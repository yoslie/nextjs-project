import Head from 'next/head'
import { Inter } from '@next/font/google'

import Navbar from '../components/Navbar'
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
        <meta property="og:title" content="Yoslie's Personal Web Portofolio" key="title" />
        <meta name="description" content="Checkout my nextjs project web portofolio." key="desc" />
        <meta
          property="og:description"
          content="Checkout my Next.js project web portofolio"
        />
        <meta
          property="og:image"
          content="/image/profile.jpg"
        />
      </Head>
      <main>
        <Navbar />
        <HeroBanner />
        <Experience />
        <Skills />
        <Project />
        <Footer />
      </main>
    </>
  )
}
