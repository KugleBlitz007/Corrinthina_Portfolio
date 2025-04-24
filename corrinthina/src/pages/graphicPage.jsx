import { useState } from 'react'
import '../App.css'
import NavBar from '../components/navbar'
import BackgroundVideo from '../components/backVideo'
import Footer from '../pages/footer'
import backImage from '../assets/back.jpeg'
import TitleSection from '../components/titleSection'
import Gallery from '../components/galery'

const overlayText = [
    {
      text: 'I am a Graphic Designer',
      className: 'ml-[15%] mt-[15%] text-[100px] text-[#DC065F]',
    },
    {
      text: 'A subheading for this section, as long or as short as you like',
      className: 'text-2xl ml-[27%] font-extralight text-[#DC065F]',
    },
    {
      text: 'A subheading for this section, as long or as short as you like',
      className: 'text-2xl ml-[27%] -mt-10 font-extralight text-[#DC065F]',
    },
    {
      text: 'A subheading for this section, as long or as short as you like',
      className: 'text-2xl ml-[27%] -mt-10 font-extralight text-[#DC065F]',
    },
    {
        text: 'A subheading for this section, as long or as short as you like',
        className: 'text-2xl ml-[27%] -mt-10 font-extralight text-[#DC065F]',
    },
    {
        text: 'A subheading for this section, as long or as short as you like',
        className: 'text-2xl ml-[27%] -mt-10 font-extralight text-[#DC065F]',
    },
    {
        text: 'A subheading for this section, as long or as short as you like',
        className: 'text-2xl ml-[27%] -mt-10 font-extralight text-[#DC065F]',
    },
  ];

const titles = [
    {
        text:"01 ",
        className:"flex justify-center text-[100px] text-white font-bold",
    },
    {
        text:"‎ ‎ VISUAL DESIGN",
        className:"flex justify-center text-[100px] text-black font-bold",
    }
]

const images = [
    "https://picsum.photos/200",
    "https://picsum.photos/200/300",
    "https://picsum.photos/200/300",
    "https://picsum.photos/200",
    "https://picsum.photos/200/300",
    "https://picsum.photos/200",
    "https://picsum.photos/200",
    "https://picsum.photos/200/300",
  ];


function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <NavBar />
      <div>
        <BackgroundVideo 
        src={backImage} 
        lines={overlayText}
        overlayContainerClass="absolute top-5 left-5 grid grid-cols-1"
        />
      </div>

    <div className='bg-[#DC065F]'>
        <TitleSection lines={titles} overlayContainerClass="flex justify-center flex-row bg-[#DC065F] z-10"/>
    </div>

    <div className='bg-[#FF9696]'>
    <Gallery 
    title="Brand Identity"
    titleStyle="text-black text-5xl font-bold"
    images={images}
    />
    </div>
    
      <Footer />
      
    </div>
  )
}

export default App
