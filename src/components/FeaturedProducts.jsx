import React from 'react';
import Slider from 'react-slick';
import './FeaturedProducts.css'; // Import CSS for styling

// Product data for each row
const row1Products = [
  { id: 1, name: 'Purple T-Shirt', price: '₹499', image: '/images/product1.jpg.jpg' },
  { id: 2, name: 'Red Purse', price: '₹1299', image: '/images/product2.jpg.jpg' },
  { id: 3, name: 'Cobalt Blue T-Shirt', price: '₹599', image: '/images/product4.jpg.jpg' },
  { id: 4, name: 'Gold Plated Necklace', price: '₹2999', image: '/images/product3.jpg.jpg' },
];

const row2Products = [
  { id: 5, name: 'Galaxy Earings', price: '₹399', image: '/images/product5.jpg.jpg' },
  { id: 6, name: 'Anchor Bracelet Mens', price: '₹299', image: '/images/product6.jpg.jpg' },
  { id: 7, name: 'Wireless-headphones', price: '₹2199', image: '/images/product7.jpg.jpg' },
  { id: 8, name: 'Elephant Earings', price: '₹499', image: '/images/product8.jpg.jpg' },
];

const row3Products = [
  { id: 9, name: 'Womens Boho Dress', price: '₹1499', image: '/images/product9.jpg.jpg' },
  { id: 10, name: 'Necklace Detail', price: '₹3199', image: '/images/product10.jpg.jpg' },
  { id: 11, name: 'Black Sneakers with White Sole', price: '₹2599', image: '/images/product11.jpg.jpg' },
  { id: 12, name: 'Black Over the Shoulder Bag', price: '₹3299', image: '/images/product12.jpg.jpg' },
];

const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true, // Enable autoplay
  autoplaySpeed: 3000, // Set autoplay speed (3 seconds)
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const FeaturedProducts = () => {
  return (
    <section className="featured-products">
      <h2>Featured Products</h2>

      {/* First Row */}
      <div className="product-row">
        <Slider {...sliderSettings}>
          {row1Products.map(product => (
            <div className="product-card" key={product.id}>
              <img src={product.image} alt={product.name} />
              <h3>{product.name}</h3>
              <p>{product.price}</p>
            </div>
          ))}
        </Slider>
      </div>

      {/* Second Row */}
      <div className="product-row">
        <Slider {...sliderSettings}>
          {row2Products.map(product => (
            <div className="product-card" key={product.id}>
              <img src={product.image} alt={product.name} />
              <h3>{product.name}</h3>
              <p>{product.price}</p>
            </div>
          ))}
        </Slider>
      </div>

      {/* Third Row */}
      <div className="product-row">
        <Slider {...sliderSettings}>
          {row3Products.map(product => (
            <div className="product-card" key={product.id}>
              <img src={product.image} alt={product.name} />
              <h3>{product.name}</h3>
              <p>{product.price}</p>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default FeaturedProducts;
