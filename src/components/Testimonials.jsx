import React from 'react';
import './Testimonials.css'; // Import CSS for Testimonials

const testimonials = [
  { id: 1, name: 'Sameer', text: 'Amazing products and great service!' },
  { id: 2, name: 'Tanisha', text: 'I love shopping here. The deals are unbeatable!' },
  { id: 3, name: 'Tanmeer', text: 'Fast delivery and excellent customer support.' },
];

const Testimonials = () => {
  return (
    <section className="testimonials">
      <h2>What Our Customers Say</h2>
      <div className="testimonials-grid">
        {testimonials.map(testimonial => (
          <div className="testimonial-card" key={testimonial.id}>
            <p>"{testimonial.text}"</p>
            <h4>- {testimonial.name}</h4>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
