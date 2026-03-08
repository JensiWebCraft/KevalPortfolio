import React from "react";
import "./Testimonial.css";

const Testimonial = () => {
  return (
    <section className="testimonial" id="testimonial">
      <div className="testimonial-container">
        {/* LEFT SIDE */}
        <div className="testimonial-left">
          <p className="testimonial-subtitle">★ Reviews</p>

          <h2>
            See their <span>growth</span> <br />
            and satisfaction <br />
            with our solutions.
          </h2>
        </div>

        {/* RIGHT SIDE */}
        <div className="testimonial-right">
          <div className="testimonial-card">
            <h3>The best decision we made!</h3>
            <p>
              Their solution transformed our workflow and boosted our engagement
              significantly.
            </p>
            <div className="user">
              <img src="https://i.pravatar.cc/40?img=1" alt="user" />
              <div>
                <h4>David Carter</h4>
                <span>Founder of Startup</span>
              </div>
            </div>
          </div>

          <div className="testimonial-card">
            <h3>I'm thrilled with the results!</h3>
            <p>
              Professional team and outstanding design quality. Highly
              recommended.
            </p>
            <div className="user">
              <img src="https://i.pravatar.cc/40?img=2" alt="user" />
              <div>
                <h4>Ritika</h4>
                <span>Product Manager</span>
              </div>
            </div>
          </div>

          <div className="testimonial-card">
            <h3>Amazing experience overall!</h3>
            <p>
              From concept to delivery, everything was smooth and perfectly
              executed.
            </p>
            <div className="user">
              <img src="https://i.pravatar.cc/40?img=3" alt="user" />
              <div>
                <h4>Emma</h4>
                <span>Creative Director</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
