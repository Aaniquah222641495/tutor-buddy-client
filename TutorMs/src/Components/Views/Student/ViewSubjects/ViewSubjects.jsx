// src/Components/Views/Student/ViewSubjects/ViewSubjects.jsx
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { SubjectApi } from 'student_tutor_booking_management_system';
import '../StudentDashboard.css';
import StudentNavbar from '../../../Common/Navbar/StudentNavbar';

const Subjects = () => {
  const [subjects, setSubjects] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Instantiate SubjectApi and fetch subjects
    const subjectApi = new SubjectApi();
    subjectApi.getAllSubject((error, data) => {
      if (error) {
        console.error('Error fetching subjects:', error);
      } else {
        setSubjects(data);
      }
    });
  }, []);

  const handleViewTutors = () => {
    navigate('/tutors');
  };

  return (
      <div className="subjects-page">
        <StudentNavbar />

        <header className="subjects-header">
          <h1>Subjects</h1>
          <div className="search-bar">
            <input type="text" placeholder="Search subjects" />
            <button>Search</button>
          </div>
        </header>

        <section className="subject-list">
          {subjects.map(subject => (
              <div key={subject.subjectId} className="subject-card">
                <h2>{subject.subjectName}</h2>
                <p>Subject code: {subject.subjectCode}</p>
                <button onClick={handleViewTutors}>View Tutors</button>
              </div>
          ))}
        </section>
      </div>
  );
};

export default Subjects;
