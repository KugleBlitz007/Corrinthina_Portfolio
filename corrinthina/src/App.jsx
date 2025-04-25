import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './components/navbar'
import ProfileCard from './components/profileCard'
import BackgroundVideo from './components/backVideo'
import Hero from './pages/hero'
import GraphicDesign from './pages/graphicDesigner'
import MultiMedia from './pages/multimediaMarketing'
import Projects from './pages/projects'
import Footer from './pages/footer'
import videoBack from './assets/test.mov'


const overlayText = [
  {
    text: 'WELCOME',
    className: 'md:ml-[10%] -mb-[50vw] sm:-mb-[10vw] md:-mb-[3vw] mt-[15vw] md:-mt-[3vw] text-[17vw] text-[#DC065F]',
  },
  {
    text: 'To my',
    className: ' sm:-mb-[10vw] ml-[10%] md:-mb-0 font-bold text-[8vw] text-[#DC065F]',
  },
  {
    text: '(personal)',
    className: ' ml-[10%] sm:-mb-[200vw] sm:-mb-[0vw] md:-mb-0 font-extralight italic text-[8vw] text-[#FFE0E0]',
  },
  {
    text: 'PORTFOLIO',
    className: 'md:ml-[9%] -mb-[3vw] -mt-[10vw] sm:-mt-[1vw] md:-mt-[2vw] text-[16vw] text-[#DC065F]',
  },
  {
    text: '',
    className: 'sm:hidden md:ml-[9%] -mb-[3vw] -mt-[10vw] sm:-mt-[1vw] md:-mt-[2vw] text-[16vw] text-[#DC065F]',
  },
  {
    text: '',
    className: 'sm:hidden md:ml-[9%] -mb-[3vw] -mt-[10vw] sm:-mt-[1vw] md:-mt-[2vw] text-[16vw] text-[#DC065F]',
  },
  {
    text: '',
    className: 'sm:hidden md:ml-[9%] -mb-[3vw] -mt-[10vw] sm:-mt-[1vw] md:-mt-[2vw] text-[16vw] text-[#DC065F]',
  },
  {
    text: '',
    className: 'sm:hidden md:ml-[9%] -mb-[3vw] -mt-[10vw] sm:-mt-[1vw] md:-mt-[2vw] text-[16vw] text-[#DC065F]',
  },
];


function App() {

  return (
    <div>
      <NavBar />
      <div>
      <BackgroundVideo
      src={videoBack}
      lines={overlayText}
      overlayContainerClass="top-5 left-5 grid grid-cols-1"
    />
      </div>
      <Hero />
      <GraphicDesign />
      <MultiMedia />
      <Projects />
      <Footer />
      
    </div>
  )
}

export default App
