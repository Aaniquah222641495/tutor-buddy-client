import React from 'react';
import './Subjects.css';

const Subjects = () => {
  return (
    <div className="subjects-page">
      <header className="subjects-header">
        <h1>Subjects</h1>
        <div className="search-bar">
          <input type="text" placeholder="Search subjects" />
          <button>Search</button>
        </div>
      </header>

      <section className="subject-list">
        <div className="subject-card">
          <h2>Subject Name 1</h2>
          <p>Subject Description 1</p>
          <p>Tutor Name 1</p>
          <p>Venue 1</p>
          <button>View Tutors</button>
        </div>
        <div className="subject-card">
          <h2>Subject Name 2</h2>
          <p>Subject Description 2</p>
          <p>Tutor Name 2</p>
          <p>Venue 2</p>
          <button>View Tutors</button>
        </div>
        <div className="subject-card">
          <h2>Subject Name 3</h2>
          <p>Subject Description 3</p>
          <p>Tutor Name 3</p>
          <p>Venue 3</p>
          <button>View Tutors</button>
        </div>
      </section>
    </div>
  );
};

export default Subjects;
