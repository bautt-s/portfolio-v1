import logo from '../images/logo2.png'

const Navbar: React.FC = () => {
    return (
        <div className='w-full h-[80px] fixed pt-[25px] px-[40px] flex flex-row'>
            <img src={logo.src} className='w-[50px] h-auto' />

            <div className='flex flex-row ml-auto items-center'>
                <ul className='font-plex flex flex-row text-sm text-[#ccd6f6]'>
                    <li className='hover:text-[#64ffda] transition-colors duration-300'>
                        <button><strong className='text-[#64ffda]'>01. </strong>About</button>
                    </li>

                    <li className='ml-[25px] hover:text-[#64ffda] transition-colors duration-300'>
                        <button><strong className='text-[#64ffda]'>02. </strong>Experience</button>
                    </li>

                    <li className='ml-[25px] hover:text-[#64ffda] transition-colors duration-300'>
                        <button><strong className='text-[#64ffda]'>03. </strong>Projects</button>
                    </li>

                    <li className='ml-[25px] hover:text-[#64ffda] transition-colors duration-300'>
                        <button><strong className='text-[#64ffda]'>04. </strong>Contact</button>
                    </li>
                </ul>
                
                <button className='text-[#64ffda] border-[#64ffda] border-[1px] rounded w-[80px] h-[40px] font-plex text-sm ml-[25px]'>Resume</button>
                
            </div>  
        </div>
    )
}

export default Navbar