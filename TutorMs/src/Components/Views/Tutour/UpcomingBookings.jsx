import React, { useState, useEffect } from 'react';
import { BookingApi } from 'student_tutor_booking_management_system';
import { format } from 'date-fns';

function UpcomingBookings() {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [tutorId, setTutorId] = useState(null);

  useEffect(() => {
    const tutorData = localStorage.getItem('tutor');
    if (tutorData) {
      const tutor = JSON.parse(tutorData);
      setTutorId(tutor.tutorId);
    } else {
      console.error("No tutor data found in localStorage");
      setError('Unable to retrieve tutor information');
    }
  }, []);

  const filterBookingsForTutor = (allBookings) => {
    if (!tutorId) return [];
    return allBookings.filter(booking => booking.tutorId === tutorId);
  };


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
            const filteredBookings = filterBookingsForTutor(data);
            setBookings(filteredBookings);
          } else {
            console.error('Data is not an array:', data);
            setError('Unexpected data format');
          }
        }
        setLoading(false);
      });
    };

    if (tutorId) {
      fetchBookings();
    }
  }, [tutorId]);

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


  const formatDate = (dateString) => {
    const date = new Date(dateString);
    console.log(dateString);
    if (isNaN(date)) {
      return 'Invalid Date';
      
    }
    
    return format(date, 'yyyyMM/dd'); // Customize the format as needed
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
          <div key={booking.bookingId} className="booking-card">
            <p><strong>Date:</strong> {formatDate(booking.bookingDate)}</p>
            <p><strong>Time:</strong> {booking.startTime} - {booking.endTime}</p>
            <p><strong>Student:</strong> {booking.studentId}</p>
            <p><strong>Location:</strong> {booking.locationId}</p>
            <p><strong>Subject:</strong> {booking.topic}</p>
            <button onClick={() => handleDeleteBooking(booking.bookingId)}>Cancel Booking</button>
          </div>
        ))
      ) : (
        <p>No upcoming bookings.</p>
      )}
    </div>
  );
}

export default UpcomingBookings;
