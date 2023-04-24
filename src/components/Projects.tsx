import { FiGithub } from 'react-icons/fi'
import { IoOpenOutline } from 'react-icons/io5'
import paws from '../assets/pawsfounding-bg.png'
import artitude from '../assets/artitude.png'
import pups from '../assets/fetchpups.png'
import Link from 'next/link'

const Projects: React.FC = () => {
    return (
        <div className='flex flex-row items-center justify-center pb-[240px] ml-[80px] font-inter' id='projects'>
            <div className="w-fit">
                <h1 className="text-[#ccd6f6] text-3xl font-bold flex items-center after:content-[''] after:ml-[10px] after:h-[1px] after:bg-[#324158] after:w-[400px]">
                    <span><strong className="font-plex text-[#64ffda] text-2xl">03.</strong> Projects</span>
                </h1>

                { /* first project */ }
                <div className='flex flex-row mt-[50px]'>
                    <div className='bg-[#45cac4] rounded-lg'>
                        <img src={paws.src} className='w-[600px] h-auto rounded-md mix-blend-multiply grayscale opacity-70 hover:opacity-100
                    brightness-125 hover:mix-blend-normal hover:grayscale-0 hover:brightness-100 transition-all duration-300' />
                    </div>

                    <div className='flex flex-col text-right relative right-[80px]'>
                        <div className='flex flex-col mb-[25px]'>
                            <span className='text-[#64ffda] font-plex text-sm'>Featured Project</span>
                            <a href='http://pf-henry-grupo05.vercel.app/'
                            className='text-[#ccd6f6] text-3xl font-bold hover:text-[#64ffda] transition-color duration-300 cursor-pointer'>
                                Paws Founding
                            </a>
                        </div>

                        <div className='bg-[#112240] w-[500px] text-[#a8b2d1] py-[30px] px-[25px] rounded-md shadow-lg hover:shadow-2xl transition-all duration-300'>
                            A group project, made as a mix between social network and crowdfunding platform, with the main objective of connecting animal shelters to people,
                            help them with their financial matters via donations and get them to get more visibility, always looking to help animals.
                        </div>

                        <ul className='flex flex-row font-plex text-[#a8b2d1] text-sm space-x-5 mt-[20px] w-fit ml-auto'>
                            <li>React</li>
                            <li>MongoDB</li>
                            <li>TypeScript</li>
                            <li>Express.js</li>
                            <li>Auth0</li>
                        </ul>

                        <div className='flex flex-row ml-auto mt-[30px]'>
                            <Link href='https://github.com/bautt-s/PF-Henry-Grupo05'>
                                <FiGithub className='text-[#ccd6f6] text-2xl hover:text-[#64ffda] transition-all duration-300' />
                            </Link>

                            <Link href='http://pf-henry-grupo05.vercel.app/'>
                                <IoOpenOutline className='text-[#ccd6f6] text-2xl hover:text-[#64ffda] transition-all duration-300 ml-[20px]' />
                            </Link>
                        </div>
                    </div>
                </div>

                { /* second project */ }
                <div className='flex flex-row mt-[120px]'>
                    <div className='flex flex-col text-left z-20'>
                        <div className='flex flex-col mb-[25px]'>
                            <span className='text-[#64ffda] font-plex text-sm'>Featured Project</span>
                            <a href='https://artitude-app.vercel.app/'
                            className='text-[#ccd6f6] text-3xl font-bold hover:text-[#64ffda] transition-color duration-300 cursor-pointer'>
                                Artitude
                            </a>
                        </div>

                        <div className='bg-[#112240] w-[500px] text-[#a8b2d1] py-[30px] px-[25px] rounded-md shadow-lg hover:shadow-2xl transition-all duration-300'>
                            A concept for an online art gallery, where the user can browse by artist or artpieces. Made for practice purposes, it still needs
                            a little work, but more features and samples are planned.
                        </div>

                        <ul className='flex flex-row font-plex text-[#a8b2d1] text-sm space-x-5 mt-[20px] w-fit'>
                            <li>Next.js</li>
                            <li>MongoDB</li>
                            <li>GraphQL</li>
                            <li>TypeScript</li>
                            <li>Tailwind</li>
                        </ul>

                        <div className='flex flex-row mt-[30px]'>
                            <Link href='https://github.com/bautt-s/artitude-app'>
                                <FiGithub className='text-[#ccd6f6] text-2xl hover:text-[#64ffda] transition-all duration-300' />
                            </Link>

                            <Link href='https://artitude-app.vercel.app/'>
                                <IoOpenOutline className='text-[#ccd6f6] text-2xl hover:text-[#64ffda] transition-all duration-300 ml-[20px]' />
                            </Link>
                        </div>
                    </div>

                    <div className='bg-[#45cac4] rounded-lg relative right-[80px] z-10'>
                        <img src={artitude.src} className='w-[600px] h-auto rounded-md mix-blend-multiply grayscale opacity-70 hover:opacity-100
                    brightness-125 hover:mix-blend-normal hover:grayscale-0 hover:brightness-100 transition-all duration-300' />
                    </div>
                </div>

                { /* third project */ }
                <div className='flex flex-row mt-[120px]'>
                    <div className='bg-[#45cac4] rounded-lg'>
                        <img src={pups.src} className='w-[600px] h-auto rounded-md mix-blend-multiply grayscale opacity-70 hover:opacity-100
                    brightness-125 hover:mix-blend-normal hover:grayscale-0 hover:brightness-100 transition-all duration-300' />
                    </div>

                    <div className='flex flex-col text-right relative right-[80px]'>
                        <div className='flex flex-col mb-[25px]'>
                            <span className='text-[#64ffda] font-plex text-sm'>Featured Project</span>
                            <a href='http://pi-dogs-henry-vert.vercel.app/'
                            className='text-[#ccd6f6] text-3xl font-bold hover:text-[#64ffda] transition-color duration-300 cursor-pointer'>
                                Fetch Pups
                            </a>
                        </div>

                        <div className='bg-[#112240] w-[500px] text-[#a8b2d1] py-[30px] px-[25px] rounded-md shadow-lg hover:shadow-2xl transition-all duration-300'>
                            This was my first full-stack project. With a full backend with PostgreSQL, Sequelize and Express.js, and a fancy frontend made in React and Redux,
                            it is, in my opinion, a really good first-project. Features that can be found are a full CRUD, filtering and responsible design. 
                        </div>

                        <ul className='flex flex-row font-plex text-[#a8b2d1] text-sm space-x-5 mt-[20px] w-fit ml-auto'>
                            <li>React</li>
                            <li>PostgreSQL</li>
                            <li>Sequelize</li>
                            <li>Express.js</li>
                            <li>Redux</li>
                        </ul>

                        <div className='flex flex-row ml-auto mt-[30px]'>
                            <Link href='https://github.com/bautt-s/PI-dogs-henry'>
                                <FiGithub className='text-[#ccd6f6] text-2xl hover:text-[#64ffda] transition-all duration-300' />
                            </Link>

                            <Link href='http://pi-dogs-henry-vert.vercel.app/'>
                                <IoOpenOutline className='text-[#ccd6f6] text-2xl hover:text-[#64ffda] transition-all duration-300 ml-[20px]' />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects