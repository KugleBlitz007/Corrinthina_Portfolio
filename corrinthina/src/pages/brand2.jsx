import React from 'react'
import TitleSection from '../components/titleSection'
import NavBar from '../components/navbar'
import Footer from './footer'
import malou from '../assets/malou.png';
import thumb from '../assets/thumb.jpg';
import video1 from '../assets/yt_eng.png';
import video2 from '../assets/yt_fr.png';
import article from '../assets/draft1.png';
import instagram from '../assets/insta_malou_1.jpg';
import linkedin from '../assets/insta_malou_2.jpg';
import linkedin_1 from '../assets/insta_malou_3.jpg';
import facebook from '../assets/insta_malou_4.jpg';
import newsletter from '../assets/website.png';
import donation from '../assets/draft2.png';




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
      href: "",
  },
  {
      id: 1,
      src: donation,
      width: 200,
      height: 300,
      alt: "Donation",
      href: "",
  },
]

const images_social = [
  {
      id: 0,
      src: instagram,
      width: 200,
      height: 300,
      alt: "Instagram",
      href: "https://www.instagram.com/p/DI6SV3ARDwT/?img_index=1",
  },
  {
      id: 1,
      src: facebook,
      width: 200,
      height: 300,
      alt: "Facebook",
      href: "https://www.instagram.com/p/DH3ViO-seGh/?img_index=1",
  },
  {
    id: 2,
    src: linkedin,
    width: 200,
    height: 300,
    alt: "Linkedin",
    href: "https://www.instagram.com/p/DIB591ls23o/",
},
{
  id: 3,
  src: linkedin_1,
  width: 200,
  height: 300,
  alt: "Linkedin",
  href: "https://www.instagram.com/p/DGZpFPYMtoA/?img_index=1",
},
]
export default function brand1() {
  return (
    <>
    <NavBar className="!bg-[#01642E]" linkClassName="!text-white" />
    {/* Hero Section */}
    <div className="relative w-full h-[60vw] min-h-[300px] max-h-[500px] flex items-center justify-center bg-[#01642E] overflow-hidden">
      {/* Background Image */}
      <img
        src= {malou}
        alt="Hero Background"
        className="object-cover h-full"
      />
      {/* Overlay */}
      <div className="absolute inset-0  z-10" />
    
      {/* Title */}
      
      
    </div>
    {/* End Hero Section */}

   
    <div className="px-2 pb-2">
   

<h1 className="flex justify-center mt-10 md:text-6xl text-4xl text-black mb-10 font-bold">
            The Website
    </h1>

<a
      key={3}
      href={"https://malou-uottawa.club"}
      target="_blank"
      rel="noopener noreferrer"
      className="block"
    >
      <img
        src={newsletter}
        alt=""
        className="object-cover w-full h-full"
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
        className=" border-2 border-[#01642E] md:h-[50vw]"
      />
    </a>
  ))}


</div>

<h1 className="flex justify-center mt-10 md:text-6xl text-4xl text-black mb-10 font-bold">
            Draft posts
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
        className="object-cover border-2 border-[#01642E] w-full h-full"
      />
    </a>
  ))}


</div>

    </div>
    <Footer className="!bg-[#01642E]"/>
    </>
  )
}
