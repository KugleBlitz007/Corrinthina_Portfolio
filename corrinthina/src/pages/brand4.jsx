import React from 'react'
import TitleSection from '../components/titleSection'
import NavBar from '../components/navbar'
import Footer from './footer'
import malou from '../assets/fashion.png';
import thumb from '../assets/thumb.jpg';
import video1 from '../assets/yt_eng.png';
import video2 from '../assets/yt_fr.png';
import article from '../assets/draft1.png';
import instagram from '../assets/blog1.png';
import linkedin from '../assets/blog2.png';
import linkedin_1 from '../assets/blog3.png';
import facebook from '../assets/insta_malou_4.jpg';
import newsletter from '../assets/home_fashion.png';
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
      alt: "Blog 1",
      href: "https://inside-fashion.mypagecloud.com/the-vogue-december-issue-by-marc-jacobs",
  },
  
  {
    id: 2,
    src: linkedin,
    width: 200,
    height: 300,
    alt: "Blog 2",
    href: "https://inside-fashion.mypagecloud.com/what-is-fashion-week-and-its-history",
},
{
  id: 3,
  src: linkedin_1,
  width: 200,
  height: 300,
  alt: "Blog 3",
  href: "https://inside-fashion.mypagecloud.com/paris-fashion-week-2024-highlights-top-trend-en-vue",
},
]
export default function brand1() {
  return (
    <>
    <NavBar className="!bg-[#ffcacb]" linkClassName="!text-black" />
    {/* Hero Section */}
    <div className="relative w-full h-[60vw] min-h-[300px] max-h-[500px] flex items-center justify-center bg-[#ffcacb] overflow-hidden">
      {/* Background Image */}
      <img
        src= {malou}
        alt="Hero Background"
        className="object-cover  w-full"
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
      href={"https://inside-fashion.mypagecloud.com/"}
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
            Blogs
    </h1>

    <div className="flex flex-wrap gap-2 grid grid-cols-1 md:grid-cols-3 ">
  {images_social.map((img) => (
    <a
      key={img.id}
      href={img.href || '#'}
      target="_blank"
      rel="noopener noreferrer"
      className="block flex justify-center"
    >
      <img
        src={img.src}
        alt={img.alt || 'Image'}
        className="md:h-[50vw]"
      />
    </a>
  ))}


</div>



    </div>
    <Footer className="!bg-[#ffcacb]" linkClassName="!text-black !hover:text-rose"/>
    </>
  )
}
