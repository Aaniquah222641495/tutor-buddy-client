import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './StudentNavbar.css';
import logo from '../../../assets/logo black.png';

const StudentNavbar = () => {
  // const [dropdownOpen, setDropdownOpen] = useState(false);

  // const handleDropdownToggle = () => {
  //   setDropdownOpen(!dropdownOpen);
  // };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/studentDashboard">
          <img src={logo} alt="MyTutoringApp Logo" style={{ width: '200px', height: 'auto' }} />
        </Link>
      </div>
      <ul>
        <li><Link to="/studentDashboard">Dashboard</Link></li>
        <li><Link to="/tutors">View Tutors</Link></li>
        <li><Link to="/subjects">View Subjects</Link></li>
      </ul>
      {/*<div className="user-profile" onClick={handleDropdownToggle}>*/}
      {/*  <img src="https://via.placeholder.com/150" alt="User" className="user-image" />*/}
      {/*  {dropdownOpen && (*/}
      {/*    <div className="dropdown-menu">*/}
      {/*      <button onClick={() => console.log('Logout clicked')}>Logout</button>*/}
      {/*    </div>*/}
      {/*  )}*/}
      {/*</div>*/}
    </nav>
  );
};

export default StudentNavbar;
