import React, { useReducer } from 'react';
import { useNavigate } from 'react-router-dom';
import BookingForm from './BookingForm';

// Reducer logic to update available times based on the chosen date
export function timesReducer(state, action) {
  switch (action.type) {
    case 'UPDATE_TIMES':
      // In a live app, this fetches from an API. Returning static slots for validation.
      if (action.payload === '2026-12-25') {
        return ['17:00', '18:00']; // Holiday schedule example
      }
      return ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
    default:
      return state;
  }
}

// Initial state initialization function
export function initializeTimes() {
  return ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
}

function BookingPage() {
  const [availableTimes, dispatch] = useReducer(timesReducer, [], initializeTimes);
  const navigate = useNavigate();

  // Function to handle form submission and navigate to confirmation
  const submitForm = (formData) => {
    // Simulating API verification success
    console.log("Form Data Submitted Successfully:", formData);
    navigate('/confirmation', { state: { bookingDetails: formData } });
  };

  return (
    <div className="booking-page">
      <section className="booking-hero">
        <h1>Reserve a Table</h1>
        <p>Please fill out the form below to secure your dining experience at Little Lemon.</p>
      </section>
      
      <BookingForm 
        availableTimes={availableTimes} 
        dispatch={dispatch} 
        submitForm={submitForm} 
      />
    </div>
  );
}

export default BookingPage;