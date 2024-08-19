import React, { useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import MakeBooking from '../MakeBooking/MakeBooking';
import '../StudentDashboard.css';
import StudentNavbar from '../../../Common/Navbar/StudentNavbar';

const Tutors = () => {
    const { searchQuery } = useOutletContext();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedTutor, setSelectedTutor] = useState(null);
    const [query, setQuery] = useState('');

    const tutors = [
        { id: '1', name: 'John Doe', subject: 'Applications Development 2', location: 'Library', availability: 'Mon-Fri', rating: '4.5', qualifications: 'MSc in Software Engineering' },
        { id: '2', name: 'Jane Smith', subject: 'Applications Development Fundamentals 2', location: 'Engineering Building', availability: 'Tue-Thu', rating: '4.8', qualifications: 'MSc in Computer Science' },
        { id: '3', name: 'Michael Brown', subject: 'Database Systems', location: 'Tech Building', availability: 'Mon-Wed', rating: '4.7', qualifications: 'MSc in Data Science' }
    ];

    const handleBookingClick = (tutor) => {
        setSelectedTutor(tutor);
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    // Modified filter function that checks both name and subject fields
    const filterData = (data, query) => {
        return data.filter(item => 
            item.name.toLowerCase().includes(query.toLowerCase()) || 
            item.subject.toLowerCase().includes(query.toLowerCase())
        );
    };

    const handleSearch = () => {
        setQuery(searchQuery);
    };

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
