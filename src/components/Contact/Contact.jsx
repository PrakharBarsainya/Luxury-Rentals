import React from "react";
import { RiFacebookBoxLine } from "react-icons/ri";
import { Link } from "react-router-dom";
const Contact = () => {
  return (
    <>
      <section id="contact">
        <h1>CONTACT Us</h1>
        <p>Connect with us to explore exceptional properties and unparalleled
    living experiences. We are here to assist you with every step of your
    luxury journey.</p>
        <p>
          Whether you have questions, need guidance, or wish to schedule a private
    viewing, our dedicated team is ready to provide personalized support
    tailored to your needs.
        </p>
        <div className="container">
          <img src="/about.jpg" alt="about" />
          <div className="content">
              <h3>Let's connect</h3>
              <div>
                <p>Phone</p>
                <span>+991 1232 9089</span>
              </div>
              <div>
                <p>Email</p>
                <span>pkb@gmail.com</span>
              </div>
              <div>
                <p>Address</p>
                <span>House No.123 Sector A-1, Udaipur</span>
              </div>
              <ul>
                <Link to={"/facebook"} target="_blank">
                  <RiFacebookBoxLine />
                </Link>
                <Link to={"/facebook"} target="_blank">
                  <RiFacebookBoxLine />
                </Link>
                <Link to={"/facebook"} target="_blank">
                  <RiFacebookBoxLine />
                </Link>
              </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
