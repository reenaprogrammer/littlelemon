import React, { useState } from 'react';

function BookingForm({ availableTimes, dispatch, submitForm }) {
  // Controlled form states
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState('Birthday');
  
  // Validation error tracking states
  const [errors, setErrors] = useState({});

  // Client-side instant validation check
  const validateForm = () => {
    const newErrors = {};
    const today = new Date().toISOString().split('T')[0];

    if (!date) {
      newErrors.date = 'Please select a reservation date.';
    } else if (date < today) {
      newErrors.date = 'Reservation date cannot be in the past.';
    }

    if (!time) {
      newErrors.time = 'Please select a dining time slot.';
    }

    if (!guests || guests < 1) {
      newErrors.guests = 'At least 1 guest is required to book.';
    } else if (guests > 10) {
      newErrors.guests = 'For parties larger than 10, please contact us directly.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // Returns true if no bugs/errors
  };

  const handleDateChange = (e) => {
    const selectedDate = e.target.value;
    setDate(selectedDate);
    // Dispatch action to update available times based on selected date
    dispatch({ type: 'UPDATE_TIMES', payload: selectedDate });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      submitForm({ date, time, guests, occasion });
    }
  };

  return (
    <form onSubmit={handleSubmit} noValidate aria-label="Table Reservation Form">
      {/* Date Field */}
      <div className="form-group">
        <label htmlFor="res-date">Choose Date *</label>
        <input 
          type="date" 
          id="res-date" 
          value={date} 
          onChange={handleDateChange}
          aria-required="true"
          aria-invalid={!!errors.date}
          aria-describedby="date-error"
          className={errors.date ? 'input-error' : ''}
        />
        {errors.date && <span id="date-error" className="error-message" role="alert">{errors.date}</span>}
      </div>

      {/* Time Field */}
      <div className="form-group">
        <label htmlFor="res-time">Choose Time *</label>
        <select 
          id="res-time" 
          value={time} 
          onChange={(e) => setTime(e.target.value)}
          aria-required="true"
          aria-invalid={!!errors.time}
          aria-describedby="time-error"
          className={errors.time ? 'input-error' : ''}
        >
          <option value="">-- Select a Time Slot --</option>
          {availableTimes.map((slot) => (
            <option key={slot} value={slot}>{slot}</option>
          ))}
        </select>
        {errors.time && <span id="time-error" className="error-message" role="alert">{errors.time}</span>}
      </div>

      {/* Number of Guests Field */}
      <div className="form-group">
        <label htmlFor="guests">Number of Guests *</label>
        <input 
          type="number" 
          placeholder="1" 
          min="1" 
          max="10" 
          id="guests" 
          value={guests}
          onChange={(e) => setGuests(parseInt(e.target.value, 10) || 0)}
          aria-required="true"
          aria-invalid={!!errors.guests}
          aria-describedby="guests-error"
          className={errors.guests ? 'input-error' : ''}
        />
        {errors.guests && <span id="guests-error" className="error-message" role="alert">{errors.guests}</span>}
      </div>

      {/* Occasion Field */}
      <div className="form-group">
        <label htmlFor="occasion">Occasion</label>
        <select 
          id="occasion" 
          value={occasion} 
          onChange={(e) => setOccasion(e.target.value)}
        >
          <option value="Birthday">Birthday</option>
          {/* Note: escaping double quotes safely within JSX values */}
          <option value="Anniversary">Anniversary</option>
          <option value="Engagement">Engagement</option>
          <option value="Business">Business Dinner</option>
        </select>
      </div>

      {/* Submit Action */}
      <button 
        type="submit" 
        className="submit-btn"
        aria-label="Click to reserve table"
      >
        Make Your Reservation
      </button>
    </form>
  );
}

export default BookingForm;