import { FiGithub, FiInstagram, FiLinkedin } from 'react-icons/fi'
import Link from 'next/link'

const Overlay: React.FC = () => {
    return (
        <div className='hidden md:contents z-50'>
            <div className="w-[150px] h-[300px] fixed bottom-0 flex flex-row md:pl-[20px] lg:pl-[50px] z-50">
                <div className='flex flex-col justify-center after:content-[""] after:flex-1 after:ml-[10px] after:w-[1px] after:bg-[#ccd6f6]'>
                    <Link href='https://github.com/bautt-s'>
                        <FiGithub className='text-[#ccd6f6] text-xl mb-[30px] hover:text-[#64ffda] hover:translate-y-[-5px] transition-all duration-300' />
                    </Link>

                    <Link href='https://www.instagram.com/baausanchez/'>
                        <FiInstagram className='text-[#ccd6f6] text-xl mb-[30px] hover:text-[#64ffda] hover:translate-y-[-5px] transition-all duration-300' />
                    </Link>

                    <Link href='https://www.linkedin.com/in/baut-s/'>
                        <FiLinkedin className='text-[#ccd6f6] text-xl mb-[30px] hover:text-[#64ffda] hover:translate-y-[-5px] transition-all duration-300' />
                    </Link>
                </div>
            </div>

            <div className="w-[150px] h-[300px] fixed bottom-0 right-0 flex flex-row md:pr-[20px] lg:pr-[50px] z-50">
                <div className='flex flex-col items-center ml-auto after:content-[""] after:flex-1 after:ml-[10px] after:w-[1px] after:bg-[#ccd6f6]'>
                    <a href="mailto:2f.sanchezbautista@gmail.com"
                        className='font-plex [writing-mode:vertical-lr] text-[#8892b0] text-xs mb-[25px] ml-[10px] hover:text-[#64ffda] hover:translate-y-[-5px] transition-all duration-300'>
                        2f.sanchezbautista@gmail.com
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Overlay