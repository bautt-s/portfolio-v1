import pic from '../assets/me.png'
import { RxTriangleRight } from 'react-icons/rx'

const skills = ['JavaScript (ES6+)', 'TypeScript', 'React', 'Node.js', 'MongoDB', 'Express.js']

const About: React.FC = () => {
    return (
        <div className='h-screen flex flex-row items-center justify-center' id="about">
            <div className="w-fit">
                <h1 className="text-[#ccd6f6] text-3xl font-bold font-inter flex items-center after:content-[''] after:flex-1 after:ml-[10px] after:h-[1px] after:bg-[#324158]">
                    <span><strong className="font-plex text-[#64ffda] text-2xl">01.</strong> About Me</span>
                </h1>

                <p className='w-[550px] text-[#8892b0] mt-[35px] text-lg font-inter'>
                    Hello! My name is <strong className='text-[#64ffda] font-normal'>Bautista</strong> and 
                    I enjoy creating things that live in the internet. My interest in web development 
                    started in 2020, when while finishing high school and in quarantine,
                    decided to learn how to put together a website and the fun stuff JavaScript could do. <br /><br />

                    Fast forward to today, I have come a long way, learnt a lot of technologies and I am trying
                    to build an appealing portfolio of projects, with my main focus being trying to get my 
                    <strong className='text-[#64ffda] font-normal'> first opportunity in the tech industry</strong>. <br /><br />

                    I enjoy both frontend and backend sides of development, always with the objective of building
                    <strong className='text-[#64ffda] font-normal'> accessible</strong>, 
                    <strong className='text-[#64ffda] font-normal'> reliable</strong>, 
                    <strong className='text-[#64ffda] font-normal'> pretty</strong> products and digital experiences to users. <br /><br />

                    Here a few technologies I've been working with recently:
                </p>

                <div className='grid grid-cols-2 mt-[20px]'>
                    {skills.map((skill, index) => {
                        return (
                            <div key={index} className='flex flex-row items-center mb-[5px]'>
                                <RxTriangleRight className='text-[#64ffda]' />
                                <span className='text-[#8892b0] font-plex text-sm ml-[10px]'>{skill}</span>
                            </div>
                        )
                    })}
                </div>
            </div>

            <div className='ml-[80px] shadow-[20px_20px_0_-2px_#0A192F,20px_20px_0_0_#64ffda] transition-all bg-[#64ffda] 
            hover:shadow-[15px_15px_0_-2px_#0A192F,15px_15px_0_0_#64ffda] ease-in duration-150 rounded-md'>
                <img src={pic.src} alt='this is me' className='w-[350px] h-auto rounded-md mix-blend-multiply 
                grayscale brightness-125 hover:mix-blend-normal hover:grayscale-0 hover:brightness-100 transition-all duration-300' />
            </div>
        </div>
    )
}

export default About