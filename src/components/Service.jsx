import React from "react";
import "./Service.css";

const Service = () => {
  return (
    <section className="service" id="service">
      <div className="service-container">
        <p className="service-subtitle">★ My Service</p>

        <h2 className="service-title">
          Innovative <span>Solutions</span> <br />
          Tailored to Your Vision
        </h2>

        <div className="service-grid">
          <div className="service-card">
            <div className="icon">🖥</div>
            <h3>Website Design</h3>
            <p>
              Lorem ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>

          <div className="service-card">
            <div className="icon">📱</div>
            <h3>Application Design</h3>
            <p>
              Lorem ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>

          <div className="service-card">
            <div className="icon">🎨</div>
            <h3>Graphic Design</h3>
            <p>
              Lorem ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>

          <div className="service-card">
            <div className="icon">🧩</div>
            <h3>Logo Design</h3>
            <p>
              Lorem ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Service;
