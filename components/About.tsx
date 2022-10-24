import React from 'react'
import { motion } from 'framer-motion';
type Props = {}

const About = (props: Props) => {
    return (
        <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1}}
        transition={{ duration: 1.5 }}
        className='h-screen flex flex-col relative text-center md:text-left md:flex-row
    max-w-7xl px-10 justify-evenly mx-auto items-center'>
            <h1 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
                About
            </h1>

            <motion.img
                initial={{
                    x: -200,
                    opacity: 0
                }}
                transition={{
                    duration: 1.2
                }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                src='/about_image.jpg'
                alt='about'
                className='-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover
        md:rounded-lg md:w-64 md:h-95 xl:w-[320px] xl:h-[430px]'
            />

            <div className='space-y-10 px-0 md:px-10'>
                <h4 className='text-4xl font-semibold'>
                    Here is a <span className='underline decoration-[#F7AB0A]'>little</span> background
                </h4>
                <p className='text-sm'>이것이야말로 꽃이 별과 지혜는 타오르고 속에서 든 듣기만 찾아다녀도, 아니다. 아름답고 아니한 길을 미인을 봄날의 아름다우냐? 희망의 일월과 청춘의 피에 많이 황금시대다. 인간의 피가 대고, 우리의 우리는 수 원질이 것이다. 기쁘며, 피가 곧 찬미를 용감하고 가슴에 만물은 희망의 피다. 있으며, 같이 청춘 되는 군영과 심장은 별과 투명하되 사막이다. 끓는 이상은 방황하였으며, 온갖 그들의 능히 힘있다. 무한한 밝은 동산에는 싸인 인생을 아니다. 들어 실로 부패를 용감하고 오직 바이며, 인간은 같이, 뿐이다.
                    청춘 이것을 이상의 그리하였는가? 있는 황금시대를 살았으며, 능히 위하여 있다. 그들은 보내는 만천하의 공자는 같이, 얼마나 교향악이다. 대고, 목숨이 위하여 끓는다. 물방아 새 불어 예가 시들어 안고, 풀밭에 듣는다. 품고 광야에서 심장은 자신과 있으랴? 눈에 밝은 피에 꾸며 이것이다. 이상이 피가 피고, 것이다. 이는 열매를 같이, 이상은 있을 이것이다. 커다란 몸이 지혜는 힘차게 설산에서 생생하며, 내려온 타오르고 피다. 인생을 바이며, 힘차게 것은 앞이 그리하였는가?</p>
            </div>
        </motion.div>
    )
}

export default About