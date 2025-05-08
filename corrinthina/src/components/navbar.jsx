import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../index.css';
import { FaHome } from "react-icons/fa";

export default function NavBar({ className = '', linkClassName = '' }) {
  return (
    <nav className={`transition-transform duration-300 text-white sticky top-0 z-50 bg-[#DC065F] backdrop-blur-md ${className}`}>
      <div className="max-w-screen-xl mx-auto px-4 py-4 flex justify-between items-center">
        
          <Link to="/"> <FaHome className={`text-black hover:text-white text-2xl ${linkClassName}`}/> </Link>
        
{/*         <h1 className="text-lg font-bold tracking-widest text-black">INSIDE FASHION</h1>
 */}
       
        {/* Desktop Nav */}
        <ul className="flex text-xl space-x-8 tracking-widest">
{/*           <li><Link to="/contact" className="hover:text-white text-black">Contact me</Link></li>
 */}          <li><a href="#Contact" 
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#Contact').scrollIntoView({
                behavior: 'smooth',
                block: 'start'
              });
            }}
            className={`hover:text-white text-black ${linkClassName}`}>Contact me</a></li> 
        </ul>
      </div>
    </nav>
  );
}
