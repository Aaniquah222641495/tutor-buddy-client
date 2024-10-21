import React, { useState, useEffect } from 'react';
import { StudentApi, BookingApi, LocationApi, SubjectApi } from 'student_tutor_booking_management_system';
import './MakeBooking.css';

const BookingModal = ({ isOpen, onClose, tutor, studentId }) => {
  const [studentData, setStudentData] = useState(null);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [date, setDate] = useState('');
  const [startTime, setStartTime] = useState(''); // Start time with seconds
  const [endTime, setEndTime] = useState(''); // End time with seconds
  const [topic, setTopic] = useState('');
  const [location, setLocation] = useState('');
  const [locations, setLocations] = useState([]);
  const [subjects, setSubjects] = useState([]); // State to hold subjects from the database
  const [selectedSubject, setSelectedSubject] = useState('');

  useEffect(() => {
    if (isOpen) {
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

      // Fetch locations
      const locationApi = new LocationApi();
      locationApi.getAllLocations((error, data) => {
        if (error) {
          console.error("Error fetching locations:", error);
        } else {
          setLocations(data);
        }
      });

      // Fetch subjects directly from the database, not through the tutor
      const subjectApi = new SubjectApi();
      subjectApi.getAllSubject((error, data) => {
        if (error) {
          console.error("Error fetching subjects:", error);
        } else {
          setSubjects(data);
        }
      });
    }
  }, [isOpen, studentId]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const bookingApi = new BookingApi();
    const bookingData = {
      studentId: studentData.studentId,
      tutorId: tutor.tutorId,
      subjectId: selectedSubject,  // Send selected subjectId, not subjectName
      locationId: location,
      bookingDate: new Date(date).toISOString(),
      startTime,
      endTime,
      topic,
      status: 'PENDING' // Assuming initial status is 'PENDING'
    };

    console.log('Booking Data:', bookingData); // Log the data being sent

      bookingApi.createBooking(bookingData, (error, data, response) => {
        if (error) {
          const errorData = response.json;
          console.error('Error response from server:', errorData);
          alert(`Failed to create booking: ${errorData.message}`);
        }
        else{
          alert('Booking created successfully');
          onClose();
        }

      }
      );

  };

  // Function to handle time input with seconds
  const handleTimeChange = (setter) => (e) => {
    const timeValue = e.target.value;
    const withSeconds = timeValue.length === 5 ? `${timeValue}:00` : timeValue; // Add ':00' if seconds are missing
    setter(withSeconds);
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
            Start Time (with seconds):
            <input type="time" step="1" name="startTime" value={startTime} onChange={handleTimeChange(setStartTime)} />
          </label>
          <label>
            End Time (with seconds):
            <input type="time" step="1" name="endTime" value={endTime} onChange={handleTimeChange(setEndTime)} />
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
              {subjects.map(subject => (
                <option key={subject.subjectId} value={subject.subjectId}> {/* Use subjectId as the value */}
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
