import React from 'react'
import gsap from "gsap";
import { useEffect, useRef, useState } from "react";
import { TiLocationArrow } from "react-icons/ti";
import Button from "./Button.jsx";
import { useWindowScroll } from "react-use";


const navItems = ["Nexus", "Vault", "Prologue", "About", "Contact"];

const Navbar = () => {
    // Refs for navbar and audio
    const navbarRef = useRef(null);
    const audioRef = useRef(null);

    // State for audio
    const [isAudioPlaying, setIsAudioPlaying] = useState(false);
    const [isIndicatorActive, setIsIndicatorActive] = useState(false);

    // Toggle audio
    const toggleAudioIndicator = () => {
        // Change the state of audio to the opposite of its current state
        setIsAudioPlaying((prev) => !prev);
        setIsIndicatorActive ((prev) => !prev); 
    }

    // useEffect for audio
    useEffect(() => {
        if (isAudioPlaying) {
            audioRef.current.play();
        } else {
            audioRef.current.pause();
        }
    }, [isAudioPlaying]);




    // NAVBAR ANIMATION

    // rename y to currentScrollY and get the position of the scroll using useWindowScroll hook
    const { y: currentScrollY } = useWindowScroll(); 
    // Get the last scroll position
    const [lastScrollY, setLastScrollY] = useState(0);

    // Check Navbar visibility
    const [isNavbarVisible, setIsNavbarVisible] = useState(true);
        
    useEffect(() => {
        if(currentScrollY === 0){  // Starting page position
            setIsNavbarVisible(true);
            navbarRef.current.classList.remove("floating-nav");
        }else if(currentScrollY > lastScrollY){ // Scrolling down
            setIsNavbarVisible(false);
            navbarRef.current.classList.add("floating-nav");
        }else if(currentScrollY < lastScrollY){ // Scrolling up
            setIsNavbarVisible(true);
            navbarRef.current.classList.add("floating-nav");
        }

        setLastScrollY(currentScrollY);
    }, [currentScrollY])

    useEffect(() => {
        gsap.to(navbarRef.current,{
            y: isNavbarVisible ? 0 : -100,
            opacity: isNavbarVisible ? 1 : 0,
            duration: 0.2,
        });
    },[isNavbarVisible]);
  return (
    <div ref={navbarRef} className="fixed inset-x-0 top-4 z-50 h-16 border-none transition-all duration-700 sm:inset-x-6">
        <header className="absolute top-1/2 w-full -translate-y-1/2">
            <nav className="flex size-full items-center justify-between p-4">
                <div className="flex items-center gap-7">
                    <img src="/img/logo.png" alt="logo" className="w-10" />
                    <Button
                        id="product-button"
                        title="Products"
                        rightIcon={<TiLocationArrow />}
                        containerClass="bg-blue-50 md:flex hidden items-center justify-center gap-1"
                    />
                </div>
                
                {/* Rightside nav */}
                <div className="flex h-full items-center">
                    <div className="hidden md:block">
                        {navItems.map((item, index)=>(
                            <a key={index} href={`#${item}`} className='nav-hover-btn'>
                                {item}
                            </a>
                        ))}
                    </div>

                    <button className="ml-10 flex items-center space-x-0.5"
                    onClick={toggleAudioIndicator}>
                        <audio
                            ref={audioRef}
                            className="hidden"
                            src="/audio/loop.mp3"
                            loop/>

                            {/* Create line animation  */}
                            {[1,2,3,4,5,6].map((bar) => (
                                <div
                                    key = {bar}
                                    className={`indicator-line ${isIndicatorActive ? "active" : ""}`}
                                    style={{animationDelay: `${bar * 0.05}s`}}
                                />
                            ))}
                    
                    </button>
                </div>
            </nav>
        </header>
    </div>
  )
}

export default Navbar