const Hero: React.FC = () => {
    return (
        <div className='h-screen flex items-center'>
            <div className='flex flex-col mx-auto w-fit'>
                <span className='font-plex text-[#64ffda] text-lg'>Hi, my name is</span>

                <div className='font-inter mt-[15px]'>
                    <h1 className='text-[#ccd6f6] text-7xl font-bold ml-[-5px]'>Bautista Sánchez.</h1>
                    <h1 className='text-[#8892b0] text-7xl font-bold ml-[-5px]'>Full-stack Web Developer.</h1>
                    <p className='w-[550px] text-[#8892b0] mt-[35px] text-lg'>
                        I am a web developer specializing in building (and sometimes designing) exceptional website experiences.
                        Currently, I am focused on finding my first job, and be able to put my skills to good use.
                    </p>
                </div>

                <button className='text-[#64ffda] border-[#64ffda] border-[1px] rounded transition-color
                w-[180px] py-[15px] font-plex mt-[50px] text-sm hover:bg-[#64ffdb3d] duration-300'>
                    Get in Touch!
                </button>
            </div>
        </div>
    )
}

export default Hero