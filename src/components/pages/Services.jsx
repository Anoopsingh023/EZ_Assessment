import React from "react";
import { useNavigate } from "react-router-dom";
import vectorTLine from "../../assets/VectorTLine.svg";
import imgage6 from "../../assets/image6.png";
import film from "../../assets/film.png";
import art from "../../assets/art.png";
import branding from "../../assets/branding.png";
import frame33 from "../../assets/Frame33.svg";

const Services = () => {
  const navigate = useNavigate();

  const handleService = (menu) => {
    switch (menu) {
      case "film":
        navigate("/film");
        break;
      case "branding":
        navigate("/branding");
        break;
      case "art":
        navigate("/art");
        break;
      default:
        break;
    }
  };

  return (
    <div>
      <section className="w-full px-4 sm:px-8 md:px-10 lg:px-20 pt-20">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col justify-center items-center">
            <h3 className="halant-regular text-2xl sm:text-3xl text-center md:text-left">
              The storyboard reveals the breadth of our craft.
            </h3>
            <img className="w-40 md:w-2xl " src={vectorTLine} alt="" />
          </div>

          <div className="flex flex-col md:flex-row gap-6 md:gap-5 mt-3">
            {/* card 1 */}
            <div
              onClick={() => handleService("film")}
              className="flex-1 flex flex-col items-center md:items-stretch cursor-pointer md:justify-center md:rotate-10 rotate-0"
            >
              <img
                className="hidden md:flex w-36 sm:w-40 md:w-40 md:relative md:top-10 md:right-15 md:-rotate-15 mx-auto md:mx-0"
                src={imgage6}
                alt="image 6"
              />
              <div className="p-2 bg-white w-full sm:w-sm h-auto md:h-4xl flex flex-col justify-center items-center md:items-center mt-4 md:mt-0">
                <img src={film} alt="" />
                <p className="halant-regular text-2xl sm:text-3xl mt-4 text-center md:text-left">
                  Film Production
                </p>
              </div>
            </div>

            {/* card 2 */}
            <div
              onClick={() => handleService("branding")}
              className="flex-1 flex flex-col items-center md:items-stretch cursor-pointer md:justify-center md:rotate-0 rotate-0"
            >
              <img
                className="hidden md:flex w-36 sm:w-40 md:w-40 md:relative md:top-10 md:left-25 md:-rotate-2 mx-auto md:mx-0"
                src={imgage6}
                alt="image 6"
              />
              <div className="p-2 bg-white w-full sm:w-sm h-auto md:h-4xl flex flex-col justify-center items-center md:items-center mt-4 md:mt-0">
                <img src={branding} alt="" />
                <p className="halant-regular text-2xl sm:text-3xl mt-4 text-center md:text-left">
                  Branding
                </p>
              </div>
            </div>

            {/* card 3 */}
            <div
              onClick={() => handleService("art")}
              className="flex-1 flex flex-col items-center md:items-stretch cursor-pointer md:justify-center md:-rotate-10 rotate-0"
            >
              <img
                className="hidden md:flex w-36 sm:w-40 md:w-40 md:relative md:top-10 md:-right-75 md:rotate-45 mx-auto md:mx-0"
                src={imgage6}
                alt="image 6"
              />
              <div className="p-2 bg-white w-full sm:w-sm h-auto md:h-4xl flex flex-col justify-center items-center md:items-center mt-4 md:mt-0">
                <img src={art} alt="" />
                <p className="halant-regular text-2xl sm:text-3xl mt-4 text-center md:text-left">
                  Art Curation
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <img
        className="mt-8 md:mt-16 relative bottom-0 left-0 w-full md:w-auto"
        src={frame33}
        alt=""
      />
    </div>
  );
};

export default Services;
