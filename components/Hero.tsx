import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter';
import BackgroundCircle from './BackgroundCircle';
import Lottie from 'react-lottie-player';
import lottieJson from '../public/hero_image.json';

type Props = {}

function Hero({ }: Props) {

    const [text, count] = useTypewriter({
        words: [
            "Hi, My name is Seokjin",
            "Guy-who-loves-Coffee.tsx",
            "<ButLoveToCodeMore />"
        ],
        loop: true,
        delaySpeed: 2000,
    })
    return (
        <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
            <BackgroundCircle />


            <Lottie
                loop
                animationData={lottieJson}
                play
                style={{ width: 150, height: 150 }}
            />

            <h2 className='text-sm uppercase text-gray-500 pb-2 tracking-widest'>
                Software Engineer
            </h2>
            <h1 className='text-4xl lg:text-5xl font-semibold px-10'>
                <span>{text}</span>
                <Cursor cursorColor='#F7AB0A' />
            </h1>
            <div>
                <button className='heroButton'>About</button>
                <button className='heroButton'>Experience</button>
                <button className='heroButton'>Skills</button>
                <button className='heroButton'>Projects</button>
            </div>
        </div>
    )
}

export default Hero