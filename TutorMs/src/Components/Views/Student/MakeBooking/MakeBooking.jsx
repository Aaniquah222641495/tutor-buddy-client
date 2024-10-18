import React, { useState, useEffect } from 'react';
import { StudentApi } from 'student_tutor_booking_management_system';
import './MakeBooking.css';

const BookingModal = ({ isOpen, onClose, tutor, studentId }) => {
  const [studentData, setStudentData] = useState({ name: '', email: '' });

  useEffect(() => {
    if (isOpen && studentId) {
      const studentApi = new StudentApi();
      studentApi.getStudentById(studentId, (error, data) => {
        if (error) {
          console.error("Error fetching student data:", error);
        } else {
          setStudentData({ name: data.name, email: data.email });
        }
      });
    }
  }, [isOpen, studentId]);

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
              <input type="text" name="name" value={studentData.name} readOnly />
            </label>
            <label>
              Email:
              <input type="email" name="email" value={studentData.email} readOnly />
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
