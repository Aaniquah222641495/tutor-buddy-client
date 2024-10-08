import React from 'react';

function ViewBookings() {
  const bookings = [
    {
      student: 'Amy',
      location: 'Room 1.1',
      date: '2022-01-01',
      time: '10:00 AM'
    },
    {
      student: 'Aaniquah',
      location: 'Room 2.10',
      date: '2022-01-02',
      time: '11:00 AM'
    }
  ];

  return (
    <div className="view-bookings">
      <h3>View Bookings</h3>
      <table>
        <thead>
          <tr>
            <th>Student</th>
            <th>Location</th>
            <th>Date</th>
            <th>Time</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {bookings.map((booking, index) => (
            <tr key={index}>
              <td>{booking.student}</td>
              <td>{booking.location}</td>
              <td>{booking.date}</td>
              <td>{booking.time}</td>
              <td>
                <button>Edit</button>
                <button>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ViewBookings;

