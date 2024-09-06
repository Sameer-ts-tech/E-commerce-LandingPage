import React from 'react';
import './Promotions.css'; // Import CSS for Promotions

const Promotions = () => {
  return (
    <section className="promotions">
      <h2>Special Offers</h2>
      <div className="promotion-cards">
        <div className="promotion-card">
          <h3>Summer Sale</h3>
          <p>Up to 50% off on selected items.</p>
        </div>
        <div className="promotion-card">
          <h3>Buy One Get One</h3>
          <p>Buy one, get one free on select products.</p>
        </div>
        <div className="promotion-card">
          <h3>Free Shipping</h3>
          <p>On orders over ₹799.</p>
        </div>
      </div>
    </section>
  );
};

export default Promotions;
