import React from 'react';

export default function ConfirmedBooking() {
  return (
    <div style={{ 
      maxWidth: '600px', 
      margin: '60px auto', 
      padding: '40px 20px', 
      textAlign: 'center',
      backgroundColor: '#EDEFEE',
      borderRadius: '16px',
      boxShadow: '0 4px 12px rgba(0,0,0,0.05)'
    }}>
      <div style={{ fontSize: '4rem', color: '#495E57', marginBottom: '20px' }}>✓</div>
      <h1 style={{ color: '#F4CE14', backgroundColor: '#495E57', padding: '15px', borderRadius: '8px', margin: '0 0 20px 0' }}>
        Booking Confirmed!
      </h1>
      <h2 style={{ color: '#333333', fontSize: '1.5rem', marginBottom: '15px' }}>
        Thank you for choosing Little Lemon!
      </h2>
      <p style={{ color: '#495E57', fontSize: '1.1rem', lineHeight: '1.5', maxWidth: '450px', margin: '0 auto' }}>
        Your table reservation has been successfully locked into our registry. A confirmation email with your booking pass details has been dispatched to your inbox.
      </p>
      <button 
        onClick={() => window.location.href = '/'}
        style={{
          marginTop: '30px',
          backgroundColor: '#F4CE14',
          color: '#333333',
          border: 'none',
          padding: '12px 30px',
          fontWeight: '700',
          borderRadius: '8px',
          cursor: 'pointer'
        }}
      >
        Return to Home
      </button>
    </div>
  );
}