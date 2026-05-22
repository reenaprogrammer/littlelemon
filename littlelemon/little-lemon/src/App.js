import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import HomePage from './components/HomePage';
import BookingPage from './components/BookingPage';
import ConfirmationPage from './components/ConfirmationPage';
import './App.css';

// 1. Import the logo file from your src/assets directory
import logo from './assets/logo.png'; 

function App() {
  return (
    <>
      <header>
        <nav aria-label="Main Navigation">
          <div className="nav-container">
            {/* 2. Reference the imported asset variable using JSX curly braces */}
            <Link to="/">
              <img src={logo} alt="Little Lemon Logo" className="logo" />
            </Link>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/booking">Reserve a Table</Link></li>
            </ul>
          </div>
        </nav>
      </header>

      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/booking" element={<BookingPage />} />
          <Route path="/confirmation" element={<ConfirmationPage />} />
        </Routes>
      </main>

      <footer>
        <p>© 2026 Little Lemon Restaurant. All rights reserved.</p>
      </footer>
    </>
  );
}

export default App;