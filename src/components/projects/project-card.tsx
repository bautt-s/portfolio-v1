import { motion } from 'framer-motion'
import Link from 'next/link'
import { FiGithub } from 'react-icons/fi'
import { IoOpenOutline } from 'react-icons/io5'

type CardProps = {
    img: string,
    title: string,
    text: string,
    tech: string[],
    github: string,
    deploy: string,
    orientationLeft: boolean
}

const ProjectCard: React.FC<CardProps> = (props) => {
    const { img, title, text, tech, github, deploy, orientationLeft } = props

    return (
        <div>
            <motion.div className='flex-row mt-[50px] hidden md:flex'
                initial={{ opacity: 0, translateY: 40 }} whileInView={{ opacity: 1, translateY: 0 }} transition={{ delay: 0.2, duration: 0.45 }}>
                {orientationLeft && <div className='bg-[#45cac4] rounded-lg'>
                    <img src={img} className='w-[600px] h-auto rounded-md mix-blend-multiply grayscale opacity-70 hover:opacity-100
                    brightness-125 hover:mix-blend-normal hover:grayscale-0 hover:brightness-100 transition-all duration-300' />
                </div>}

                <div className={`flex flex-col ${orientationLeft ? 'text-right relative right-[80px]' : 'text-left z-20'}`}>
                    <div className='flex flex-col mb-[25px]'>
                        <span className='text-[#64ffda] font-plex text-sm'>Featured Project</span>
                        <a href={deploy}
                            className='text-[#ccd6f6] text-3xl font-bold hover:text-[#64ffda] transition-color duration-300 cursor-pointer'>
                            {title}
                        </a>
                    </div>

                    <div className='bg-[#112240] w-[500px] text-[#a8b2d1] py-[30px] px-[25px] rounded-md shadow-lg hover:shadow-2xl transition-all duration-300'>
                        {text}
                    </div>

                    <ul className={`flex flex-row font-plex text-[#a8b2d1] text-sm space-x-5 mt-[20px] w-fit ${orientationLeft && 'ml-auto'}`}>
                        {tech.map((t, index) => {
                            return <li key={index}>{t}</li>
                        })}
                    </ul>

                    <div className={`flex flex-row ${orientationLeft && 'ml-auto'} mt-[30px]`}>
                        <Link href={github}>
                            <FiGithub className='text-[#ccd6f6] text-2xl hover:text-[#64ffda] transition-all duration-300' />
                        </Link>

                        <Link href={deploy}>
                            <IoOpenOutline className='text-[#ccd6f6] text-2xl hover:text-[#64ffda] transition-all duration-300 ml-[20px]' />
                        </Link>
                    </div>
                </div>

                {!orientationLeft && <div className='bg-[#45cac4] rounded-lg relative right-[80px] z-10'>
                    <img src={img} className='w-[600px] h-auto rounded-md mix-blend-multiply grayscale opacity-70 hover:opacity-100
                    brightness-125 hover:mix-blend-normal hover:grayscale-0 hover:brightness-100 transition-all duration-300' />
                </div>}
            </motion.div>

            { /* mobile version */}
            <motion.div className='flex-row mt-[50px] flex md:hidden overflow-hidden relative bg-[#0d2335]'
                initial={{ opacity: 0, translateY: 40 }} whileInView={{ opacity: 1, translateY: 0 }} transition={{ delay: 0.2, duration: 0.45 }}>

                <img src={img} className='opacity-10 absolute left-0 top-0 w-full h-auto' />

                <div className="flex flex-col relative sm:pt-[60px] sm:px-[40px] sm:pb-[35px] py-[50px]">
                    <div className='flex flex-col mb-[25px] w-fit px-[30px] sm:px-0'>
                        <span className='text-[#64ffda] font-plex text-sm'>Featured Project</span>
                        <a href={deploy}
                            className='text-[#ccd6f6] mt-[5px] text-2xl sm:text-3xl font-bold hover:text-[#64ffda] transition-color duration-300 cursor-pointer'>
                            {title}
                        </a>
                    </div>

                    <div className='text-[#a8b2d1] px-[30px] sm:px-0 text-sm sm:text-md'>
                        {text}
                    </div>

                    <ul className="sm:flex flex-row font-plex text-[#a8b2d1] text-sm sm:space-x-5 mt-[40px] w-fit grid grid-cols-3 gap-x-4 px-[30px] sm:px-0 sm:gap-x-0">
                        {tech.map((t, index) => {
                            return <li key={index}>{t}</li>
                        })}
                    </ul>

                    <div className="flex flex-row mt-[30px] px-[30px] sm:px-0">
                        <Link href={github}>
                            <FiGithub className='text-[#ccd6f6] text-2xl hover:text-[#64ffda] transition-all duration-300' />
                        </Link>

                        <Link href={deploy}>
                            <IoOpenOutline className='text-[#ccd6f6] text-2xl hover:text-[#64ffda] transition-all duration-300 ml-[20px]' />
                        </Link>
                    </div>
                </div>
            </motion.div>
        </div>
    )
}

export default ProjectCard