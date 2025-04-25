import React from 'react'
import TitleSection from '../components/titleSection'
import NavBar from '../components/navbar'
import Footer from '../pages/footer'

const titles = [
    {
        text:"BRAND1",
        className:"mt-[10vw] md:mt-0 text-[25vw] md:text-[20vw] text-white font-bold h-[50vw] md:h-[30vw]",
    },
]

const images = [
    {
        id: 0,
        src: "https://picsum.photos/200",
        width: 200,
        height: 300,
    },
    {
        id: 1,
        src: "https://picsum.photos/200/300",
        width: 200,
        height: 300,
    },
    {
        id: 2,
        src: "https://picsum.photos/200",
        width: 200,
        height: 300,
    }
]

export default function brand1() {
  return (
    <>
    <NavBar />
    <div className="p-2">
    <div className='bg-[#DC065F]'>
        <TitleSection lines={titles} overlayContainerClass="flex justify-center flex-row bg-[#DC065F]"/>
    </div>
    </div>
    
    

    <div className="px-2 pb-2">
  <div className="flex flex-wrap gap-2">
    {images.map((img) => (
      <img
        key={img.id}
        src={img.src}
        alt=""
        className={`object-cover ${
          img.width > img.height
            ? 'w-full h-[60vh]' // landscape: full width
            : 'w-[calc(50%-0.25rem)] h-[60vh]' // portrait: 2 per row with 0.5rem gap
        }`}
      />
    ))}
  </div>
</div>
      

      <Footer />
    </>
  )
}
