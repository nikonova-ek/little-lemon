import React from "react";
import CallToAction from "../../components/Hero/Hero";
import About from "../../components/pages/About";
import Booking from "../../components/pages/Booking";
import Testimonials from "../../components/sections/headingPages/Testimonials";

function BookingPage() {
  return (
    <>
      <CallToAction />
      <Booking />
      <Testimonials />
      <About />
    </>
  );
}

export default BookingPage;