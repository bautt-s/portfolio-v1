import { RxTriangleRight } from "react-icons/rx"
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

type EduProps = {
    title: string,
    timestamp: string,
    items: string[]
}

const EducationText: React.FC<EduProps> = (props) => {
    const { title, timestamp, items } = props
    const [render, setRender] = useState(true)

    useEffect(() => {
        setRender(true)
        setTimeout(() => setRender(false), 500)
    }, [title])


    const variants = {
        appear: { opacity: [0, 1], translateX: 0, transition: { delay: 0.25, duration: 0.35 } },
        normal: { opacity: 1 }
    }

    return (
        <motion.div className="mt-[25px] sm:mt-0 sm:ml-[20px] font-inter" initial={{opacity: 0}} variants={variants} animate={render ? 'appear' : 'normal'}>
            <h1 className="font-semibold text-[var(--text-col)] text-xl">{title}</h1>
            <span className="font-plex text-[var(--text-col-2)] text-sm">{timestamp}</span>

            <div className="flex flex-col mt-[10px]">
                {items.map((info, index) => {
                    return (
                        <div key={index} className="flex flex-row mt-[15px] items-start">
                            <RxTriangleRight className='text-[var(--primary-col)] text-lg mt-[4px]' />
                            <p className="text-[var(--text-col-2)] ml-[10px] sm:w-fit lg:w-[550px]">{info}</p>
                        </div>
                    )
                })}
            </div>
        </motion.div>
    )
}

export default EducationText