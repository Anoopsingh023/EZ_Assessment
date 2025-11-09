import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import vectorTLine from "../../assets/VectorTLine.svg";
import brandingPage from "../../assets/brandingPage.png";
import brand01 from "../../assets/brand01.svg";
import brand02 from "../../assets/brand02.svg";
import brand03 from "../../assets/brand03.svg";
import brand04 from "../../assets/brand04.svg";
import Navbar from "../Navbar";
import arrow from "../../assets/Arrow.svg";

const Branding = () => {
  const navigate = useNavigate();

  return (
    <motion.section
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -100 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      className="relative w-full px-4 sm:px-6 md:px-6 lg:px-10 pt-12 md:pt-20"
    >
      <Navbar />

      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="flex flex-col justify-center items-center text-center mt-10 md:mt-0 sm:mt-0">
          <h3 className="halant-regular text-xl sm:text-2xl md:text-2xl lg:text-3xl text-center md:text-left">
            "A brand is a voice, and a product is a souvenir." - Lisa Gansky
          </h3>
          <img className="w-28 md:w-2xl " src={vectorTLine} alt="line" />
        </div>

        {/* Back Button */}
        <div className="mt-4 md:mt-0">
          <button
            onClick={() => navigate("/")}
            className="md:absolute md:top-40 md:left-50 border border-[#F15D2B] rounded-full text-[#F15D2B] px-5 py-2 hover:bg-[#F15D2B] hover:text-white duration-300 cursor-pointer text-sm sm:text-base"
          >
            ← Back
          </button>
        </div>

        {/* Decorative camera SVGs*/}
        <img
          className="hidden md:block md:absolute md:-bottom-10 md:left-50 md:w-25"
          src={brand02}
          alt="brand02"
        />
        <img
          className="hidden md:block md:absolute md:top-25 md:right-30 md:w-25"
          src={brand04}
          alt="brand04"
        />
        <img
          className="hidden md:block md:absolute md:top-85 md:right-80 md:w-25"
          src={brand03}
          alt="brand03"
        />
        <img
          className="hidden md:block md:absolute md:-bottom-15 md:right-40 md:w-25"
          src={brand01}
          alt="brand01"
        />

        {/* Main Content */}
        <div className="flex flex-col md:flex-row gap-6 md:gap-5 items-center justify-center mt-8 md:mt-9 w-full max-w-4xl mx-auto">
          {/* Card Section */}
          <div className="flex-1 flex justify-center items-center">
            <div className="w-[170px] sm:w-[220px] md:w-[260px] lg:w-[300px] bg-white shadow-xl overflow-hidden p-2 text-center">
              <img
                src={brandingPage}
                alt="production"
                className="w-full h-auto object-cover"
              />
              <p className="mt-4 text-lg sm:text-xl md:text-xl font-semibold text-gray-800">
                Branding
              </p>
            </div>
          </div>

          {/* Text Section */}
          <div className="flex-1 text-gray-700 leading-relaxed text-base sm:text-lg md:text-lg instrument-sans px-2 md:px-0">
            <p>
              A brand isn’t just what you see - it’s what you remember, what you
              carry home, and what you trust. We shape brands that people
              remember, return to, and fall in love with.
            </p>

            <p className="mt-6 font-semibold">V creates:</p>

            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>Branding & Communication</li>
              <li>Market Mapping</li>
              <li>Content Management</li>
              <li>Social Media Management</li>
              <li>Rebranding</li>
            </ul>
            <div>
              <p className="mt-5 ">Explore Now</p>
              <img className="w-25" src={arrow} alt="arrow" />
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Branding;
