import React from 'react';
import Profile from './profile';
import UpcomingBookings from './UpcomingBookings';
import ViewBookings from './ViewBookings';
import TutorNavbar from '../../Common/Navbar/TutorNavbar';
import './viewBookings.css'; // Ensure this path matches your project structure

function Dashboard() {
  return (
    <div className="tutor-dashboard">
      <TutorNavbar />
      <main className="tutor-dashboard-main">
        <aside className="tutor-dashboard-aside">
          <Profile />
        </aside>
        <section className="tutor-dashboard-section">
          <UpcomingBookings />
          <ViewBookings />
        </section>
      </main>
    </div>
  );
}

export default Dashboard;
