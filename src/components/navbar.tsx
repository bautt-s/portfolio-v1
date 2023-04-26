import logo from '../assets/logo2.png'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { BiMenuAltRight } from 'react-icons/bi'

const Navbar: React.FC = () => {
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
                <BiMenuAltRight className='text-[#64ffda] text-5xl' />
            </div>
        </div>
    )
}

export default Navbar