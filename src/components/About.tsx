const About: React.FC = () => {
    return (
        <div className='h-screen flex flex-row items-center'>
            <div className="w-fit mx-auto">
                <h1 className="text-[#ccd6f6] text-3xl font-bold flex items-center after:content-[''] after:flex-1 after:ml-[10px] after:h-[1px] after:bg-[#324158]">
                    <span><strong className="font-plex text-[#64ffda] text-2xl">01.</strong> About Me</span>
                </h1>

                <p className='w-[550px] text-[#8892b0] mt-[35px] text-lg'>
                    Hello! My name is Bautista and I enjoy creating things that live in the internet.
                    My interest in web development started in 2020, when while finishing high school and in quarantine,
                    decided to learn how to put together a website and the fun stuff JavaScript could do. <br /><br />

                    Fast forward to today, I have come a long way, learnt a lot of technologies and I am trying
                    to build an appealing portfolio of projects, with my main focus being trying to get my first
                    opportunity in the tech industry. <br /><br />

                    I enjoy both frontend and backend sides of development, always with the objective of building
                    accessible, reliable and pretty products and digital experiences to users. <br /><br />

                    Here a few technologies I've been working with recently:
                </p>
            </div>
        </div>
    )
}

export default About