import React from "react";
import film from "../../assets/film.png";
import camera from "../../assets/Camera.svg";

const HeroHighlightReel = () => {
  return (
    <section className="relative overflow-hidden min-h-[480px] md:min-h-[640px] bg-[url('/src/assets/texture.png')] bg-cover bg-center">
      {/* Left camera illustration */}
      <img
        src={camera}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute left-8 top-24 w-44 md:w-56 opacity-90 hidden lg:block"
      />

      {/* Decorative corner mandala */}
      <div className="pointer-events-none absolute right-0 bottom-0 w-36 md:w-48 opacity-90 hidden lg:block">
        {/* optional image */}
      </div>

      <div className="max-w-6xl mx-auto px-6 lg:px-12 py-8 md:py-12 flex flex-col items-center">
        {/* Heading */}
        <h1 className="halant-regular text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-[#2b2b2b] mt-4 md:mt-6">
          The Highlight Reel
        </h1>
        <p className="instrument-sans text-center text-sm sm:text-md md:text-lg text-gray-700 mt-2 mb-6">
          Watch the magic we've captured.
        </p>

        {/* Film-strip + video area */}

        <div className="relative w-full md:w-[900px] lg:w-[700px] py-12 md:py-20 px-6 md:px-30 bg-radial from-[#000000] from-0% via-[#25272980] to-[#81888F00] to-100%">
          {/* Film image  */}
          <img
            src={film}
            alt=""
            aria-hidden="true"
            className="w-full max-w-xs md:max-w-[700px] lg:w-[500px] block mx-auto"
            style={{ filter: "drop-shadow(0 2px 0 rgba(0,0,0,0.12))" }}
          />

          {/* Thumbnail inside */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            {/* Left arrow slab  */}
            <div className="hidden md:flex items-center justify-center w-20 h-[300px] bg-white/90 rounded-sm shadow-inner mx-4">
              <span className="text-4xl font-bold transform -translate-x-1 text-[#0b0b0b] opacity-90">
                &lt;
              </span>
            </div>

            {/* Center video container  */}
            <div className="relative w-[90%] md:w-[70%] lg:w-[66%] max-w-[720px] h-44 md:h-[360px] lg:h-[420px] bg-transparent">
              {/* play button */}
              <button
                aria-label="Play video (demo)"
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-8 md:w-24 md:h-14 rounded-xl flex items-center justify-center bg-red-600 shadow-lg transform hover:scale-105 transition"
                style={{ pointerEvents: "none" }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="w-8 h-8 md:w-10 md:h-10 fill-white"
                  aria-hidden="true"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </button>
            </div>

            {/* Right arrow slab */}
            <div className="hidden md:flex items-center justify-center w-20 h-[300px] bg-white/90 rounded-sm shadow-inner mx-4">
              <span className="text-4xl font-bold transform translate-x-1 text-[#0b0b0b] opacity-90">
                &gt;
              </span>
            </div>
          </div>

          <div className="absolute left-0 right-0 top-3 flex justify-center gap-2 pointer-events-none">
            {Array.from({ length: 10 }).map((_, i) => (
              <div
                key={i}
                className="w-6 h-6 md:w-14 md:h-14 rounded-md bg-white/70 border border-gray-300"
              />
            ))}
          </div>

          <div className="absolute left-0 right-0 bottom-3 flex justify-center gap-2 pointer-events-none">
            {Array.from({ length: 10 }).map((_, i) => (
              <div
                key={i}
                className="w-6 h-6 md:w-14 md:h-14 rounded-md bg-white/70 border border-gray-300"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroHighlightReel;

