import React from "react";
import coco from "../assets/coco.jpg";

function Hero() {
  return (
    <header className="bg-[#FFE0E0] p-8">
        <h1 className="mb-10 text-6xl !leading-tight text-[#A3004C] font-bold flex justify-center">
        I am a multimedia marketing specialist 
        </h1>

      <div className="container mx-auto grid h-full gap-10 min-h-[60vh] w-full grid-cols-3">
        <div className="">
            <img
            src={coco}
            alt="team work"
            className="rounded-md aspect-square object-cover"
            />

            <p className="mt-5 text-black text-2xl font-light pr-28">
            Subheading
            </p>

            <p className="text-[#828282] text-2xl font-light pr-28">
            Body text for whatever you’d like to expand on the main point. 
            </p>
        </div>

        <div className="">
            <img
            src={coco}
            alt="team work"
            className="rounded-md aspect-square object-cover"
            />

            <p className="mt-5 text-black text-2xl font-light pr-28">
            Subheading
            </p>

            <p className="text-[#828282] text-2xl font-light pr-28">
            Body text for whatever you’d like to expand on the main point. 
            </p>
        </div>

        <div className="">
            <img
            src={coco}
            alt="team work"
            className="rounded-md aspect-square object-cover"
            />

            <p className="mt-5 text-black text-2xl font-light pr-28">
            Subheading
            </p>

            <p className="text-[#828282] text-2xl font-light pr-28">
            Body text for whatever you’d like to expand on the main point. 
            </p>
        </div>
        
        
      </div>

      <div className="flex justify-center mt-10">
      <a
            href="#AboutMe" // Update this with the correct route or section
            className=" text-white text-2xl font-light px-4 py-2 rounded-lg bg-black inline-block"
          >
            Click to see more
          </a>

        </div>
    </header>
  );
}

export default Hero;
