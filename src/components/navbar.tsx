import logo from '../assets/logo2.png'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { BiMenuAltRight } from 'react-icons/bi'
import { useState } from 'react'

const Navbar: React.FC = () => {
    const [menu, setMenu] = useState(false)
    const handleMenu = () => setMenu(!menu)

    return (
        <div className='w-full h-[80px] fixed pt-[25px] px-[40px] flex flex-row bg-[#0a192f] z-50'>
            <Link href='/'>
                <motion.img src={logo.src} className='w-[50px] h-auto'
                    initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.2, duration: 0.25 }} />
            </Link>

            <div className='flex-row ml-auto items-center hidden md:flex'>
                <ul className='font-plex flex flex-row md:text-xs lg:text-sm text-[#ccd6f6]'>
                    <motion.li className='hover:text-[#64ffda] transition-colors duration-300'
                        initial={{ opacity: 0, translateY: -20 }} whileInView={{ opacity: 1, translateY: 0 }} transition={{ delay: 0.2, duration: 0.25 }}>
                        <a href='#about'><strong className='text-[#64ffda]'>01. </strong>About</a>
                    </motion.li>

                    <motion.li className='ml-[25px] hover:text-[#64ffda] transition-colors duration-300'
                        initial={{ opacity: 0, translateY: -20 }} whileInView={{ opacity: 1, translateY: 0 }} transition={{ delay: 0.4, duration: 0.25 }}>
                        <a href='#education'><strong className='text-[#64ffda]'>02. </strong>Education</a>
                    </motion.li>

                    <motion.li className='ml-[25px] hover:text-[#64ffda] transition-colors duration-300'
                        initial={{ opacity: 0, translateY: -20 }} whileInView={{ opacity: 1, translateY: 0 }} transition={{ delay: 0.6, duration: 0.25 }}>
                        <a href='#projects'><strong className='text-[#64ffda]'>03. </strong>Projects</a>
                    </motion.li>

                    <motion.li className='ml-[25px] hover:text-[#64ffda] transition-colors duration-300'
                        initial={{ opacity: 0, translateY: -20 }} whileInView={{ opacity: 1, translateY: 0 }} transition={{ delay: 0.8, duration: 0.25 }}>
                        <a href='#contact'><strong className='text-[#64ffda]'>04. </strong>Contact</a>
                    </motion.li>
                </ul>

                <motion.div initial={{ opacity: 0, translateY: -20 }} whileInView={{ opacity: 1, translateY: 0 }} transition={{ delay: 0.8, duration: 0.25 }}>
                    <button className='text-[#64ffda] border-[#64ffda] border-[1px] rounded w-[80px] h-[40px] font-plex text-sm ml-[25px]
                hover:shadow-[5px_5px_0_-2px_#64ffda] hover:translate-x-[-5px] hover:translate-y-[-5px] transition-all duration-300'>
                        <a href='https://drive.google.com/file/d/1LQ3-t-Y0km4z_H-F2uvXUFr-GHJrQihY/view' target='_blank'>Resume</a>
                    </button>
                </motion.div>
            </div>

            <div className='flex md:hidden ml-auto'>
                <button onClick={handleMenu} className='z-50'>
                    <BiMenuAltRight className='text-[#64ffda] text-5xl' />
                </button>
            </div>


            <div className={`fixed right-0 top-0 h-screen z-40 md:hidden w-full ${menu && 'backdrop-blur-sm '}`}>
                <div className={`ml-auto ${menu ? 'w-2/3' : 'w-0'} h-screen bg-[#102241] flex flex-col justify-center transition-all duration-300`}>
                    <ul className={`flex-col text-[#ccd6f6] text-lg font-plex space-y-[40px] justify-center items-center ${menu ? 'flex' : 'hidden'}`}>
                        <li className='hover:text-[#64ffda] transition-colors duration-300'>
                            <button onClick={handleMenu}>
                                <a href='#about' className='flex flex-col items-center'><strong className='text-[#64ffda]'>01. </strong>About</a>
                            </button>

                        </li>

                        <li className='hover:text-[#64ffda] transition-colors duration-300'>
                            <button onClick={handleMenu}>
                                <a href='#education' className='flex flex-col items-center'><strong className='text-[#64ffda]'>02. </strong>Education</a>
                            </button>

                        </li>

                        <li className='hover:text-[#64ffda] transition-colors duration-300'>
                            <button onClick={handleMenu}>
                                <a href='#projects' className='flex flex-col items-center'><strong className='text-[#64ffda]'>03. </strong>Projects</a>
                            </button>

                        </li>

                        <li className='hover:text-[#64ffda] transition-colors duration-300'>
                            <button onClick={handleMenu}>
                                <a href='#contact' className='flex flex-col items-center'><strong className='text-[#64ffda]'>04. </strong>Contact</a>
                            </button>
                        </li>

                        <li>
                            <button className='text-[#64ffda] border-[#64ffda] border-[1px] rounded w-[160px] h-[60px] font-plex text-sm
                                hover:shadow-[5px_5px_0_-2px_#64ffda] hover:translate-x-[-5px] hover:translate-y-[-5px] transition-all duration-300 mt-[40px]'>
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