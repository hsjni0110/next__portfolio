import React from 'react'
import { motion } from 'framer-motion';

type Props = {}

const Projects = (props: Props) => {

    const projects = [1, 2, 3, 4, 5]

    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className='h-screen relative flex overflow-hidden flex-col text-left md:flew-row
    max-w-full justify-evenly mx-auto items-center z-0'>
            <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
                Projects
            </h3>

            <div className='relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-madatory z-20
            scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A] scrollbar-thin
            '>
                {projects.map((project, i) => (
                    <div className='w-screen flex-shrink-0 snap-center flex flex-col items-center justify-center p-20
              md:p-44 h-screen'>
                        <motion.img
                            initial={{
                                y:-300,
                                opacity: 0,
                            }}
                            transition={{
                                duration:1.2,
                            }}
                            whileInView={{ opacity:1, y:0 }}
                            viewport={{ once: true }}
                            src='/project_img.png'
                            alt=''
                            className='w-[300px] h-[300px]'
                        />
                        <div className='space-y-10 px-0 md:px-10 max-w-5xl pb-5'>
                            <h4 className='text-3xl font-semibold text-center'>
                                <span className='underline decoration-[#F7AB0A]/50'>Case Study {i + 1} of {projects.length}:</span>{" "}
                                UPS clone
                            </h4>
                        </div>

                        <p className='text-lg text-center md:text-left'>
                            끓는 별과 이것이야말로 이상을 길지 피다. 찬미를 못할 이상은 피고 끝까지 자신과 사막이다. 내려온 구할 내는 이상 찬미를 있음으로써 무엇을 오직 이것이다. 관현악이며, 끓는 그들의 불어 피가 같은 피에 것은 웅대한 위하여서. 쓸쓸한 자신과 역사를 운다. 우리의 있는 희망의 말이다. 가는 보이는 때에, 현저하게 풀밭에 불어 인생에 부패뿐이다. 인생을 거친 하여도 같지 너의 운다. 소금이라 작고 어디 어디 봄바람을 것이다.
                        </p>
                    </div>

                ))}
            </div>

            <div className='w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[400px] -skew-y-12' />
        </motion.div>
    )
}

export default Projects