import React from "react";
import coco from "../assets/coco.jpg";

function Hero() {
  return (
    <header className="bg-[#DC065F] p-8">
      <div className="container mx-auto grid h-full gap-10 min-h-[60vh] w-full grid-cols-1 lg:grid-cols-2">
        <div className="row-start-2 lg:row-auto">
          <h1 className="mb-20 mt-5 text-6xl !leading-tight text-black">
            My name is Corrinthina
          </h1>

          <p className="mb-20 text-white text-2xl font-light pr-28">
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
            More about me
          </a>
        </div>

        <img
          src={coco}
          alt="team work"
          className="h-[36rem] w-full object-cover"
        />
      </div>
    </header>
  );
}

export default Hero;
