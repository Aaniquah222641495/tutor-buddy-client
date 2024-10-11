import React from 'react';
import Profile from './profile';
import SessionsOverview from './SessionsOverview';
import UpcomingBookings from './UpcomingBookings';
import Availability from './Availibility';
import ViewBookings from './ViewBookings';

function Dashboard() {
  return (
    <div className="dashboard">
      <header>
        <div className="logo">Logo</div>
        <nav>
          <a href="#">Home</a>
          <a href="#">Profile</a>
          <a href="#">View Bookings</a>
          <a href="#">Update Availability</a>
          <a href="#">View Students</a>
        </nav>
      </header>
      <main>
        <aside>
          <Profile />
          <SessionsOverview />
        </aside>
        <section>
          <UpcomingBookings />
          <Availability />
          <ViewBookings />
        </section>
      </main>
    </div>
  );
}

export default Dashboard;