import React from "react";
import coco from "../assets/coco.jpg";

function Hero() {
  return (
    <header className="bg-[#DC065F]">
      <div className="p-8 container mx-auto grid h-full  min-h-[60vh] w-full">
        <div className="row-auto">
          <h1 className="mt-5 text-6xl text-black mb-10">
            My name is Corrinthina
          </h1>

          <p className="mb-10 text-white text-2xl font-light ">
          a recent graduate and former marketing and communication intern.
          It all started with a personal project where I wanted to create the best content possible on the internet.
          <br></br>
          <br></br>
          My passion led me to <span className="font-bold">explore cinematography, social media, and digital creation.</span> 
          I took numerous online courses and constantly looking for tips to refine my skills. 
          This helped me to develop my <span className="font-bold">graphic design, content creation</span> (photography, videography, copywriting),
          <span className="font-bold">community management, data analysis, and project management</span> knowledge.
          </p>

          <a
            href="#AboutMe" // Update this with the correct route or section
            className="border border-white text-black text-2xl font-light px-4 py-2 rounded bg-white"
          >
            Download my cv
          </a>
        </div>
      </div>
    </header>
  );
}

export default Hero;
