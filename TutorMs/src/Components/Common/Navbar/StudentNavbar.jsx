// src/StudentNavbar.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import './StudentNavbar.css';

const StudentNavbar = () => {
  return (
    <nav className="navbar">
      <ul >
        <li><Link to="/studentDashboard">Dashboard</Link></li>
        <li><Link to="/tutors">View Tutors</Link></li>
        <li><Link to="/subjects">View Subjects</Link></li>
      </ul>
    </nav>
  );
};


export default StudentNavbar;