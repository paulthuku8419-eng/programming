import React from "react";
import Navbar from "./components/layout/navbar.jsx";
import Hero from "./components/sections/hero.jsx";
import About from "./components/sections/about.jsx";
import Services from "./components/sections/services.jsx";
import Projects from './components/sections/projects.jsx';
import Testimonials from './components/sections/testimonials.jsx';
import CTA from './components/sections/cta.jsx';
import Footer from './components/sections/footer.jsx';
export default function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Projects />
      <Testimonials />
      <CTA />
      <Footer/>
    </div>
  );
}
