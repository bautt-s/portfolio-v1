import { motion } from "framer-motion"
import { useState, useEffect } from 'react'

const Hero: React.FC = () => {
    const [animate, setAnimate] = useState(false)

    useEffect(() => {
        setTimeout(() => setAnimate(true), 1000)
    }, [])

    const variants = {
        render: { opacity: 1, translateY: 0 },
    }

    return (
        <div className='h-screen flex items-center px-[40px] sm:px-0 md:pl-[100px] mb-[100px] md:mb-0'>
            <div className='flex flex-col mx-auto w-fit'>
                <motion.span className='font-plex text-[var(--primary-col)] text-lg'
                    variants={variants} animate={animate && 'render'} initial={{ opacity: 0, translateY: -20 }} transition={{ delay: 0.4, duration: 0.25 }}>
                    Hi, my name is
                </motion.span>

                <div className='font-inter mt-[15px]'>
                    <motion.h1 className='text-[var(--text-col)] text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold ml-[-5px]'
                        variants={variants} animate={animate && 'render'} initial={{ opacity: 0, translateY: -20 }} transition={{ delay: 0.5, duration: 0.25 }}>
                        Bautista Sánchez.
                    </motion.h1>

                    <motion.h1 className='text-transparent bg-clip-text bg-gradient-to-r from-[#dc2e75] to-[var(--primary-col)] text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold ml-[-5px]'
                        variants={variants} animate={animate && 'render'} initial={{ opacity: 0, translateY: -20 }} transition={{ delay: 0.6, duration: 0.25 }}>
                        Full-stack Web Developer.
                    </motion.h1>

                    <motion.p className='sm:w-[550px] text-[var(--text-col-2)] mt-[35px] text-lg'
                        variants={variants} animate={animate && 'render'} initial={{ opacity: 0, translateY: -20 }} transition={{ delay: 0.7, duration: 0.25 }}>
                        I am a web developer specializing in building (and sometimes designing) exceptional website experiences.
                        Currently, I am focused on finding my first job, and be able to put my skills to good use.
                    </motion.p>
                </div>

                <motion.div variants={variants} animate={animate && 'render'} initial={{ opacity: 0, translateY: -20 }} transition={{ delay: 0.7, duration: 0.25 }}>
                    <button className='text-[var(--primary-col)] border-[var(--primary-col)] border-[1px] rounded w-[180px] py-[15px] font-plex mt-[50px]
                text-sm hover:shadow-[5px_5px_0_-2px_var(--primary-col)] hover:translate-x-[-5px] hover:translate-y-[-5px] transition-all duration-300'>
                        <a href='#contact'>Get in Touch!</a>
                    </button>
                </motion.div>
            </div>
        </div>
    )
}

export default Hero