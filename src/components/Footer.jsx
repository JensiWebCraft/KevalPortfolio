import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <h2 className="footer-logo">Keval</h2>

        <div className="footer-links">
          <span>Home</span>
          <span>About</span>
          <span>Portfolio</span>
          <span>Contact</span>
        </div>

        <div className="footer-social">
          <span>🌐</span>
          <span>💼</span>
          <span>📷</span>
        </div>
      </div>

      <div className="footer-bottom">© 2026 Keval UI/UX Designer</div>
    </footer>
  );
};

export default Footer;
