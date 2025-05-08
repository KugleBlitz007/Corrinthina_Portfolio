import React from 'react'
import TitleSection from '../components/titleSection'
import NavBar from '../components/navbar'
import Footer from '../pages/footer'
import telferLogo from '../assets/Telfer_ENG.png';
import thumb from '../assets/thumb.jpg';
import video1 from '../assets/yt_eng.png';
import video2 from '../assets/yt_fr.png';
import article from '../assets/article.png';
import instagram from '../assets/insta.PNG';
import linkedin from '../assets/linkedin_lissa.jpeg';
import linkedin_1 from '../assets/linkedin_1.PNG';
import facebook from '../assets/facebook.PNG';
import newsletter from '../assets/lissa.png';
import donation from '../assets/donation.png';



const titles = [
    {
        text:"BRAND1",
        className:"mt-[10vw] md:mt-0 text-[25vw] md:text-[20vw] text-white font-bold h-[50vw] md:h-[30vw]",
    },
]

const images = [
    {
        id: 0,
        src: video1,
        width: 200,
        height: 300,
        alt: "English Video",
        href: "https://www.youtube.com/watch?v=RMH3ygkJHdw",
    },
    {
        id: 1,
        src: video2,
        width: 200,
        height: 300,
        alt: "French Video",
        href: "https://www.youtube.com/watch?v=vFbmPpWX1JU",
    },
]

const images_article = [
  {
      id: 0,
      src: article,
      width: 200,
      height: 300,
      alt: "article",
      href: "https://telfer.uottawa.ca/telfer-knowledge-hub/experiential-learning/giving-day-2025",
  },
  {
      id: 1,
      src: donation,
      width: 200,
      height: 300,
      alt: "Donation",
      href: "https://give.uottawa.ca/page/166399/donate/1?locale=en-CA&_gl=1*1qx2l6e*_gcl_au*MTczODM1OTEyNS4xNzM2NzE1NjU5*_ga*MjQzNzUwNjM2LjE3NDAxMDc5MDA.*_ga_GKVJ53FL3H*MTc0MjYwMzA3OC42LjEuMTc0MjYwMzIyMC42MC4wLjE4Mjc1MzU4OTA.",
  },
]

const images_social = [
  {
      id: 0,
      src: instagram,
      width: 200,
      height: 300,
      alt: "Instagram",
      href: "https://www.instagram.com/p/DHtfHxHMQ7Y/?img_index=1&igsh=MWh5MmhleWFnaW9lZw%3D%3D",
  },
  {
      id: 1,
      src: facebook,
      width: 200,
      height: 300,
      alt: "Facebook",
      href: "https://www.facebook.com/100063691245415/posts/1217681010364929/?mibextid=wwXIfr&rdid=lVuSpED60QTQq95x#",
  },
  {
    id: 2,
    src: linkedin,
    width: 200,
    height: 300,
    alt: "Linkedin",
    href: "https://www.linkedin.com/posts/telfer-school-of-management_givingday-telfernation-activity-7313216171246313472-YluZ/?utm_source=share&utm_medium=member_desktop&rcm=ACoAAExzaBkBXpuuu3fARuhERHerGyiT6-js_hg",
},
{
  id: 3,
  src: linkedin_1,
  width: 200,
  height: 300,
  alt: "Linkedin",
  href: "https://www.linkedin.com/posts/telfer-school-of-management_telfernation-givingday-generosity-activity-7311037062697107459-XLCJ/?utm_source=share&utm_medium=member_desktop&rcm=ACoAAExzaBkBXpuuu3fARuhERHerGyiT6-js_hg",
},
]
export default function brand1() {
  return (
    <>
    <NavBar className="!bg-[#8a1c1c]" linkClassName="!text-white" />
    {/* Hero Section */}
    <div className="relative w-full h-[60vw] min-h-[300px] max-h-[500px] flex items-center justify-center bg-[#8a1c1c] overflow-hidden">
      {/* Background Image 
      <img
        src= {thumb}
        alt="Hero Background"
        className="absolute inset-0 w-full h-full object-cover object-center z-0"
      />
      {/* Overlay 
      <div className="absolute inset-0 bg-black/40 z-10" />
       Logo */}
      <div className="absolute top-6 left-1/2 -translate-x-1/2 z-20 flex justify-center w-full">
        <img src={telferLogo} alt="Telfer Logo" className="h-12 md:h-16 drop-shadow-lg" />
      </div>
      {/* Title */}
      <div className="relative z-20 flex flex-col items-center justify-center w-full h-full">
        <h1 className="text-white text-center font-bold text-xl md:text-3xl lg:text-4xl px-4 drop-shadow-lg">
        This article was written by Corrinthina Rabemanantsoa,
         a fourth-year Bachelor of Commerce student specializing
          in marketing at the Telfer School of Management
        </h1>
      </div>
      {/* Color Bar */}
      <div className="absolute bottom-0 left-0 w-full h-4 flex z-30">
        <div className="flex-1 bg-[#c7d64f]" />
        <div className="flex-1 bg-[#5fc3ce]" />
        <div className="flex-1 bg-[#8a1c1c]" />
        <div className="flex-1 bg-[#e7b73b]" />
        <div className="flex-1 bg-[#b86ca8]" />
      </div>
    </div>
    {/* End Hero Section */}

 

    <div className="px-2 pb-2">
   

<h1 className="flex justify-center mt-10 md:text-6xl text-4xl text-black mb-10 font-bold">
            Telfer Knowledge Hub Article
    </h1>

    <a
  key={3}
  href="https://telfer.uottawa.ca/telfer-knowledge-hub/experiential-learning/lissa-moore-bcom-11-turning-passion-into-entrepreneurship"
  target="_blank"
  rel="noopener noreferrer"
  className="block flex justify-center"
>
  <div className="relative md:w-[75vw] h-full">
    <img
      src={newsletter}
      alt=""
      className="object-cover w-full h-full"
    />
    <div className="absolute bottom-0 left-0 w-full h-[15%] bg-gradient-to-t from-white to-transparent pointer-events-none" />
  </div>
  
</a>

<a
  href="https://telfer.uottawa.ca/telfer-knowledge-hub/experiential-learning/lissa-moore-bcom-11-turning-passion-into-entrepreneurship"
  target="_blank"
  rel="noopener noreferrer"
  className="block flex justify-center"
>
<div className="flex justify-center">
  <div className="inline-block px-4 py-2 border-2 border-black rounded hover:bg-black hover:text-white transition" >
  
    Read More
    
  </div>
</div>
</a>


    <h1 className="flex justify-center mt-10 md:text-6xl text-4xl text-black mb-10 font-bold">
            Linkedin Post
    </h1>

    <a
      key={3}
      href={"https://www.linkedin.com/posts/telfer-school-of-management_francophone-telfernation-moisdelafrancophonie-activity-7312501949617131524-rGGj/?utm_source=share&utm_medium=member_desktop&rcm=ACoAAExzaBkBXpuuu3fARuhERHerGyiT6-js_hg"}
      target="_blank"
      rel="noopener noreferrer"
      className="block flex justify-center"
    >
      <img
        src={linkedin}
        alt=""
        className="object-cover md:h-[75vw]"
      />
    </a>



    </div>
    <Footer className="!bg-[#8a1c1c]"/>
    </>
  )
}
