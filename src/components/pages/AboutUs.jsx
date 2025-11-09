import React from "react";
import card from "../../assets/card.png";

const AboutUs = () => {
  const cards = [
    { id: 1, number: "85+", label: "Projects" },
    { id: 2, number: "50+", label: "Happy Clients" },
    { id: 3, number: "10+", label: "Expert Team" },
  ];

  return (
    <section className="w-full px-4 sm:px-8 md:px-10 lg:px-20 py-12">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col-reverse md:flex-row items-center gap-10 ">
          {/* LEFT column - content & cards */}
          <div className="w-full md:w-1/2 flex flex-col gap-5 mt-20">
            <h3 className="halant-regular text-2xl sm:text-3xl mb-4 text-center md:text-left">
              A montage of familiar faces and names.
            </h3>

            <p className="instrument-sans text-sm sm:text-base md:text-lg leading-relaxed max-w-xl mx-auto md:mx-0 text-center mb-6">
              Some stories come from the biggest names. Others begin with bold,
              rising voices. We’ve been fortunate to walk alongside both —
              listening, creating, and building stories that matter.
            </p>

            {/* Cards container */}
            <div className="flex flex-row sm:flex-row gap-4 sm:gap-10 md:gap-40 justify-center md:justify-start items-center md:items-start">
              {cards.map((c, i) => (
                <div
                  key={c.id}
                  className={`relative w-30 sm:w-40 md:w-44 lg:w-48 shrink-0 transition-transform duration-300
                    ${i === 0 ? "md:ml-0" : "md:-ml-[30%]"}
                    md:rotate-10 rotate-0
                    hover:z-20 hover:scale-105`}
                  style={{
                    zIndex: 10 + i, 
                  }}
                >
                  {/* Card image */}
                  <img
                    src={card}
                    alt="card"
                    className="w-full h-auto block shadow-lg object-cover"
                  />
                  <div className="absolute inset-0 bg-[#fff65462] mix-blend-multiply"></div>

                  <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                    <span className="text-xl sm:text-2xl font-bold drop-shadow-md">
                      {c.number}
                    </span>
                    <span className="text-[#F15D2B] text-sm sm:text-base drop-shadow-md">
                      {c.label}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT column  */}
          <div className="w-full md:w-1/2">
            <h4 className="island-moments-regular text-3xl sm:text-4xl md:text-6xl lg:text-6xl text-center leading-tight">
              Every project is more than just a brief — it’s a new chapter
              waiting to be written. Together, we've crafted tales that inspire,
              connect, and endure.
            </h4>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
