import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter';
import BackgroundCircle from './BackgroundCircle';
import Lottie from 'react-lottie-player';
import lottieJson from '../public/hero_image.json';
import Link from 'next/link';
import { PageInfo } from '../typings';

type Props = {
    pageInfo: PageInfo;
}

function Hero({ pageInfo }: Props) {

    const [text, count] = useTypewriter({
        words: [
            `Hi, My name is ${pageInfo?.name}`,
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
            <div className='z-20'>
            <h2 className='text-sm uppercase text-gray-500 pb-2 tracking-widest'>
                {pageInfo?.role}
            </h2>
            <h1 className='text-4xl lg:text-5xl font-semibold px-10'>
                <span>{text}</span>
                <Cursor cursorColor='#F7AB0A' />
            </h1>
            <div className='pt-5'>
                <Link href='#about'>
                    <button className='heroButton'>About</button>
                </Link>
                <Link href='#experience'>
                    <button className='heroButton'>Experience</button>
                </Link>
                <Link href='#skills'>
                    <button className='heroButton'>Skills</button>
                </Link>
                <Link href='#projects'>
                    <button className='heroButton'>Projects</button>
                </Link>
            </div>
            </div>
        </div>
    )
}

export default Hero