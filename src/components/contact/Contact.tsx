import { motion } from "framer-motion"
import Link from "next/link"
import { FiGithub, FiInstagram, FiLinkedin } from 'react-icons/fi'

const Contact: React.FC = () => {
    return (
        <div className="flex flex-row items-center justify-center pb-[40px] font-inter">
            <motion.div className="w-fit text-center"
                initial={{ opacity: 0, translateY: 20 }} whileInView={{ opacity: 1, translateY: 0 }} transition={{ delay: 0.2, duration: 0.25 }}>
                <h3 className="font-plex text-[var(--primary-col)]">04. What&apos;s next?</h3>
                <h1 className="font-bold text-[var(--text-col)] text-4xl md:text-6xl mt-[15px]">Get in Touch</h1>
                <p className="px-[40px] w-full sm:px-[20px] md:px-0 md:w-[500px] text-[#8892b0] mt-[30px]">
                    As of right now, I am looking for my first opportunity as a Web Developer. So if you liked my
                    portfolio and want to reach out, my inbox is open. Wether you want to discuss a job opening,
                    have a question or just want to say hi, I will get back at you!
                </p>

                <button className="font-plex text-[var(--primary-col)] mt-[50px] border-[1px] border-[var(--primary-col)] rounded-md px-[30px] py-[15px]
                hover:shadow-[5px_5px_0_-2px_var(--primary-col)] hover:translate-x-[-5px] hover:translate-y-[-5px] transition-all duration-300">
                    <a href='https://www.linkedin.com/in/baut-s/' target="_blank">Say Hello</a>
                </button>

                <div className="flex flex-col font-plex text-xs text-[var(--text-col-2)] mt-[240px]">
                    <div className="flex flex-row mx-auto mb-[30px] md:hidden">
                        <Link href='https://github.com/bautt-s'>
                            <FiGithub className='text-[var(--text-col-2)] text-xl hover:text-[var(--primary-col)] transition-all duration-300' />
                        </Link>

                        <Link href='https://www.instagram.com/baausanchez/'>
                            <FiInstagram className='text-[var(--text-col-2)] text-xl hover:text-[var(--primary-col)] transition-all duration-300 ml-[30px]' />
                        </Link>

                        <Link href='https://www.linkedin.com/in/baut-s/'>
                            <FiLinkedin className='text-[var(--text-col-2)] text-xl hover:text-[var(--primary-col)] transition-all duration-300 ml-[30px]' />
                        </Link>
                    </div>

                    <span>Thanks for looking through my portfolio.</span>
                    <span>Bautista Sanchez - 2023</span>
                </div>
            </motion.div>
        </div>
    )
}

export default Contact