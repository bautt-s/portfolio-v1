import logo from '../../assets/logo.png'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { BiMenuAltRight } from 'react-icons/bi'
import { useEffect, useState } from 'react'

const Navbar: React.FC = () => {
    const [menu, setMenu] = useState(false)
    const handleMenu = () => setMenu(!menu)

    // state and function made to show nav on upper scroll
    const [prevScrollPos, setPrevScrollPos] = useState(0)
    const [visible, setVisible] = useState(true)

    const handleScroll = () => {
        const currentScrollPos = window.scrollY

        if (currentScrollPos > prevScrollPos) setVisible(false)
        else setVisible(true)
        
        setPrevScrollPos(currentScrollPos)
    }

    // state and variants used to animate nav elements only on initial render
    const [animate, setAnimate] = useState(false)

    const variants = {
        render: { opacity: 1, translateY: 0 },
    }

    useEffect(() => {
        setTimeout(() => setAnimate(true), 1000)
        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll)
    })

    return (
        <div className={`w-full fixed px-[40px] flex flex-row items-center bg-[var(--background)] backdrop-blur-md z-50 
                        transition-all duration-300 ${visible ? 'h-[80px]' : 'h-0'} ${prevScrollPos && 'shadow-2xl'}`}>
            <Link href='/' className={visible ? 'contents' : 'hidden'}>
                <motion.img src={logo.src} className='w-[50px] h-auto'
                    initial={{ opacity: 0 }} variants={variants} animate={animate && 'render'} transition={{ delay: 0.2, duration: 0.25 }} />
            </Link>

            <div className={`flex-row ml-auto items-center hidden ${visible ? 'md:flex' : 'md:hidden'}`}>
                <ul className='font-plex flex flex-row md:text-xs lg:text-sm text-[var(--text-col)]'>
                    <motion.li className='hover:text-[var(--primary-col)] transition-colors duration-300'
                        initial={{ opacity: 0, translateY: -20 }} variants={variants} animate={animate && 'render'} transition={{ delay: 0.2, duration: 0.25 }}>
                        <a href='#about'><strong className='text-[var(--primary-col)]'>01. </strong>About</a>
                    </motion.li>

                    <motion.li className='ml-[25px] hover:text-[var(--primary-col)] transition-colors duration-300'
                        initial={{ opacity: 0, translateY: -20 }} variants={variants} animate={animate && 'render'} transition={{ delay: 0.4, duration: 0.25 }}>
                        <a href='#education'><strong className='text-[var(--primary-col)]'>02. </strong>Education</a>
                    </motion.li>

                    <motion.li className='ml-[25px] hover:text-[var(--primary-col)] transition-colors duration-300'
                        initial={{ opacity: 0, translateY: -20 }} variants={variants} animate={animate && 'render'} transition={{ delay: 0.6, duration: 0.25 }}>
                        <a href='#projects'><strong className='text-[var(--primary-col)]'>03. </strong>Projects</a>
                    </motion.li>

                    <motion.li className='ml-[25px] hover:text-[var(--primary-col)] transition-colors duration-300'
                        initial={{ opacity: 0, translateY: -20 }} variants={variants} animate={animate && 'render'} transition={{ delay: 0.8, duration: 0.25 }}>
                        <a href='#contact'><strong className='text-[var(--primary-col)]'>04. </strong>Contact</a>
                    </motion.li>
                </ul>

                <motion.div initial={{ opacity: 0, translateY: -20 }} variants={variants} animate={animate && 'render'} transition={{ delay: 0.8, duration: 0.25 }}>
                    <button className='text-[var(--primary-col)] border-[var(--primary-col)] border-[1px] rounded w-[80px] h-[40px] font-plex text-sm ml-[25px]
                hover:shadow-[5px_5px_0_-2px_var(--primary-col)] hover:translate-x-[-5px] hover:translate-y-[-5px] transition-all duration-300'>
                        <a href='https://drive.google.com/file/d/1LQ3-t-Y0km4z_H-F2uvXUFr-GHJrQihY/view' target='_blank'>Resume</a>
                    </button>
                </motion.div>
            </div>

            <div className={`md:hidden ml-auto ${visible ? 'flex' : 'hidden'}`}>
                <button onClick={handleMenu} className='z-50'>
                    <BiMenuAltRight className='text-[var(--primary-col)] text-5xl' />
                </button>
            </div>


            <div className={`fixed right-0 top-0 h-screen z-40 md:hidden w-full ${menu ? 'backdrop-blur-sm' : 'pointer-events-none'}`}>
                <div className={`ml-auto ${menu ? 'w-2/3' : 'w-0'} h-screen bg-[var(--secondary-col)] flex flex-col justify-center transition-all duration-300`}>
                    <ul className={`flex-col text-[var(--text-col)] text-lg font-plex space-y-[40px] justify-center items-center ${menu ? 'flex' : 'hidden'}`}>
                        <li className='hover:text-[var(--primary-col)] transition-colors duration-300'>
                            <button onClick={handleMenu}>
                                <a href='#about' className='flex flex-col items-center'><strong className='text-[var(--primary-col)]'>01. </strong>About</a>
                            </button>

                        </li>

                        <li className='hover:text-[var(--primary-col)] transition-colors duration-300'>
                            <button onClick={handleMenu}>
                                <a href='#education' className='flex flex-col items-center'><strong className='text-[var(--primary-col)]'>02. </strong>Education</a>
                            </button>

                        </li>

                        <li className='hover:text-[var(--primary-col)] transition-colors duration-300'>
                            <button onClick={handleMenu}>
                                <a href='#projects' className='flex flex-col items-center'><strong className='text-[var(--primary-col)]'>03. </strong>Projects</a>
                            </button>

                        </li>

                        <li className='hover:text-[var(--primary-col)] transition-colors duration-300'>
                            <button onClick={handleMenu}>
                                <a href='#contact' className='flex flex-col items-center'><strong className='text-[var(--primary-col)]'>04. </strong>Contact</a>
                            </button>
                        </li>

                        <li>
                            <button className='text-[var(--primary-col)] border-[var(--primary-col)] border-[1px] rounded w-[160px] h-[60px] font-plex text-sm
                                hover:shadow-[5px_5px_0_-2px_var(--primary-col)] hover:translate-x-[-5px] hover:translate-y-[-5px] transition-all duration-300 mt-[40px]'>
                                <a href='https://drive.google.com/file/d/1LQ3-t-Y0km4z_H-F2uvXUFr-GHJrQihY/view' target='_blank'>Resume</a>
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navbar