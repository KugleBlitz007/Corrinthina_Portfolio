import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './components/navbar'
import ProfileCard from './components/profileCard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <NavBar />
      <div className='flex justify-center p-8 w-full max-w-md mx-auto'>
        <ProfileCard />
      </div>
      
    </div>
  )
}

export default App
