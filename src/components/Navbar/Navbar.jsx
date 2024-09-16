import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const isLoggedIn = localStorage.getItem('loggedIn') === 'true';

  return (
    <nav className="navbar">
      
      <Link to="/" className="navbar-logo">College Management System</Link>
      <div className="nav-links">
        {!isLoggedIn && (
          <>
            <Link to="/login">Login</Link>
          </>
        )}
        {isLoggedIn && (
          <>
            <button onClick={() => localStorage.removeItem('loggedIn')} className="logout-btn">Logout</button>
          </>
        )}
        
      </div>
    </nav>
  );
};

export default Navbar;
