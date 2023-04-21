import { useState } from "react"
import { RxTriangleRight } from 'react-icons/rx'

const Education: React.FC = () => {
    const [display, setDisplay] = useState({
        selected: 'Henry',
        title: 'Henry Bootcamp',
        timestamp: 'August 2022 - December 2022',
        items: [
            'Learned a lot?'
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
                        'Learned a lot?'
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
        <div className='h-screen flex flex-col items-center justify-center'>
            <div className="w-fit">
                <h1 className="text-[#ccd6f6] text-3xl font-bold flex items-center after:content-[''] after:flex-1 after:ml-[10px] after:h-[1px] after:bg-[#324158]">
                    <span><strong className="font-plex text-[#64ffda] text-2xl">02.</strong> Education</span>
                </h1>

                <div className="flex flex-row mt-[40px]">
                    <div className="flex flex-col">
                        {items.map((item, index) => {
                            return (
                                <button key={index} onClick={() => handleSwitch(item)}
                                    className={`text-left font-plex border-l-2 w-[180px] px-[20px] py-[10px] hover:bg-[#112240] hover:text-[#64ffda] transition-all duration-300
                                    text-sm ${(item === display.selected) ? 'bg-[#112240] text-[#64ffda] border-[#64ffda]' : 'bg-none text-[#8892b0] border-[#233554]'}`}>
                                    {item}
                                </button>
                            )
                        })}
                    </div>

                    <div className="ml-[20px]">
                        <h1 className="font-semibold text-[#ccd6f6] text-xl">{display.title}</h1>
                        <span className="font-plex text-[#8892b0] text-sm">{display.timestamp}</span>

                        <div className="flex flex-col mt-[10px]">
                            {display.items.map((info, index) => {
                                return (
                                    <div key={index} className="flex flex-row mt-[15px] items-start">
                                        <RxTriangleRight className='text-[#64ffda] text-lg mt-[4px]' />
                                        <p className="text-[#8892b0] ml-[10px] w-[600px]">{info}</p>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Education