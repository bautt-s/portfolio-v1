import paws from '../../assets/pawsfounding-bg.png'
import spillgame from '../../assets/spillgame.png'
import cotravel from '../../assets/cotravel.png'
import cybsec from '../../assets/cybsec.jpg'
import artitude from '../../assets/artitude.png'
import pups from '../../assets/fetchpups.png'
import ProjectCard from './project-card'

const Projects: React.FC = () => {
    const projects = [
        {
            img: paws.src,
            title: 'Paws Founding',
            text: 'A group project, made as a mix between social network and crowdfunding platform, with the main objective of connecting animal shelters to people, help them with their financial matters via donations and get them to get more visibility, always looking to help animals.',
            tech: ['React', 'MongoDB', 'TypeScript', 'Express.js', 'Auth0'],
            github: 'https://github.com/bautt-s/PF-Henry-Grupo05',
            deploy: 'http://pf-henry-grupo05.vercel.app/',
            orientationLeft: true
        },
        {
            img: artitude.src,
            title: 'Artitude',
            text: 'A concept for an online art gallery, where the user can browse by artist or artpieces. Made for practice purposes, it still needs a little work, but more features and samples are planned.',
            tech: ['Next.js', 'MongoDB', 'GraphQL', 'TypeScript', 'Tailwind'],
            github: 'https://github.com/bautt-s/artitude-app',
            deploy: 'https://artitude-app.vercel.app/',
            orientationLeft: false
        },
        {
            img: pups.src,
            title: 'Fetch Pups',
            text: 'This was my first full-stack project. With a full backend with PostgreSQL, Sequelize and Express.js, and a fancy frontend made in React and Redux, it was a fun first-project. Features that can be found are a full CRUD, filtering and responsible design.',
            tech: ['React', 'PostgreSQL', 'Sequelize', 'Express.js', 'Redux'],
            github: 'https://github.com/bautt-s/PI-dogs-henry',
            deploy: 'http://pi-dogs-henry-vert.vercel.app/',
            orientationLeft: true
        },
        {
            img: spillgame.src,
            title: 'Paint & Spill',
            text: 'A fun little project: a browser game made with JS and React, for desktop and mobile, where the player needs to fill the screen with only one color in the least amount of moves.',
            tech: ['React', 'TypeScript', 'Tailwind', 'CSS'],
            github: 'https://github.com/bautt-s/bautts-spill-game',
            deploy: 'https://paint-n-spill.vercel.app/',
            orientationLeft: false
        },
        {
            img: cotravel.src,
            title: 'CoTravel - Landing Page',
            text: 'Frontend project for a freelance client (travel agency): featuring a lot of animations and fancy styling, using Tailwind mixed with traditional CSS. Includes full responsible adaptation and dark mode colors.',
            tech: ['React', 'TypeScript', 'Tailwind', 'CSS'],
            github: 'https://github.com/bautt-s/cotravel-front',
            deploy: 'https://cotravel.vercel.app/',
            orientationLeft: true
        },
        {
            img: cybsec.src,
            title: 'CybSec - Landing Page',
            text: 'Personal frontend concept taken from Dribbble (security agency):using Tailwind mixed with traditional CSS, includes full responsible adaptation and dark mode colors, with a nice color palette and design of components.',
            tech: ['React', 'TypeScript', 'Tailwind', 'CSS'],
            github: 'https://github.com/bautt-s/cybsec-front',
            deploy: 'https://cyb-sec.vercel.app/',
            orientationLeft: false
        }
    ]

    return (
        <div className='flex flex-row items-center justify-center pb-[240px] ml-0 md:ml-[80px] font-inter px-[50px] md:px-0'>
            <div className="w-fit mt-[80px]">
            <h1 className="text-[var(--text-col)] text-2xl md:text-3xl font-bold font-inter flex items-center after:content-[''] after:flex-1 after:ml-[10px] after:h-[1px] after:bg-[#324158] md:mr-[80px] lg:w-[700px]">
                    <span><strong className="font-plex text-[var(--primary-col)] text-xl md:text-2xl">03.</strong> Projects</span>
                </h1>


                <div className='space-y-0 md:space-y-[40px] lg:space-y-[120px]'>
                    {projects.map((p, index) => {
                        return <ProjectCard img={p.img} title={p.title} text={p.text} tech={p.tech} 
                        github={p.github} deploy={p.deploy} orientationLeft={p.orientationLeft} key={index} />
                    })}
                </div>
            </div>
        </div>
    )
}

export default Projects