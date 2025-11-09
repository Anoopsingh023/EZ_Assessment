import React, { useState } from "react";
import { Link } from "react-router-dom";
import open from "../assets/Open.svg";
import menu from "../assets/Menu.svg";
import vfilmLogo from "../assets/VFilmsLogo.png";

const Navbar = () => {
  const [openNav, setOpenNav] = useState(false);
  const navLinks = ["Services", "Their Stories", "Our Stories", "Vernan"];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      {openNav && (
        <div className="hidden md:flex justify-between items-center px-6 md:px-12 h-16">
          {/* Logo */}
          <div className="flex items-center">
            <img
              className="h-10 md:h-12 w-auto object-contain"
              src={vfilmLogo}
              alt="VFilms Logo"
            />
          </div>

          {/* Nav Links */}
          <div className="flex items-center gap-6">
            {navLinks.map((nav, index) => (
              <Link
                key={index}
                to="#"
                className="instrument-sans hover:text-[#F15D2B] font-medium text-36 transition-colors"
              >
                {nav}
              </Link>
            ))}

            <button className="instrument-sans px-4 py-2 text-white bg-[#F15D2B] rounded-full hover:bg-[#d14e20] transition cursor-pointer">
              Let&apos;s Talk
            </button>

            {/* Close icon (desktop) */}
            <img
              onClick={() => setOpenNav((prev) => !prev)}
              src={open}
              alt="Close menu"
              className="cursor-pointer h-6 w-6"
            />
          </div>
        </div>
      )}
      {!openNav && (
        <div className="flex justify-between items-center px-6 md:px-12 h-16 bg-transparent">
          <img
            className="h-10 md:h-12 w-auto object-contain"
            src={vfilmLogo}
            alt="VFilms Logo"
          />
          <img
            onClick={() => setOpenNav((prev) => !prev)}
            src={menu}
            alt="Open menu"
            className="cursor-pointer h-6 w-6"
          />
        </div>
      )}

      {openNav && (
        <div className="md:hidden absolute top-0 left-0 right-0 bg-[#212121d1] shadow-lg z-40">
          <div className="flex flex-col items-center py-6 gap-4">
            {/* Close control (mobile) */}
            <div className="absolute top-4 right-4">
              <img
                onClick={() => setOpenNav(false)}
                src={open}
                alt="Close menu"
                className="cursor-pointer h-6 w-6"
              />
            </div>

            {navLinks.map((nav, idx) => (
              <Link
                key={idx}
                to="#"
                onClick={() => setOpenNav(false)}
                className="instrument-sans text-lg font-medium hover:text-[#F15D2B] transition-colors"
              >
                {nav}
              </Link>
            ))}

            <button
              onClick={() => {
                setOpenNav(false);
              }}
              className="instrument-sans px-5 py-2 text-white bg-[#F15D2B] rounded-full hover:bg-[#d14e20] transition mt-2"
            >
              Let&apos;s Talk
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
