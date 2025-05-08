import React from 'react'
import { FaLinkedin, FaInstagram, FaYoutube } from 'react-icons/fa';

export default function ContactUs({ className = '', linkClassName = '' }) {
  return (
    <footer id="Contact" className={`bg-[#DC065F] px-4 md:px-16 lg:px-28 py-8 ${className}`}>
        <div className=" pt-6 text-white text-center mt-6 hover:text-amber-300">
            <p><a href="mailto:corrinthina@outlook.com">email : corrinthina@outlook.com</a></p>
        </div>

        <div className="flex flex-row justify-center mt-6 place-items-stretch">
<div className="mx-3">
                <a href="https://www.linkedin.com/in/corrinthina/?originalSubdomain=ca" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin className="text-lg text-white hover:text-blue-500" />
                </a>
            
</div>
            <div className="mx-3">
                <a href="https://www.instagram.com/corrinthina/" target="_blank" rel="noopener noreferrer">
                    <FaInstagram className="text-lg text-white hover:text-[#FEDA77]" />
                </a>
            </div>

            <div className="mx-3">
                <a href="https://www.youtube.com/@JohannRajosefa" target="_blank" rel="noopener noreferrer">
                    <FaYoutube className="text-lg text-white hover:text-red-500" />
                </a>
            </div>

        </div>

        <div className=" pt-6 text-white text-center mt-6 hover:text">
            <p>© 2025 designed by Corrinthina built by <a href="https://github.com/KugleBlitz007" className="hover:text-amber-300">Johann Rajosefa</a></p>
        </div>
    </footer>
  )
}