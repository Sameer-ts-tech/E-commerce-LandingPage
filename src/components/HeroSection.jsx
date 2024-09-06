import React, { useState, useEffect } from 'react';
import './HeroSection.css'; // Import the updated CSS

const images = [
  '/images/product1.jpg.jpg',
  '/images/product2.jpg.jpg',
  '/images/product3.jpg.jpg',
  '/images/product4.jpg.jpg',
  '/images/product5.jpg.jpg',
  '/images/product6.jpg.jpg',
  '/images/product7.jpg.jpg',
  // Add more images as needed
];

const HeroSection = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  return (
    <section className="hero-section" style={{ backgroundImage: `url(${images[currentImageIndex]})` }}>
      <div className="hero-overlay"></div>
      <div className="hero-text">
        <h1>Amazing Products</h1>
        <p>Discover the best products for you. Shop now and enjoy exclusive offers!</p>
      </div>
    </section>
  );
};

export default HeroSection;
