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
          Body text for whatever you’d like to expand on the main point. 
          Body text for whatever you’d like to expand on the main point. 
          Body text for whatever you’d like to expand on the main point. 
          Body text for whatever you’d like to expand on the main point. 
          Body text for whatever you’d like to expand on the main point. 
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
