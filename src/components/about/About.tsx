import pic from '../../assets/me.png'
import { motion } from 'framer-motion'
import { RxTriangleRight } from 'react-icons/rx'

const skills = ['JavaScript (ES6+)', 'TypeScript', 'React', 'Node.js', 'MongoDB', 'Express.js']

const About: React.FC = () => {
    return (
        <div className='h-screen flex flex-col lg:flex-row items-center justify-center'>
            <motion.div className="w-fit px-[50px] md:px-0"
            initial={{ opacity: 0, translateY: -20 }} whileInView={{ opacity: 1, translateY: 0 }} transition={{ delay: 0.2, duration: 0.25 }}>
                <h1 className="text-[var(--text-col)] text-2xl md:text-3xl font-bold font-inter flex items-center after:content-[''] after:flex-1 after:ml-[10px] after:h-[1px] after:bg-[#324158]">
                    <span><strong className="font-plex text-[var(--primary-col)] text-xl md:text-2xl">01.</strong> About Me</span>
                </h1>

                <p className='sm:w-[550px] text-[var(--text-col-2)] mt-[35px] text-md sm:text-lg font-inter'>
                    Hello! My name is <strong className='text-[var(--accent)] font-normal'>Bautista</strong> and 
                    I enjoy creating things that live in the internet. My interest in web development 
                    started in 2020, when while finishing high school and in quarantine,
                    decided to learn how to put together a website and the fun stuff JavaScript could do. <br /><br />

                    Fast forward to today, I have come a long way, learnt a lot of technologies and I am trying
                    to build an appealing portfolio of projects, with my main focus being trying to get my 
                    <strong className='text-[var(--accent)] font-normal'> first opportunity in the tech industry</strong>. <br /><br />

                    I enjoy both frontend and backend sides of development, always with the objective of building
                    <strong className='text-[var(--accent)] font-normal'> accessible</strong>, 
                    <strong className='text-[var(--accent)] font-normal'> reliable</strong>, 
                    <strong className='text-[var(--accent)] font-normal'> pretty</strong> products and digital experiences to users. <br /><br />

                    Here a few technologies I&apos;ve been working with recently:
                </p>

                <div className='grid grid-cols-2 mt-[20px]'>
                    {skills.map((skill, index) => {
                        return (
                            <div key={index} className='flex flex-row items-center mb-[5px]'>
                                <RxTriangleRight className='text-[var(--primary-col)]' />
                                <span className='text-[var(--text-col-2)] font-plex text-sm ml-[10px]'>{skill}</span>
                            </div>
                        )
                    })}
                </div>
            </motion.div>

            <motion.div className='mt-[80px] lg:mt-0 ml-0 lg:ml-[80px] shadow-[20px_20px_0_-2px_var(--background),20px_20px_0_0_var(--primary-col)]
            hover:shadow-[15px_15px_0_-2px_var(--background),15px_15px_0_0_var(--primary-col)] ease-in duration-150 rounded-md transition-all bg-[#ffdc7c]' 
            initial={{ opacity: 0, translateY: -20 }} whileInView={{ opacity: 1, translateY: 0 }} transition={{ delay: 0.2, duration: 0.25 }}>
                <img src={pic.src} alt='this is me' className='w-[300px] md:w-[350px] h-auto rounded-md mix-blend-multiply 
                grayscale brightness-125 hover:mix-blend-normal hover:grayscale-0 hover:brightness-100 transition-all duration-300' />
            </motion.div>
        </div>
    )
}

export default About