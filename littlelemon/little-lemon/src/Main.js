import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Homepage from './Homepage';
import BookingPage from './BookingPage';

function Main() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/booking" element={<BookingPage />} />
        
        {/* Temporary safe placeholders so your page never goes blank */}
        <Route path="/about" element={<div className="page-padding"><h2>About Us</h2><p>Content coming soon.</p></div>} />
        <Route path="/menu" element={<div className="page-padding"><h2>Our Menu</h2><p>Content coming soon.</p></div>} />
        <Route path="/order" element={<div className="page-padding"><h2>Order Online</h2><p>Content coming soon.</p></div>} />
        <Route path="/login" element={<div className="page-padding"><h2>Login</h2><p>Content coming soon.</p></div>} />
      </Routes>
    </main>
  );
}

export default Main;