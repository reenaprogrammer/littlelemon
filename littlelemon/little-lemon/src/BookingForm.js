import React, { useState } from "react";

export default function BookingForm(props) {
  // 1. LOCAL STATE TRACKING FOR CONTROLLED FORM INPUTS
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState("Birthday");

  // Local fallback history array if you want to store submissions inside this component
  const [localBookings, setLocalBookings] = useState([
    { date: "2026-05-22", time: "18:00", guests: 2, occasion: "Anniversary" },
    { date: "2026-05-23", time: "20:00", guests: 4, occasion: "Birthday" }
  ]);

  // 2. INTERCEPT DATE CHANGES & TRIGGER API LOOKUP
  const handleDateChange = (e) => {
    const selectedDate = e.target.value;
    setDate(selectedDate);
    
    if (props.dispatch) {
      props.dispatch({ type: "UPDATE_TIMES", payload: selectedDate });
    }
  };

  // 3. HANDLE REGISTRATION SUBMISSION
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Create a new data snapshot object from the current form inputs
    const newReservation = { date, time, guests, occasion };

    // Append the new object to our data state array log
    setLocalBookings([...localBookings, newReservation]);

    alert(`Reservation confirmed for ${guests} guests on ${date} at ${time}!`);
    
    // Clear the selections out of the form inputs
    setTime("");
  };

  return (
    <div style={{ maxWidth: "600px", margin: "0 auto", padding: "20px" }}>
      
      {/* THE FORM INPUT MODULE */}
      <form 
        onSubmit={handleSubmit}
        style={{ 
          display: "grid", 
          gap: "20px", 
          padding: "20px",
          backgroundColor: "#EDEFEE",
          borderRadius: "16px",
          boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
          marginBottom: "40px"
        }}
      >
        <h3 style={{ color: "#495E57", margin: "0 0 10px 0", textAlign: "center" }}>Book a Table</h3>

        <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
          <label htmlFor="res-date" style={{ fontWeight: "600", color: "#333333" }}>Choose date</label>
          <input 
            type="date" 
            id="res-date" 
            value={date} 
            onChange={handleDateChange} 
            required
            style={{ padding: "10px", borderRadius: "8px", border: "1px solid #CCCCCC" }}
          />
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
          <label htmlFor="res-time" style={{ fontWeight: "600", color: "#333333" }}>Choose time</label>
          <select 
            id="res-time" 
            value={time} 
            onChange={(e) => setTime(e.target.value)}
            required
            style={{ padding: "10px", borderRadius: "8px", border: "1px solid #CCCCCC", backgroundColor: "#FFFFFF" }}
          >
            <option value="" disabled>Select a time slot</option>
            {props.availableTimes && props.availableTimes.map((timeSlot) => (
              <option key={timeSlot} value={timeSlot}>
                {timeSlot}
              </option>
            ))}
          </select>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
          <label htmlFor="guests" style={{ fontWeight: "600", color: "#333333" }}>Number of guests</label>
          <input 
            type="number" 
            placeholder="1" 
            min="1" 
            max="10" 
            id="guests" 
            value={guests}
            onChange={(e) => setGuests(e.target.value)}
            required
            style={{ padding: "10px", borderRadius: "8px", border: "1px solid #CCCCCC" }}
          />
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
          <label htmlFor="occasion" style={{ fontWeight: "600", color: "#333333" }}>Occasion</label>
          <select 
            id="occasion" 
            value={occasion}
            onChange={(e) => setOccasion(e.target.value)}
            style={{ padding: "10px", borderRadius: "8px", border: "1px solid #CCCCCC", backgroundColor: "#FFFFFF" }}
          >
            <option value="Birthday">Birthday</option>
            <option value="Anniversary">Anniversary</option>
          </select>
        </div>

        <button 
          type="submit" 
          style={{ 
            backgroundColor: "#F4CE14", 
            color: "#333333", 
            fontWeight: "700", 
            fontSize: "1rem",
            padding: "12px", 
            border: "none", 
            borderRadius: "8px", 
            cursor: "pointer",
            marginTop: "10px"
          }}
        >
          Make Your Reservation
        </button>
      </form>

      {/* --- LIVE RESERVATION SUMMARY LOG TABLE --- */}
      <div style={{ overflowX: "auto" }}>
        <h4 style={{ color: "#495E57", marginBottom: "15px" }}>Current Bookings Registry</h4>
        <table style={{ width: "100%", borderCollapse: "collapse", textAlign: "left", fontSize: "0.95rem" }}>
          <thead>
            <tr style={{ backgroundColor: "#495E57", color: "#FFFFFF" }}>
              <th style={{ padding: "12px 10px" }}>Date</th>
              <th style={{ padding: "12px 10px" }}>Time</th>
              <th style={{ padding: "12px 10px" }}>Guests</th>
              <th style={{ padding: "12px 10px" }}>Occasion</th>
            </tr>
          </thead>
          <tbody>
            {localBookings.map((booking, index) => (
              <tr 
                key={index} 
                style={{ 
                  borderBottom: "1px solid #E0E0E0",
                  backgroundColor: index % 2 === 0 ? "#FFFFFF" : "#F9F9F9" 
                }}
              >
                <td style={{ padding: "10px" }}>{booking.date || "N/A"}</td>
                <td style={{ padding: "10px", fontWeight: "600" }}>{booking.time || "Pending"}</td>
                <td style={{ padding: "10px" }}>{booking.guests} pax</td>
                <td style={{ padding: "10px" }}>
                  <span style={{ 
                    backgroundColor: booking.occasion === "Birthday" ? "#FFEAA7" : "#FAB1A0",
                    padding: "3px 8px",
                    borderRadius: "4px",
                    fontSize: "0.85rem"
                  }}>
                    {booking.occasion}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </div>
  );
}