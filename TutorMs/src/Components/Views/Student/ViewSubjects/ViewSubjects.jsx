import React, { useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import '../StudentDashboard.css';
import StudentNavbar from '../../../Common/Navbar/StudentNavbar';

const Subjects = () => {
    const { searchQuery } = useOutletContext();
    const [query, setQuery] = useState('');

    const subjects = [
        { id: '1', name: 'Applications Development 2', description: 'Advanced applications development techniques.', tutor: 'John Doe', venue: 'Room 2.22, Library' },
        { id: '2', name: 'Applications Development Fundamentals 2', description: 'Basic concepts and practices in applications development.', tutor: 'Jane Smith', venue: 'Lab 1.1, Engineering Building' },
        { id: '3', name: 'Database Systems', description: 'Understanding and using database management systems.', tutor: 'Michael Brown', venue: 'Room 3.33, Tech Building' }
    ];

    const filterData = (data, query) => {
        return data.filter(item => 
            item.name.toLowerCase().includes(query.toLowerCase())
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
                    <div className="subject-card" key={subject.id}>
                        <h2>{subject.name}</h2>
                        <p>{subject.description}</p>
                        <p>Tutor: {subject.tutor}</p>
                        <p>Venue: {subject.venue}</p>
                        <button className="btn btn-primary" onClick={() => window.location.href='/tutors'}>View Tutors</button>
                    </div>
                ))}
            </section>
        </div>
    );
};

export default Subjects;
