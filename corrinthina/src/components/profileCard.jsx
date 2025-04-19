import {FaLinkedin, FaInstagram } from 'react-icons/fa';
import { IoMdMail } from "react-icons/io";
import React from 'react';
import coco from '../assets/coco.jpg'

export default function ProfileCard() {
  return (
    <div className="h-[75vh] relative rounded-2xl shadow-md w-full max-w-xs text-center overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${coco})` }}
      />

      {/* Gradient overlay */}
      <div className="absolute bottom-0 w-full h-full bg-[#c44587]/50" />

      {/* Content */}
      <div className="relative z-10 p-6 h-full flex flex-col justify-end">
        <h4 className="text-sm text-gray-200 tracking-widest uppercase mb-1">Here</h4>
        <h2 className="text-xl font-bold text-white mb-2">Here</h2>
        <p className="text-gray-100 text-sm mb-4 leading-relaxed">
          Here
        </p>
        <div className="flex justify-center gap-4">
          <a href='' className="text-white hover:text-pink-300">
            <IoMdMail />
          </a>
          <a href='' className="text-white hover:text-pink-300">
            <FaLinkedin />
          </a>
          <a href=''className="text-white hover:text-pink-300">
            <FaInstagram />
          </a>
        </div>
      </div>
    </div>
  );
}