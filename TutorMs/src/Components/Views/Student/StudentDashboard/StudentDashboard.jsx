import React from 'react';
import './Dashboard.css';
import StudentNavbar from '../../../Common/Navbar/StudentNavbar';

const Dashboard = () => {
  return (
    <div className="dashboard">

      <StudentNavbar />
      
      <header className="dashboard-header">
        <h1>Student Dashboard</h1>
        <div className="search-bar">
          <input type="text" placeholder="Search" />
          <button>Search</button>
        </div>
      </header>
      
      <section className="profile-section">
        <div className="profile-card">
          <div className="profile-image">
            <img src="https://via.placeholder.com/150" alt="User" />
          </div>
          <div className="profile-details">
            <h2>User Name</h2>
            <p>Contact Information</p>
            <button>Edit Profile</button>
          </div>
        </div>
      </section>

      <section className="tutors-section">
        <h2>Available Tutors</h2>
        <table>
          <thead>
            <tr>
              <th>Tutor Name</th>
              <th>Subject</th>
              <th>Availability</th>
              <th>Rating</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Tutor 1</td>
              <td>Subject 1</td>
              <td>Availability 1</td>
              <td>Rating 1</td>
            </tr>
            <tr>
              <td>Tutor 2</td>
              <td>Subject 2</td>
              <td>Availability 2</td>
              <td>Rating 2</td>
            </tr>
          </tbody>
        </table>

        <button className="subject-button" onClick={() => window.location.href='/subjects'}>View Subjects</button>

      </section>

      <section className="sessions-section">
        <h2>Upcoming Sessions</h2>
        <div className="session-card">
          <p>Date: 01/01/2022</p>
          <p>Time: 10:00 AM - 11:00 AM</p>
          <p>Tutor: John Doe</p>
          <p>Location: Room 101</p>
          <button>Cancel Booking</button>
        </div>
        <div className="session-card">
          <p>Date: 01/02/2022</p>
          <p>Time: 2:00 PM - 3:00 PM</p>
          <p>Tutor: Jane Smith</p>
          <p>Location: Room 202</p>
          <button>Cancel Booking</button>
        </div>
      </section>

      <section className="chat-section">
        <h2>AI Chatbot</h2>
        <button>Chat Now</button>
      </section>
    </div>
  );
};

export default Dashboard;
