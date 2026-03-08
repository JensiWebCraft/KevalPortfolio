import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <div className="contact-container">
        <h2 className="contact-title">
          LET'S <br />
          GET IN <span>TOUCH</span>
        </h2>

        <form className="contact-form">
          <div className="input-row">
            <input type="text" placeholder="Full Name" />
            <input type="email" placeholder="Email" />
          </div>

          <textarea placeholder="Message"></textarea>

          <button type="submit" className="contact-btn">
            Submit Now
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
