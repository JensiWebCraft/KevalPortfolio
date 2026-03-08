import React from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import Hero from "./components/Hero";
import Service from "./components/Service";
import Portfolio from "./components/portfolio";
import Testimonial from "./components/Testimonial";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Service />
      <Portfolio />
      <Testimonial />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
