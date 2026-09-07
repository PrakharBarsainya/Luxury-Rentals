import React from "react";
import AboutComponentMini from "../../SubComponents/About";
const AboutUs = () => {
  return (
    <section id="aboutPage" className="page">
      <div className="container">
        <img src="/about.jpg" alt="about" />
        <div className="content">
          <h3>Your peace of mind, our priority!</h3>
          <p>Experience unparalleled comfort and security with our curated properties,
        where every detail is designed to provide a seamless and stress-free living experience.</p>
          <p>From elegant interiors to prime locations, our portfolio reflects a commitment
        to excellence, ensuring that each home offers both sophistication and tranquility.</p>
          <p>Whether you are seeking a serene retreat or a vibrant lifestyle, we provide
        exceptional spaces that elevate your daily living and inspire confidence in every choice.</p>
        </div>
      </div>
      <AboutComponentMini />
    </section>
  );
};

export default AboutUs;
