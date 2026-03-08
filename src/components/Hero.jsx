import React from "react";
import "./Hero.css";
import profile from "../assets/proflie.jpeg"; // add your image

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-container">
        {/* LEFT SIDE IMAGE */}
        <div className="hero-image">
          <img src={profile} alt="Keval UI UX Designer" />
        </div>

        {/* RIGHT SIDE CONTENT */}
        <div className="hero-content">
          <div className="badge">UI/UX</div>

          <h1>
            I'm Keval, Sr. UI/UX <br /> Designer
          </h1>

          <p className="subtitle">
            Specializing in user-centered design, intuitive interfaces, and
            meaningful digital experiences.
          </p>

          <div className="hero-buttons">
            <button className="primary-btn">Get Started</button>
            <button className="outline-btn">Design</button>
          </div>

          <p className="description">
            I'm a UI/UX Designer with over 8+ years industry experience. I'm
            currently working as a UI/UX designer at <span>ManageNinja</span>. I
            thrive on challenges and problem-solving.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
