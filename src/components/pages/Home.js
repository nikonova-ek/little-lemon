import React from "react";
import CallToAction from "../../components/Hero/Hero";
import Specials from "../sections/headingPages/Specials";
import Testimonials from "../sections/headingPages/Testimonials";
import About from "../sections/headingPages/About";
export default function Homepage() {
  return (
    <>
        <CallToAction />
        <Specials />
        <Testimonials />
        <About />
    </>
  );
}