import React from 'react';
import { useLocation, Link } from 'react-router-dom';

function ConfirmationPage() {
  const location = useLocation();
  const details = location.state?.bookingDetails;

  return (
    <div className="confirmation-page" style={{ textAlign: 'center', padding: '3rem 1rem' }}>
      <div className="success-icon" aria-hidden="true" style={{ fontSize: '4rem', color: '#495E57' }}>✓</div>
      <h1>Reservation Confirmed!</h1>
      <p>Thank you for choosing Little Lemon. Your booking details have been verified.</p>
      
      {details ? (
        <div className="details-card" style={{ background: '#EDEFEE', padding: '1.5rem', borderRadius: '8px', maxWidth: '400px', margin: '2rem auto' }}>
          <h3>Booking Summary</h3>
          <p><strong>Date:</strong> {details.date}</p>
          <p><strong>Time:</strong> {details.time}</p>
          <p><strong>Guests:</strong> {details.guests} People</p>
          <p><strong>Occasion:</strong> {details.occasion}</p>
        </div>
      ) : (
        <p>Your table details are saved under your contact information.</p>
      )}

      <Link to="/" className="cta-btn" style={{ textDecoration: 'none', display: 'inline-block', marginTop: '1rem' }}>Return Home</Link>
    </div>
  );
}

export default ConfirmationPage;