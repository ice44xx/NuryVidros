import React from 'react';
import Home from '../../components/Home';
import Service from '../../components/Service';
import About from '../../components/About';
import Navbar from '../../components/Navbar';
import Benefits from '../../components/Benefits';
import Team from '../../components/Team';
import Redes from '../../components/Redes';
import Contact from '../../components/Contact';
import Footer from '../../components/Footer';

const LandingPage = () => {
  return (
    <>
      <Navbar />
      <Home />
      <Service />
      <About />
      <Benefits />
      <Team />
      <Contact />
      <Redes />
      <Footer />
    </>
  );
};

export default LandingPage;
