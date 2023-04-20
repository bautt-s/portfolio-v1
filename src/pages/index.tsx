import Head from 'next/head'
import Hero from '@/components/Hero'
import Navbar from '@/components/navbar'
import About from '@/components/About'

export default function Home() {
    return (
        <>
            <Head>
                <title>Bautista Sánchez</title>
            </Head>

            <div className='bg-[#0a192f] antialiased'>
                <Navbar />
                <Hero />
                <About />
            </div>
        </>
    )
}