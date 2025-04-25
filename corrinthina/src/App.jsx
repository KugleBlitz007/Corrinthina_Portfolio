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
import Filter from './components/filter'


function App() {

  return (
    <div>
      <NavBar />
      <Hero />
      <Filter />
      <Footer />
      
    </div>
  )
}

export default App
