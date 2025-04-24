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
    className: 'text-4xl ml-[10%] -mb-10 mt-10 text-[250px] text-[#DC065F]',
  },
  {
    text: 'To my',
    className: 'text-4xl ml-[10%] font-bold text-[100px] text-[#DC065F]',
  },
  {
    text: '(personal)',
    className: 'text-4xl ml-[10%] font-extralight italic text-[100px] text-[#FFE0E0]',
  },
  {
    text: 'PORTFOLIO',
    className: 'text-4xl ml-[5%] mb-5 text-[250px] font-Inder text-[#DC065F]',
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
      overlayContainerClass="absolute top-5 left-5 grid grid-cols-1"
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
