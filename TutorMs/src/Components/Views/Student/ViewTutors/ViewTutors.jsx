import React, { useState } from 'react';
import MakeBooking from '../MakeBooking/MakeBooking';
import './ViewTutors.css';

const Tutors = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTutor, setSelectedTutor] = useState(null);

  const handleBookingClick = (tutor) => {
    setSelectedTutor(tutor);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const tutors = [
    {
      name: 'Tutor 1',
      subject: 'Math',
      location: 'New York',
      availability: 'Available',
      rating: '4.5 Stars',
      qualifications: 'BSc in Mathematics',
    },
    {
      name: 'Tutor 2',
      subject: 'Science',
      location: 'Los Angeles',
      availability: 'Available',
      rating: '4.2 Stars',
      qualifications: 'BSc in Science',
    },
    {
      name: 'Tutor 3',
      subject: 'English',
      location: 'Chicago',
      availability: 'Unavailable',
      rating: '4.8 Stars',
      qualifications: 'BA in English',
    },
  ];

  return (
    <div className="tutors-page">
      <header className="tutors-header">
        <input
          type="text"
          placeholder="Search tutors by name, subject, or location"
          className="search-bar"
        />
        <button className="search-button">Search</button>
      </header>

      <section className="tutor-list">
        {tutors.map((tutor) => (
          <div className="tutor-card" key={tutor.name}>
            <h2>{tutor.name}</h2>
            <p>Subject: {tutor.subject}</p>
            <p>Location: {tutor.location}</p>
            <p>Availability: {tutor.availability}</p>
            <p>Rating: {tutor.rating}</p>
            <button onClick={() => handleBookingClick(tutor)}>Book Now</button>
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
