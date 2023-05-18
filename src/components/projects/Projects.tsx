import { FiGithub } from 'react-icons/fi'
import { IoOpenOutline } from 'react-icons/io5'
import { motion } from 'framer-motion'
import paws from '../../assets/pawsfounding-bg.png'
import artitude from '../../assets/artitude.png'
import pups from '../../assets/fetchpups.png'
import Link from 'next/link'
import ProjectCard from './project-card'

const Projects: React.FC = () => {
    return (
        <div className='flex flex-row items-center justify-center pb-[240px] ml-0 md:ml-[80px] font-inter px-[50px] md:px-0'>
            <div className="w-fit mt-[80px]">
            <h1 className="text-[var(--text-col)] text-2xl md:text-3xl font-bold font-inter flex items-center after:content-[''] after:flex-1 after:ml-[10px] after:h-[1px] after:bg-[#324158] md:mr-[80px] lg:w-[700px]">
                    <span><strong className="font-plex text-[var(--primary-col)] text-xl md:text-2xl">03.</strong> Projects</span>
                </h1>


                <div className='space-y-0 md:space-y-[40px] lg:space-y-[120px]'>
                    { /* first project */}
                    <ProjectCard
                        img={paws.src}
                        title={"Paws Founding"}
                        text={"A group project, made as a mix between social network and crowdfunding platform, with the main objective of connecting animal shelters to people, help them with their financial matters via donations and get them to get more visibility, always looking to help animals."}
                        tech={['React', 'MongoDB', 'TypeScript', 'Express.js', 'Auth0']}
                        github={"https://github.com/bautt-s/PF-Henry-Grupo05"}
                        deploy={"http://pf-henry-grupo05.vercel.app/"}
                        orientationLeft={true} />


                    { /* second project */}
                    <ProjectCard
                        img={artitude.src}
                        title={"Artitude"}
                        text={"A concept for an online art gallery, where the user can browse by artist or artpieces. Made for practice purposes, it still needs a little work, but more features and samples are planned."}
                        tech={['Next.js', 'MongoDB', 'GraphQL', 'TypeScript', 'Tailwind']}
                        github={"https://github.com/bautt-s/artitude-app"}
                        deploy={"https://artitude-app.vercel.app/"}
                        orientationLeft={false} />


                    { /* third project */}
                    <ProjectCard
                        img={pups.src}
                        title={"Fetch Pups"}
                        text={"This was my first full-stack project. With a full backend with PostgreSQL, Sequelize and Express.js, and a fancy frontend made in React and Redux, it is, in my opinion, a really good first-project. Features that can be found are a full CRUD, filtering and responsible design."}
                        tech={['React', 'PostgreSQL', 'Sequelize', 'Express.js', 'Redux']}
                        github={"https://github.com/bautt-s/PI-dogs-henry"}
                        deploy={"http://pi-dogs-henry-vert.vercel.app/"}
                        orientationLeft={true} />
                </div>
            </div>
        </div>
    )
}

export default Projects