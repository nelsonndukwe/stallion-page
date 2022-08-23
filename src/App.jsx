import React from 'react';
import './App.css';
import Header from './components/header/Header';
import About from './components/about/About';
import Experince from './components/experince/Experince';
import Navbar from './components/nav/Navbar';
import Services from './components/services/Services'  
import Portfolio from './components/portfolio/Portfolio'
import Testimonail from './components/testionial/Testimonail'
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';


function App() {
  return (
    <div>

    <Header />
    <Navbar />
    <About />
    <Experince />
    <Services />
    <Portfolio />
    <Testimonail />
    <Contact />
    <Footer />


    </div>
  );
}

export default App;
