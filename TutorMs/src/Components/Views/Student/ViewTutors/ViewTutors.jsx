import React from 'react';
import './ViewTutors.css';

const Tutors = () => {
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
        <div className="tutor-card">
          <h2>Tutor 1</h2>
          <p>Subject: Math</p>
          <p>Location: New York</p>
          <p>Availability: Available</p>
          <p>Rating: 4.5 Stars</p>
          <button>Book Now</button>
        </div>
        <div className="tutor-card">
          <h2>Tutor 2</h2>
          <p>Subject: Science</p>
          <p>Location: Los Angeles</p>
          <p>Availability: Available</p>
          <p>Rating: 4.2 Stars</p>
          <button>Book Now</button>
        </div>
        <div className="tutor-card">
          <h2>Tutor 3</h2>
          <p>Subject: English</p>
          <p>Location: Chicago</p>
          <p>Availability: Unavailable</p>
          <p>Rating: 4.8 Stars</p>
          <button>Book Now</button>
        </div>
      </section>
    </div>
  );
};

export default Tutors;
