import React, { useState, useEffect } from 'react';
import { BookingApi } from 'student_tutor_booking_management_system';

function UpcomingBookings() {
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
        setBookings(bookings.filter((booking) => booking.id !== id));
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
    <div className="upcoming-bookings">
      <h3>Upcoming Bookings</h3>
      {bookings.length > 0 ? (
        bookings.map((booking) => (
          <div key={booking.id} className="booking-card">
            <p><strong>Date:</strong> {booking.date}</p>
            <p><strong>Time:</strong> {booking.time}</p>
            <p><strong>Tutor:</strong> {booking.tutor}</p>
            <p><strong>Location:</strong> {booking.location}</p>
            <button onClick={() => handleDeleteBooking(booking.id)}>Cancel Booking</button>
          </div>
        ))
      ) : (
        <p>No upcoming bookings.</p>
      )}
    </div>
  );
}

export default UpcomingBookings;


