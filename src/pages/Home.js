import React from "react";
import Hero from "../components/hero/Hero";
import Feature from "../components/feature/Feature";
import Works from "../components/works/Works";
import Gym from "../components/gym/Gym";
import Testimonial from "../components/testimonial/Testimonial";
import Pricing from "../components/pricing/Pricing";
import Contact from "../components/contact/Contact";

const Home = () => {
  return (
    <div>
      <Hero />
      <Feature />
      <Works />
      <Gym />
      <Testimonial />
      <Pricing />
      <Contact />
    </div>
  );
};

export default Home;
