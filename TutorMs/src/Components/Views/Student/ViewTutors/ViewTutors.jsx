import React, { useState, useEffect } from 'react';
import { useOutletContext } from 'react-router-dom';
import MakeBooking from '../MakeBooking/MakeBooking';
import '../StudentDashboard.css';
import StudentNavbar from '../../../Common/Navbar/StudentNavbar';
import TutorApi from '../../../../web/javascript-client-generated/src/api/TutorApi'; // Import TutorApi

const Tutors = () => {
  const { searchQuery } = useOutletContext();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTutor, setSelectedTutor] = useState(null);
  const [query, setQuery] = useState('');
  const [tutors, setTutors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch tutors data from API
  useEffect(() => {
    const tutorApi = new TutorApi();
    tutorApi.getAllTutors((error, data) => {
      if (error) {
        setError('Failed to load tutors');
        setLoading(false);
      } else {
        setTutors(data);
        setLoading(false);
      }
    });
  }, []);

  const handleBookingClick = (tutor) => {
    setSelectedTutor(tutor);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  // Filter function to search by name or subject
  const filterData = (data, query) => {
    return data.filter(item =>
      item.name.toLowerCase().includes(query.toLowerCase()) ||
      item.subject.toLowerCase().includes(query.toLowerCase())
    );
  };

  const handleSearch = () => {
    setQuery(searchQuery);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="tutors-page">
      <StudentNavbar />

      <header className="tutors-header">
        <h1>Tutors</h1>
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search tutors by name or subject"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button className="btn btn-primary" onClick={handleSearch}>Search</button>
        </div>
      </header>

      <section className="tutor-list">
        {filterData(tutors, query).map(tutor => (
          <div className="tutor-card" key={tutor.id}>
            <h2>{tutor.name}</h2>
            <p>Subject: {tutor.subject}</p>
            <p>Location: {tutor.location}</p>
            <p>Availability: {tutor.availability}</p>
            <p>Rating: {tutor.rating} Stars</p>
            <p>Qualifications: {tutor.qualifications}</p>
            <button className="btn btn-primary" onClick={() => handleBookingClick(tutor)}>Book Now</button>
          </div>
        ))}
      </section>

      <MakeBooking
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        tutor={selectedTutor}
      />
    </div>
  );
};

export default Tutors;
