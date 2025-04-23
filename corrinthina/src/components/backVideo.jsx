import React from 'react'
import videoBack from '../assets/test.mov'

const backgroundVideo = () => {
  return (
    <div className="relative w-full">
        {/*<div className='absolute w-full h-full top-0 left-0 bg-black/50'></div>*/}
        <video alt="Background" className="w-full bg-cover object-contain" src={videoBack} autoPlay loop muted playsInline />

        <div className="absolute top-5 left-5 w-full h-full grid grid-cols-1">
            <h1 className="text-4xl ml-[10%] -mb-10 mt-10 text-[250px] text-[#DC065F]">WELCOME</h1>
            <h1 className="text-4xl ml-[10%] font-bold text-[100px] text-[#DC065F]">To my</h1>
            <h1 className="text-4xl ml-[10%] font-extralight italic text-[100px] text-[#FFE0E0]">(personal)</h1>
            <h1 className="text-4xl ml-[5%] mb-5 text-[250px] font-Inder text-[#DC065F]">PORTFOLIO</h1>
        </div>
    </div>
  )
}

export default backgroundVideo