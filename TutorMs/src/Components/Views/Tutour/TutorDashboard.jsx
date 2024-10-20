import React from 'react';
import Profile from './profile';
import UpcomingBookings from './UpcomingBookings';
import ViewBookings from './ViewBookings';
import TutorNavbar from '../../Common/Navbar/TutorNavbar';
import './viewBookings.css';

function Dashboard() {
  return (
    <div className="dashboard">
      <TutorNavbar/>
      <main>
        <aside>
          <Profile />
        </aside>
        <section>
          <UpcomingBookings />
          <ViewBookings />
        </section>
      </main>
    </div>
  );
}

export default Dashboard;