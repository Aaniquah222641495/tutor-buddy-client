import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './tutorNavbar.css';
import logo from '../../../assets/adminLogo.png';

const TutorNavbar = () => {

  return (
    <nav className="navbar">
      <div className="navbar-logo">
         <img src={logo} alt="MyTutoringApp Logo" style={{ width: '200px', height: 'auto' }} />
      </div>
      <ul>
        <li><Link to="/tutorDashboard">Dashboard</Link></li>
        <li><Link to="/viewStudents">View Students</Link></li>
        <li><Link to="/">Logout</Link></li>
      </ul>
    </nav>
  );
};

export default TutorNavbar;
