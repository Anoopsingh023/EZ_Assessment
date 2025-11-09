import React from "react";
import group9 from "../../assets/Group 9.png";
import group2 from "../../assets/Group 2.svg";
import gate from "../../assets/gate.svg";
import vector from "../../assets/Vector.svg";
import vectorR from "../../assets/VectorR.svg";
import vectorT from "../../assets/VectorTop.svg";

const AboutTeam = () => {
  return (
    <section className="w-full py-10 md:py-0">
      <div className="flex flex-col md:flex-row mx-4 sm:mx-8 md:mx-10 gap-10 items-center justify-center">
        {/* LEFT column */}
        <div className="flex flex-col items-center md:items-start space-y-4 w-full md:w-auto">
          <img
            src={group9}
            alt="Group 9"
            className="w-3/4 sm:w-2/3 md:w-full max-w-xs md:max-w-md object-contain"
          />
          <img
            src={gate}
            alt="Gate decoration"
            className="hidden md:block w-40 md:w-64 object-contain"
          />
        </div>

        {/* RIGHT column */}
        <div className="relative w-full max-w-3xl flex flex-col items-center justify-center md:mt-30">
          {/* Main group image */}
          <div className="w-3/4 sm:w-2/3 md:w-full flex items-center justify-center">
            <img
              src={group2}
              alt="Team group"
              className="w-full max-w-sm md:max-w-lg object-contain"
            />
          </div>

          {/* Decorative labels  */}
          <div
            className="hidden md:flex absolute items-center gap-2 flex-col justify-center pointer-events-none"
            style={{ top: "-22%", left: "30%" }}
          >
            <p className="island-moments-regular md:text-4xl">Film Makers</p>
            <img
              src={vectorT}
              alt="vector top"
              className="md:w-25 w-10 object-contain"
            />
          </div>

          <div
            className="hidden md:flex absolute items-center gap-2 flex-col justify-center pointer-events-none"
            style={{ top: "40%", left: "-6%", transform: "translateY(-50%)" }}
          >
            <img
              src={vector}
              alt="vector left"
              className="md:w-25 w-10 object-contain"
            />
            <span className="island-moments-regular md:text-4xl">
              Branding Experts
            </span>
          </div>

          <div
            className="hidden md:flex absolute items-center gap-2 flex-col pointer-events-none"
            style={{ top: "1%", right: "-4%" }}
          >
            <span className="island-moments-regular md:text-4xl">
              Art Curators
            </span>
            <img
              src={vectorR}
              alt="vector right"
              className="md:w-25 w-10 object-contain"
            />
          </div>

          {/* Text + button */}
          <div className="pt-8 flex flex-col gap-5 justify-center items-center text-center">
            <p className="halant-regular text-lg sm:text-xl md:text-2xl max-w-md">
              Take a closer look at the stories V bring to life.
            </p>
            <button className="px-6 py-2 rounded-full bg-[#F15D2B] text-white hover:bg-[#d94f23] transition-all">
              View Portfolio
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutTeam;
