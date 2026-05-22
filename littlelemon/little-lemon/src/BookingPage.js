import React from 'react';
import BookingForm from './BookingForm';

// Receive props from App.js/Main and route them down to BookingForm
function BookingPage({ availableTimes, dispatch }) {
  return (
    <main style={{ padding: '40px 20px', textAlign: 'center' }}>
      <h1>Reserve a Table</h1>
      <p>Please select a date to view our available table slots.</p>
      
      {/* Passing state and dispatch hooks down via props */}
      <BookingForm availableTimes={availableTimes} dispatch={dispatch} />
    </main>
  );
}

export default BookingPage;