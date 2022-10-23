import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Header from '../components/Header';
import Hero from '../components/Hero';

const Home: NextPage = () => {
  return (
    <div className='bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-scroll z-0'>
      <Head>
        <title>DEVEL's Portfolio</title>
      </Head>

      {/* Header */}
      <Header />
      {/* Hero */}
      <section id="hero" className='snap-center'>
        <Hero />
      </section>
      {/* About */}

      {/* Experience */}

      {/* Skiils */}

      {/* Projects */}

      {/* Contact Me */}

    </div>
  )
}

export default Home
