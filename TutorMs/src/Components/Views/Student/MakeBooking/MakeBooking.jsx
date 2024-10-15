import React from 'react';
//import '../StudentDashboard.css';
import './MakeBooking.css';

const BookingModal = ({ isOpen, onClose, tutor }) => {
  if (!isOpen) return null;

  return (
      <div className="modal-overlay">
        <div className="modal-content booking-modal">
          <button className="modal-close" onClick={onClose}>
            X
          </button>

          <h3>Booking Form</h3>

          <form>
            <label>
              Name:
              <input type="text" name="name" />
            </label>
            <label>
              Email:
              <input type="email" name="email" />
            </label>
            <label>
              Phone Number:
              <input type="text" name="phone" />
            </label>
            <label>
              Preferred Date:
              <input type="date" name="date" />
            </label>
            <label>
              Preferred Time:
              <input type="time" name="time" />
            </label>
            <button type="submit">Book Now</button>
          </form>
        </div>
      </div>
  );
};

export default BookingModal;
