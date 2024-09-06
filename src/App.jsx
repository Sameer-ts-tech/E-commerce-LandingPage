import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import FeaturedProducts from './components/FeaturedProducts';
import Promotions from './components/Promotions';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import './index.css'; // Global styles

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="main-content">
        <HeroSection />
        <FeaturedProducts />
        <Promotions />
        <Testimonials />
        <Footer />
      </div>
    </div>
  );
}

export default App;
