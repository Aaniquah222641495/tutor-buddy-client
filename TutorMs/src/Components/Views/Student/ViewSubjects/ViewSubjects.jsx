import React, { useState, useEffect } from 'react';
import { useOutletContext } from 'react-router-dom';
import '../StudentDashboard.css';
import StudentNavbar from '../../../Common/Navbar/StudentNavbar';
import SubjectApi from '../../../../web/javascript-client-generated/src/api/StudentApi'; // Importing SubjectApi

const Subjects = () => {
  const { searchQuery } = useOutletContext();
  const [query, setQuery] = useState('');
  const [subjects, setSubjects] = useState([]);

  useEffect(() => {
    // Create an instance of SubjectApi
    const subjectApi = new SubjectApi();

    // Fetch all subjects from the API
    subjectApi.getAllSubject((error, data, response) => {
      if (error) {
        console.error("Error fetching subjects: ", error);
      } else {
        setSubjects(data);
      }
    });
  }, []); // Empty dependency array means this effect runs once on component mount

  const filterData = (data, query) => {
    return data.filter(item =>
      item.subjectName.toLowerCase().includes(query.toLowerCase())
    );
  };

  const handleSearch = () => {
    setQuery(searchQuery);
  };

  return (
    <div className="subjects-page">
      <StudentNavbar />

      <header className="subjects-header">
        <h1>Subjects</h1>
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search subjects"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button className="btn btn-primary" onClick={handleSearch}>Search</button>
        </div>
      </header>

      <section className="subject-list">
        {filterData(subjects, query).map(subject => (
          <div className="subject-card" key={subject.subjectId}>
            <h2>{subject.subjectName}</h2>
            <p>Subject Code: {subject.subjectCode}</p>
            {/* Add other details like tutor and venue if available */}
            <button className="btn btn-primary" onClick={() => window.location.href = '/tutors'}>View Tutors</button>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Subjects;
