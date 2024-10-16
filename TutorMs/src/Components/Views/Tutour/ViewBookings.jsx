import React, { useState, useEffect } from 'react';
import { BookingApi } from 'student_tutor_booking_management_system';

function viewBookings() {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBookings = () => {
      const bookingApi = new BookingApi();
      bookingApi.getAllBookings((error, data, response) => {
        if (error) {
          console.error('Error fetching bookings:', error);
          setError('Failed to fetch bookings');
        } else {
          console.log('Fetched data:', data);
          if (Array.isArray(data)) {
            setBookings(data);  // Ensure data is an array before setting it
          } else {
            console.error('Data is not an array:', data);
            setError('Unexpected data format');
          }
        }
        setLoading(false); // Set loading to false after the fetch completes
      });
    };

    fetchBookings();
  }, []);

  const handleDeleteBooking = (id) => {
    const bookingApi = new BookingApi();
    bookingApi.deleteBooking(id, (error, data, response) => {
      if (error) {
        console.error('Error deleting booking:', error);
      } else {
        console.log('Booking deleted successfully.');
        setBookings(bookings.filter((booking) => booking.bookingId !== id));
      }
    });
  };

  if (loading) {
    return <p>Loading bookings...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className="view-bookings">
      <h3>View Bookings</h3>
      <table>
        <thead>
          <tr>
            <th>Student</th>
            <th>Subject</th>
            <th>Location</th>
            <th>Date</th>
            <th>Time</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {bookings.map((booking, index) => (
            <tr key={index}>
              <td>{booking.studentId}</td>
              <td>{booking.topic}</td>
              <td>{booking.locationId}</td>
              <td>{booking.date}</td>
              <td>{booking.startTime} - {booking.endTime}</td>
              <td>
                <button>Edit</button>
                <button onClick={() => handleDeleteBooking(booking.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default viewBookings;

