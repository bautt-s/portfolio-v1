import logo from '../assets/logo2.png'
import Link from 'next/link'

const Navbar: React.FC = () => {
    return (
        <div className='w-full h-[80px] fixed pt-[25px] px-[40px] flex flex-row bg-[#0a192f] z-50'>
            <Link href='/'>
                <img src={logo.src} className='w-[50px] h-auto' />
            </Link>

            <div className='flex flex-row ml-auto items-center'>
                <ul className='font-plex flex flex-row text-sm text-[#ccd6f6]'>
                    <li className='hover:text-[#64ffda] transition-colors duration-300'>
                        <a href='#about'><strong className='text-[#64ffda]'>01. </strong>About</a>
                    </li>

                    <li className='ml-[25px] hover:text-[#64ffda] transition-colors duration-300'>
                        <a href='#education'><strong className='text-[#64ffda]'>02. </strong>Education</a>
                    </li>

                    <li className='ml-[25px] hover:text-[#64ffda] transition-colors duration-300'>
                        <a href='#projects'><strong className='text-[#64ffda]'>03. </strong>Projects</a>
                    </li>

                    <li className='ml-[25px] hover:text-[#64ffda] transition-colors duration-300'>
                        <a href='#contact'><strong className='text-[#64ffda]'>04. </strong>Contact</a>
                    </li>
                </ul>
                
                <button className='text-[#64ffda] border-[#64ffda] border-[1px] rounded w-[80px] h-[40px] font-plex text-sm ml-[25px]
                hover:shadow-[5px_5px_0_-2px_#64ffda] hover:translate-x-[-5px] hover:translate-y-[-5px] transition-all duration-300'>
                    <a href='https://drive.google.com/file/d/1LQ3-t-Y0km4z_H-F2uvXUFr-GHJrQihY/view' target='_blank'>Resume</a>
                </button>
            </div>  
        </div>
    )
}

export default Navbar