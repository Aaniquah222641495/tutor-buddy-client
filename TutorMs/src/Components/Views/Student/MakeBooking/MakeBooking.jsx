import React, { useState, useEffect } from 'react';
import { StudentApi, BookingApi, LocationApi, SubjectApi } from 'student_tutor_booking_management_system';
import './MakeBooking.css';

const BookingModal = ({ isOpen, onClose, tutor, studentId }) => {
  const [studentData, setStudentData] = useState(null);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [date, setDate] = useState('');
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');
  const [topic, setTopic] = useState('');
  const [location, setLocation] = useState('');
  const [locations, setLocations] = useState([]);
  const [selectedSubject, setSelectedSubject] = useState('');

  useEffect(() => {
    if (isOpen && studentId) {
      const fetchStudentData = async () => {
        try {
          const storedStudentData = sessionStorage.getItem('student');
          if (storedStudentData) {
            const student = JSON.parse(storedStudentData);
            console.log("Stored student data:", student);
            setStudentData(student);
          } else {
            console.error("No student data found in sessionStorage");
          }
        } catch (error) {
          console.error("Error fetching student data", error);
        }
      };

      fetchStudentData();

      const locationApi = new LocationApi();
      locationApi.getAllLocations((error, data) => {
        if (error) {
          console.error("Error fetching locations:", error);
        } else {
          setLocations(data);
        }
      });
    }

    const subjectApi = new SubjectApi();
    subjectApi.getAllSubject((error, data) => {
      if (error) {
        console.error("Error fetching subjects:", error);
      } else {
        setSelectedSubject(data);
      }
    });
  }, [isOpen, studentId]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const bookingApi = new BookingApi();
    const bookingData = {
      studentId: studentData.studentId,
      tutorId: tutor.tutorId,
      selectedSubject,
      location,
      date,
      startTime,
      endTime,
      topic,
      status: 'PENDING' // Assuming initial status is 'PENDING'
    };

    console.log('Booking Data:', bookingData); // Log the data being sent

    try {
      const response = await bookingApi.createBooking(bookingData);
      if (!response.ok) {
        const errorData = await response.json();
        console.error('Error response from server:', errorData);
        alert(`Failed to create booking: ${errorData.message}`);
        return;
      }
      alert('Booking created successfully');
      onClose();
    } catch (error) {
      console.error('Error creating booking:', error);
      alert('Failed to create booking. Please try again.');
    }
  };

  if (!isOpen) return null;

  return (
      <div className="modal-overlay">
        <div className="modal-content booking-modal">
          <button className="modal-close" onClick={onClose}>
            X
          </button>

          <h3>Booking Form</h3>

          <form onSubmit={handleSubmit}>
            <label>
              Preferred Date:
              <input type="date" name="date" value={date} onChange={(e) => setDate(e.target.value)} />
            </label>
            <label>
              Start Time:
              <input type="time" name="startTime" value={startTime} onChange={(e) => setStartTime(e.target.value)} />
            </label>
            <label>
              End Time:
              <input type="time" name="endTime" value={endTime} onChange={(e) => setEndTime(e.target.value)} />
            </label>
            <label>
              Topic:
              <input type="text" name="topic" value={topic} onChange={(e) => setTopic(e.target.value)} />
            </label>
            <label>
              Location:
              <select name="location" value={location} onChange={(e) => setLocation(e.target.value)}>
                <option value="">Select a location</option>
                {locations.map(loc => (
                    <option key={loc.locationId} value={loc.locationId}>
                      {loc.room} - {loc.building}
                    </option>
                ))}
              </select>
            </label>
            <label>
              Subject:
              <select name="subject" value={selectedSubject} onChange={(e) => setSelectedSubject(e.target.value)}>
                <option value="">Select a subject</option>
                {tutor.assignedSubjects.map(subject => (
                    <option key={subject.subjectId} value={subject.subjectId}>
                      {subject.subjectName}
                    </option>
                ))}
              </select>
            </label>
            <button type="submit">Book Now</button>
          </form>
        </div>
      </div>
  );
};

export default BookingModal;