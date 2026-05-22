import React, { useReducer } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import './App.css'; 
import BookingPage from './BookingPage';
import ConfirmedBooking from './ConfirmedBooking';

// =========================================================
// 1. DYNAMIC API-DRIVEN STATE REDUCER ENGINE
// =========================================================

/**
 * Initializes the available reservation time slots state.
 * Targets the global window.fetchAPI exposed by index.html script wrapper.
 */
export function initializeTimes() {
  const today = new Date();
  if (window.fetchAPI) {
    return window.fetchAPI(today);
  }
  // Fallback structural safety layout values if network execution fails
  return ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
}

/**
 * Reducer function managing the state mutations for available booking slots.
 */
export function updateTimes(state, action) {
  switch (action.type) {
    case 'UPDATE_TIMES':
      // action.payload contains the string date selected by user (e.g. "2026-05-22")
      const selectedDate = new Date(action.payload);
      
      if (window.fetchAPI) {
        return window.fetchAPI(selectedDate);
      }
      return state;
      
    default:
      return state;
  }
}

// =========================================================
// 2. MAIN APPLICATION COMPONENT ENTRY POINT
// =========================================================

function App() {
  // Setup the central state tree reducer for booking slot options
  const [availableTimes, dispatch] = useReducer(updateTimes, null, initializeTimes);
  
  // Initialize the router engine navigation hook
  const navigate = useNavigate();

  /**
   * Submits collected form dataset directly into the Coursera validation API script environment.
   * Redirects rendering stack dynamically upon verified server response output status.
   */
  const submitForm = (formData) => {
    if (window.submitAPI) {
      const isSuccess = window.submitAPI(formData);
      
      if (isSuccess) {
        navigate('/confirmed');
      }
    } else {
      // Emergency simulation tracking console handler if connection drops out
      console.warn("External data hook unavailable. Proceeding to fallback submission template view.");
      navigate('/confirmed');
    }
  };

  return (
    <div className="app-container" style={{ fontFamily: 'Karla, sans-serif', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      
      {/* GLOBAL BRAND NAVIGATION BAR HEADER */}
      <nav style={{ backgroundColor: '#FFFFFF', padding: '15px 20px', boxShadow: '0 2px 4px rgba(0,0,0,0.05)' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span style={{ color: '#495E57', fontWeight: '800', fontSize: '1.4rem', letterSpacing: '1px' }}>LITTLE LEMON</span>
          <ul style={{ display: 'flex', listStyle: 'none', gap: '25px', margin: 0, padding: 0 }}>
            <li><span style={{ color: '#333333', fontWeight: '600', cursor: 'pointer' }} onClick={() => navigate('/')}>Home</span></li>
            <li><span style={{ color: '#495E57', fontWeight: '700', backgroundColor: '#F4CE14', padding: '6px 14px', borderRadius: '8px', cursor: 'pointer' }} onClick={() => navigate('/')}>Reservations</span></li>
          </ul>
        </div>
      </nav>

      {/* HERO HERO BRAND DISPLAY BANNER */}
      <header style={{ backgroundColor: '#495E57', padding: '40px 20px', color: '#EDEFEE' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
          <h1 style={{ color: '#F4CE14', fontSize: '2.5rem', margin: '0 0 10px 0' }}>Little Lemon</h1>
          <h2 style={{ fontSize: '1.5rem', margin: '0 0 15px 0', fontWeight: '400' }}>Chicago</h2>
          <p style={{ maxWidth: '600px', margin: '0 auto', fontSize: '1.1rem', lineHeight: '1.4' }}>
            Experience Mediterranean dining matching traditional recipes with modern twist elements. Use our automated scheduler system below to lock down your table placement.
          </p>
        </div>
      </header>

      {/* VIEWPORT CONTROLLER ROUTING FRAMEWORK CONTAINER */}
      <main style={{ flex: '1 0 auto' }}>
        <Routes>
          {/* Main Booking Target Area Path */}
          <Route 
            path="/" 
            element={
              <BookingPage 
                availableTimes={availableTimes} 
                dispatch={dispatch} 
                submitForm={submitForm} 
              />
            } 
          />
          
          {/* Success Validation Landing Page View */}
          <Route path="/confirmed" element={<ConfirmedBooking />} />
        </Routes>
      </main>

      {/* FOOTER MODULE BRAND WRAPPER */}
      <footer style={{ backgroundColor: '#333333', color: '#EDEFEE', padding: '30px 20px', textAlign: 'center', fontSize: '0.9rem', marginTop: '40px' }}>
        <p>© 2026 Little Lemon Restaurant. All rights reserved.</p>
      </footer>

    </div>
  );
}

export default App;