import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import image from "../../assets/restauranfood.jpeg";
import "./Hero.css";

function CallToAction() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/reservations");
  };

  useEffect(() => {
    const bookingSection = document.getElementById("booking");
    if (bookingSection) {
      bookingSection.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  return (
    // main-bg is the full-width background of the section for color
    <div className="hero-bg">
      <div className="container">
        <main>
          <div id="callToAction" className="hero-content">
            <div className="hero-left">
              <h1>Little Lemon</h1>
              <h2>Chicago</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Praesent euismod condimentum ante finibus consequat. Donec
                Mauris accumsan tellus mi, vitae rutrum felis scelerisque.{" "}
              </p>
              <button onClick={handleSubmit} className="hero_button" aria-label="Reserve a table">
                Reserve a table
              </button>
            </div>
            <div className="hero-right">
              <img src={image} alt="Little Lemon Ingredients"/>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default CallToAction;