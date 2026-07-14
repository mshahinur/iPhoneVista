import React from 'react'
import { footerLinks } from '../constants'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

const Footer = () => {
  useGSAP(()=>{
    const tl=gsap.timeline()
    tl.to('#msg',{
      opacity: 1,
      y: 0,
      duration: 1.2,
      ease: "power2.out",    
    })

    .fromTo(
      "#contactButton",
      { scale: 0.8, opacity: 0 },
      { scale: 1, opacity: 1, duration: 0.8, ease: "elastic.out(1, 0.5)" },
      "-=0.6" // Overlap the animations slightly
    );
  },[])
  return (
    <footer className="py-5 sm:px-10 px-5">
      <div className="screen-max-width">
      <div className=' h-32'
      ></div>

        <div className="bg-neutral-700 my-5 h-[1px] w-full" />

        <div className='flex flex-col align-middle items-center '>
        <p
            id="msg"
            className="text-center text-white opacity-0 transform translate-y-5 transition-opacity duration-300"
          >
            Hi, this was a demo project for my portfolio. If you want to contact
            me then
          </p>
          <button
            id="contactButton"
            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-white hover:text-black hover:shadow-lg transition-all duration-300 focus:outline-none"
          >
            Contact
          </button>
        </div>
      </div>
    </footer>
  )
}

export default Footer