import React from "react";
import heroMandala from "../../assets/HeroMandala.svg";
import vFilm from "../../assets/VFilmsLogo.png";

const Hero = () => {
  return (
    <div className="flex flex-col md:flex-row mx-5 mt-15 sm:mx-10 md:mx-20 gap-10 md:gap-5 items-center justify-center py-5">
      
      {/* Left Image Section */}
      <div className="relative flex-2 flex justify-center items-center w-full md:w-1/2">
        {/* Background (first) image */}
        <img
          className="w-3/4 sm:w-4/5 md:w-full max-w-xl h-auto"
          src={heroMandala}
          alt="Hero Mandala"
        />

        {/* Centered overlay (second) image */}
        <img
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 sm:w-32 md:w-40 lg:w-48"
          src={vFilm}
          alt="VFilmsLogo"
        />
      </div>

      {/* Right Text Section */}
      <div className="flex-3 flex flex-col items-center md:items-center gap-5 w-full md:w-1/2 px-2 sm:px-5">
          <h1 className="island-moments-regular text-4xl sm:text-4xl md:text-8xl leading-snug text-center">
            Varnan is where stories find their voice and form
          </h1>

        <h3 className="halant-regular text-[#F15D2B] text-base sm:text-lg md:text-xl font-bold">
          Films · Brands · Art
        </h3>

        <p className="instrument-sans text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed max-w-xl text-center">
          Since 2009, V’ve been telling stories — stories of people, their
          journeys, and the places that shape them. Some begin in polished
          boardrooms, others in humble village squares. But every story starts
          the same way — by listening with intention. V believes it takes trust,
          patience, and an eye for the unseen to capture what truly matters. V
          doesn’t just tell stories — V honors them.
        </p>
      </div>
    </div>
  );
};

export default Hero;
