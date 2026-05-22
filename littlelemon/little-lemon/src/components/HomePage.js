import React from 'react';
import { Link } from 'react-router-dom';
// Import your hero image from assets
import heroImage from '../assets/pasta.jpg'; 

function HomePage() {
  return (
    <div className="home-page">
      <section className="hero-section">
        <div className="hero-content">
          <h1>Little Lemon</h1>
          <h2>Chicago</h2>
          <p>We are a family-owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
          <Link to="/booking" className="cta-btn" aria-label="Navigate to booking page">Reserve a Table</Link>
        </div>
        <div className="hero-image-wrapper">
          {/* Reference the imported image variable */}
          <img src={heroImage} alt="Delicious Mediterranean food" />
        </div>
      </section>
    </div>
  );
}

export default HomePage;