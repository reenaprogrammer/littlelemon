import React from 'react';
import { useNavigate } from 'react-router-dom';

function CallToAction() {
  const navigate = useNavigate();
  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>
        <p>We are a family-owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
        <button onClick={() => navigate('/booking')} className="action-btn">Reserve a Table</button>
      </div>
    </section>
  );
}

export default CallToAction;