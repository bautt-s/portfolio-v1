import Head from 'next/head'
import Hero from '@/components/hero/Hero'
import Navbar from '@/components/navbar/navbar'
import About from '@/components/about/About'
import Overlay from '@/components/navbar/Overlay'
import Education from '@/components/education/Education'
import Projects from '@/components/projects/Projects'
import Contact from '@/components/contact/Contact'

export default function Home() {
    return (
        <>
            <Head>
                <title>Bautista Sánchez</title>
            </Head>

            <div className='bg-[#0a192f] antialiased'>
                <Navbar />
                <Overlay />
                <Hero />

                <div id="about">
                    <About />
                </div>

                <div id="education">
                    <Education />
                </div>

                <div id='projects'>
                    <Projects />
                </div>

                <div id='contact'>
                    <Contact />
                </div>
            </div>
        </>
    )
}