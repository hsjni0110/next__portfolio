import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter';
import BackgroundCircle from './BackgroundCircle';

type Props = {}

function Hero({}: Props) {
    
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
        <h1>
        <span>{text}</span>
        <Cursor cursorColor='#F7AB0A'/>
        </h1>
    </div>
  )
}

export default Hero