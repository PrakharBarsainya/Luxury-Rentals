import React from "react";

const About = () => {
  return (
    <>
      <section id="aboutUs_Mini">
        <div className="first_container">
          <div className="content">
          <h1>ABOUT US</h1>
          <p>
           Discover refined living where elegance meets comfort. Our residences are designed to offer a seamless blend of modern style, timeless architecture, and an elevated lifestyle experience.
          </p>
          <p>
           Every space is crafted with precision, featuring premium finishes and thoughtful details. Enjoy breathtaking surroundings, serene environments, and a perfect balance of luxury and functionality in every corner.
          </p>
          <p>
           Located in prestigious neighborhoods, our properties provide unmatched convenience and exclusivity. Experience a lifestyle that reflects sophistication, comfort, and effortless urban living.
          </p>
          <p>
           Step into homes that redefine luxury with style, privacy, and lasting value, offering you a living experience that is both exceptional and truly inspiring.
          </p>
          </div>
          <button>We strive to offer you best possible homes to stay!</button>
        </div>
        <div className="second_container">
          <div className="image_1">
            <img src="/people.jpg" alt="people" />
          </div>
          <div className="image_2">
            <img src="people2.jpg" alt="people2" />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
