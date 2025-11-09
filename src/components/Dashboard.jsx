import React from "react";
import Navbar from "./Navbar";
import Slider from "./Slider";
import Hero from "./pages/hero";
import AboutTeam from "./pages/AboutTeam";
import AboutUs from "./pages/AboutUs";
import Services from "./pages/Services";
import Portfolio from "./pages/Portfolio";
import ContactPage from "./pages/ContactPage";

const Dashboard = () => {
  return (
    <div className="">
      <Navbar />
      <Slider navbarHeight={1}>
        <Hero />
        <AboutTeam />
        <AboutUs/>
        <Services/>
        <Portfolio/>
        <ContactPage/>
      </Slider>
    </div>
  );
};

export default Dashboard;
