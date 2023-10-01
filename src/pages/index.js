import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { NavBar } from '@/components/NavBar'
import { Banner } from '@/components/Banner'
import { Skills } from '@/components/Skills'
import { Projects } from '@/components/Projects'
import { Contact } from '@/components/Contact'
import { Footer } from '@/components/Footer'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Techlife</title>
        <meta name="description" content="Coming Soon" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`App`}>
        <NavBar />
        <Banner />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </main>
    </>
  )
}
