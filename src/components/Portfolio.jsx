import React from "react";
import "./Portfolio.css";

import img1 from "../assets/work1.png";
import img2 from "../assets/work2.png";
import img3 from "../assets/work3.png";
import img4 from "../assets/work4.png";

const Portfolio = () => {
  return (
    <section className="portfolio" id="portfolio">
      <div className="portfolio-container">
        <p className="portfolio-subtitle">★ Latest Work</p>

        <h2 className="portfolio-title">
          Unveiling Thoughtful and <br />
          <span>Impactful</span> Innovations
        </h2>

        <div className="portfolio-grid">
          <div className="portfolio-card">
            <img src={img1} alt="project" />
            <div className="portfolio-info">
              <h3>Infolio</h3>
              <p>Modern responsive website design.</p>
              <span className="tag">Branding</span>
            </div>
          </div>

          <div className="portfolio-card">
            <img src={img2} alt="project" />
            <div className="portfolio-info">
              <h3>Sad Shop</h3>
              <p>E-commerce product UI concept.</p>
              <span className="tag">UI/UX</span>
            </div>
          </div>

          <div className="portfolio-card">
            <img src={img3} alt="project" />
            <div className="portfolio-info">
              <h3>Inner</h3>
              <p>Creative brand display layout.</p>
              <span className="tag">UI/UX</span>
            </div>
          </div>

          <div className="portfolio-card">
            <img src={img4} alt="project" />
            <div className="portfolio-info">
              <h3>StudioGram</h3>
              <p>Creative studio landing page.</p>
              <span className="tag">UI/UX</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
