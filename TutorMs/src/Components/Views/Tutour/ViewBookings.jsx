import React, { useState, useEffect } from 'react';
import { BookingApi } from 'student_tutor_booking_management_system';

function ViewBookings() {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [tutorId, setTutorId] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editedBookingData, setEditedBookingData] = useState({});
  const [bookingData, setBookingData] = useState({});

  const openModal = (booking) => {
    console.log("Opening modal with booking:", booking);
    setEditedBookingData({ ...booking });
    setIsModalOpen(true);
    console.log("Modal opened, isModalOpen:", true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    console.log("Modal closed, isModalOpen:", false);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setEditedBookingData({ ...editedBookingData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Submitting data:", editedBookingData);

    const bookingApi = new BookingApi();

    bookingApi.updateBooking(editedBookingData, editedBookingData.bookingId)
      .then(response => {
        console.log("Booking updated successfully", response);
        setBookingData(editedBookingData);
        closeModal();
      })
      .catch(error => {
        console.error("Error updating booking", error);
      });

    setBookingData(editedBookingData);
    closeModal();
  };

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

  useEffect(() => {
    if (!tutorId) return;

    const fetchBookings = () => {
      const bookingApi = new BookingApi();
      bookingApi.getAllBookings((error, data, response) => {
        if (error) {
          console.error('Error fetching bookings:', error);
          setError('Failed to fetch bookings');
        } else {
          console.log('Fetched data:', data);
          if (Array.isArray(data)) {
            const filteredData = data.filter(booking => booking.tutorId === tutorId);
            setBookings(filteredData);
          } else {
            console.error('Data is not an array:', data);
            setError('Unexpected data format');
          }
        }
        setLoading(false);
      });
    };

    fetchBookings();
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

  if (loading) {
    return <p>Loading bookings...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className="tutor-view-bookings">
      <h3>View Bookings</h3>
      <table className="tutor-bookings-table">
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
              <td>{booking.bookingDate.toLocaleDateString("it-IT")}</td>
              <td>{booking.startTime} - {booking.endTime}</td>
              <td>
                <button onClick={() => openModal(booking)}>Edit</button>
                <button onClick={() => handleDeleteBooking(booking.bookingId)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {isModalOpen && (
        <div className="tutor-modal" style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          zIndex: 1000
        }}>
          <div className="tutor-modal-content" style={{
            backgroundColor: 'white',
            padding: '20px',
            borderRadius: '5px',
            maxWidth: '500px',
            width: '100%'
          }}>
            <h2>Edit Booking</h2>
            <form onSubmit={handleSubmit}>
              <input
                type="date"
                name="bookingDate"
                value={editedBookingData.date || ''}
                onChange={handleInputChange}
              />
              <input
                type="time"
                name="startTime"
                value={editedBookingData.startTime || ''}
                onChange={handleInputChange}
              />
              <input
                type="time"
                name="endTime"
                value={editedBookingData.endTime || ''}
                onChange={handleInputChange}
              />
              <input
                type="text"
                name="location"
                value={editedBookingData.locationId || ''}
                onChange={handleInputChange}
              />
              <button type="submit">Save Changes</button>
              <button type="button" onClick={closeModal}>Cancel</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default ViewBookings;
