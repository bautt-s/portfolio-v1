import { useState } from "react"
import { motion } from "framer-motion"
import EducationText from "./EducationText"

const Education: React.FC = () => {
    const [display, setDisplay] = useState({
        selected: 'Henry',
        title: 'Henry Bootcamp',
        timestamp: 'August 2022 - December 2022',
        items: [
            'Started this Bootcamp in order to learn full stack web development, and graduated with plenty of good knowledge.',
            'Learnt all about backend with Express.js, Node.js and JS/TS, as well as how to manage relational and non-relational databases, along with ORMs like Sequelize or Prisma.',
            'I picked up good programming practices, and learnt a lot about front-end frameworks and related tools like state-management.',
            'Managed to implement big individual and group projects, using Agile Methodology, Figma, and looking to pick up and implement new tools on the run.'
        ]
    })

    const handleSwitch = (item: string) => {
        switch (item) {
            case 'Henry':
                setDisplay({
                    selected: item,
                    title: 'Henry Bootcamp',
                    timestamp: 'August 2022 - December 2022',
                    items: [
                        'Started this Bootcamp in order to learn full stack web development, and graduated with plenty of good knowledge.',
                        'Learnt all about backend with Express.js, Node.js and JS/TS, as well as how to manage relational and non-relational databases, along with ORMs like Sequelize or Prisma.',
                        'I picked up good programming practices, and learnt a lot about front-end frameworks and related tools like state-management.',
                        'Managed to implement big individual and group projects, using Agile Methodology, Figma, and looking to pick up and implement new tools on the run.'
                    ]
                })
                break;
            case 'Computer Science':
                setDisplay({
                    selected: item,
                    title: 'Computer Science Degree',
                    timestamp: 'March 2021 - Present',
                    items: [
                        'In 2021, I started my degree in Computer Science. I am pursuing it as of today, but as a secondary objective, being landing my first job my main focus.',
                        'Already passed all subjects related to math: Calculus 1 to Calculus 4 and Linear Algebra.',
                        'Other subjects like Object Oriented Programing, Logical Thinking and Automata Theory.',
                        'I am planning to continue with my degree in some years.'
                    ]
                })
                break;
            case 'English Level':
                setDisplay({
                    selected: item,
                    title: 'C2 English Level',
                    timestamp: '2008 - Present',
                    items: [
                        "I have been learning english since I was five years old.",
                        "In 2018, I took an essential exam: Cambridge's First Certificate of English. It was not easy, but at that time, I got B2 Level (very close to C1), and knew I had to keep on learning.",
                        "Recently, I went for an online test: EF SET English Certificate, and got surprised with a C2 Profficient score.",
                        "In the future, I am planning to take Cambridge's Advanced Certificate of English. But for now, I am more focused on landing my first job."
                    ]
                })
                break;
            case 'High School':
                setDisplay({
                    selected: item,
                    title: 'High School Title',
                    timestamp: 'March 2015 - December 2020',
                    items: [
                        'There is not much to write here, but I graduated from High School with a title in Informatics.',
                        'Learnt Pascal, SQL, UI/UX design, and the basics of Object Oriented Programming in Java.',
                        'Also worked a lot on logical and analytical thinking!'
                    ]
                })
                break;
        }
    }

    const items = ['Henry', 'Computer Science', 'English Level', 'High School']

    return (
        <div className='h-fit flex flex-col sm:items-center pt-[180px] mb-[200px] sm:mb-[280px] px-[50px] md:px-[70px] lg:px-0'>
            <motion.div className="sm:w-fit"
            initial={{ opacity: 0, translateY: -20 }} whileInView={{ opacity: 1, translateY: 0 }} transition={{ delay: 0.2, duration: 0.25 }}>
                <h1 className="text-[#ccd6f6] text-2xl md:text-3xl font-bold font-inter flex items-center after:content-[''] after:flex-1 after:ml-[10px] after:h-[1px] after:bg-[#324158] lg:w-[650px]">
                    <span><strong className="font-plex text-[#64ffda] text-xl md:text-2xl">02.</strong> Education</span>
                </h1>

                <div className="flex flex-col sm:flex-row mt-[40px]">
                    <div className="flex flex-row sm:flex-col w-full">
                        {items.map((item, index) => {
                            return (
                                <button key={index} onClick={() => handleSwitch(item)}
                                    className={`font-plex w-[180px] text-center sm:text-left px-[5px] sm:px-[20px] py-[10px] sm:border-l-2
                                    hover:bg-[#112240] hover:text-[#64ffda] transition-all duration-300 text-sm  border-b-2 sm:border-b-0
                                    ${(item === display.selected) ? 'bg-[#112240] text-[#64ffda] border-[#64ffda]' : 'bg-none text-[#8892b0] border-[#233554]'}`}>
                                    {item}
                                </button>
                            )
                        })}
                    </div>

                    <EducationText title={display.title} timestamp={display.timestamp} items={display.items} />
                </div>
            </motion.div>
        </div>
    )
}

export default Education