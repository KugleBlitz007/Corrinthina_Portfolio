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
import linkedin from '../assets/linkedin.PNG';
import linkedin_1 from '../assets/linkedin_1.PNG';
import facebook from '../assets/facebook.PNG';
import newsletter from '../assets/newsletter.png';
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
    <div className="relative w-full h-[60vw] min-h-[300px] max-h-[500px] flex items-center justify-center bg-black/50 overflow-hidden">
      {/* Background Image */}
      <img
        src= {thumb}
        alt="Hero Background"
        className="absolute inset-0 w-full h-full object-cover object-center z-0"
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 z-10" />
      {/* Logo */}
      <div className="absolute top-6 left-1/2 -translate-x-1/2 z-20 flex justify-center w-full">
        <img src={telferLogo} alt="Telfer Logo" className="h-12 md:h-16 drop-shadow-lg" />
      </div>
      {/* Title */}
      <div className="relative z-20 flex flex-col items-center justify-center w-full h-full">
        <h1 className="text-white text-center font-bold text-xl md:text-3xl lg:text-4xl px-4 drop-shadow-lg">
          La valeur de la diversité d'expériences<br />dans les marchés financiers
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

    <h1 className="flex justify-center mt-10 md:text-6xl text-4xl text-black mb-10 font-bold">
            The Videos
    </h1>

    <div className="px-2 pb-2">
    <div className="flex flex-wrap gap-2 grid grid-cols-1 md:grid-cols-2">
  {images.map((img) => (
    <a
      key={img.id}
      href={img.href || '#'}
      target="_blank"
      rel="noopener noreferrer"
      className="block"
    >
      <img
        src={img.src}
        alt={img.alt || 'Image'}
        className="object-cover"
      />
    </a>
  ))}


</div>

<h1 className="flex justify-center mt-10 md:text-6xl text-4xl text-black mb-10 font-bold">
            The Newsletter
    </h1>

<a
      key={3}
      href={"https://secure.campaigner.com/csb/Public/show/ch5l-2wto9q--19ir8b-jes96135"}
      target="_blank"
      rel="noopener noreferrer"
      className="block"
    >
      <img
        src={newsletter}
        alt=""
        className="object-cover w-full h-[45vw]"
      />
    </a>

    <h1 className="flex justify-center mt-10 md:text-6xl text-4xl text-black mb-10 font-bold">
            Social media posts
    </h1>

    <div className="flex flex-wrap gap-2 grid grid-cols-1 md:grid-cols-4">
  {images_social.map((img) => (
    <a
      key={img.id}
      href={img.href || '#'}
      target="_blank"
      rel="noopener noreferrer"
      className="block"
    >
      <img
        src={img.src}
        alt={img.alt || 'Image'}
        className=" border-2 border-black/30 md:h-[50vw]"
      />
    </a>
  ))}


</div>

<h1 className="flex justify-center mt-10 md:text-6xl text-4xl text-black mb-10 font-bold">
            Article & Donation Page
    </h1>

    <div className="flex flex-wrap gap-2 grid grid-cols-1 md:grid-cols-2">
  {images_article.map((img) => (
    <a
      key={img.id}
      href={img.href || '#'}
      target="_blank"
      rel="noopener noreferrer"
      className="block"
    >
      <img
        src={img.src}
        alt={img.alt || 'Image'}
        className="object-cover border-2 border-black/30 md:h-[65vw]"
      />
    </a>
  ))}


</div>

    </div>
    <Footer className="!bg-[#8a1c1c]"/>
    </>
  )
}
