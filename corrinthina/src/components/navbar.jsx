import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../index.css';
import { FaHome } from "react-icons/fa";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="transition-transform duration-300 text-white  sticky top-0 z-50 bg-white/70 backdrop-blur-md md:-mt-[5%] -mt-[20%]">
      <div className="max-w-screen-xl mx-auto px-4 py-4 flex justify-between items-center">
        
          <Link to="/"> <FaHome className='text-black hover:text-[#c44587] text-2xl '/> </Link>
        
{/*         <h1 className="text-lg font-bold tracking-widest text-black">INSIDE FASHION</h1>
 */}
        {/* Hamburger Button (Mobile) */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-black focus:outline-none"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {/* Desktop Nav */}
        <ul className="hidden md:flex text-xl space-x-8 tracking-widest">
          <li><Link to="/GraphicPage" className="hover:text-[#c44587] text-black">I am a graphic designer</Link></li>
          <li><Link to="/Blogs" className="hover:text-[#c44587] text-black">I am a multimedia digital marketing specialist</Link></li>
          <li><Link to="/AboutMe" className="hover:text-[#c44587] text-black">About me</Link></li>
        </ul>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4">
          <ul className="space-y-4 text-center text-lg tracking-widest">
            <li><Link to="/GraphicPage" className="block hover:text-[#c44587] text-black">I am a graphic designer</Link></li>
            <li><Link to="/Blogs" className="block hover:text-[#c44587] text-black">I am a multimedia digital marketing specialist</Link></li>
            <li><Link to="/AboutMe" className="block hover:text-[#c44587] text-black">About me</Link></li>
          </ul>
        </div>
      )}
    </nav>
  );
}
