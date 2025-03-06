import React from 'react'
import {useState, useEffect} from 'react'
import { gsap } from "gsap";
import { useGSAP} from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";


const Hero = () => {
    const getVideoSrc = (index) => `videos/hero-${index}.mp4`
    const [currentVideo, setCurrentVideo] = useState(1)
    const [nextVideo, setNextVideo] = useState(2)


  return (
    <div className='relative min-h-screen w-screen overflow-x-hidden'>
        <video                 
            src={getVideoSrc(1)}
            // autoPlay
            loop 
            muted
            id="current-video"
            className='origin-center scale-100 object-cover object-center'/>
        <video
            id="next-video"
            src={getVideoSrc(3)}
            className='size-64 original-center scale-100 object-cover object-center border-[1px] border-black rounded-xl'
            />
        <h1 className='hero-heading absolute bottom-5 right-5 z-40 text-blue-75'>
            G<b>a</b>me
        </h1>
        <div className='absolute left-0 top-0 z-40 size-full'>
        <div className='mt-24 px-5 sm:px-10'>
                    <h1 className="hero-heading text-blue-100">R<b>e</b>defi<b>n</b>e</h1>
                    <p className='mb-5 max-w-64 font-robert-regular text-blue-100'>
                        Enter the Metagame Layer <br /> Unleash the Play Economy
                    </p>
                </div>
        </div>
    </div>
  )
}

export default Hero