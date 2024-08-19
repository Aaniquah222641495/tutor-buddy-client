import React, { useState, useEffect } from 'react';
import { useOutletContext } from 'react-router-dom';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '../StudentDashboard.css';
import StudentNavbar from '../../../Common/Navbar/StudentNavbar';
import { BookingApi, StudentApi, TutorApi } from 'student_tutor_booking_management_system';

const Dashboard = () => {
    const { searchQuery } = useOutletContext();

    const bookingApi = new BookingApi();
    const studentApi = new StudentApi();
    const tutorApi = new TutorApi();

    const [user, setUser] = useState(null);
    const [tutors, setTutors] = useState([
        // Sample tutor data
        {
            id: 1,
            firstName: 'John',
            lastName: 'Doe',
            subject: 'Mathematics',
            availability: 'Mon, Wed, Fri 10:00 AM - 12:00 PM',
            rating: 4.5,
        },
        {
            id: 2,
            firstName: 'Jane',
            lastName: 'Smith',
            subject: 'Physics',
            availability: 'Tue, Thu 2:00 PM - 4:00 PM',
            rating: 4.7,
        },
        {
            id: 3,
            firstName: 'Emily',
            lastName: 'Johnson',
            subject: 'Chemistry',
            availability: 'Mon, Wed 1:00 PM - 3:00 PM',
            rating: 4.9,
        },
    ]);

    const [sessions, setSessions] = useState([
        // Sample session data
        {
            id: 1,
            date: '2024-08-20',
            time: '10:00 AM - 11:00 AM',
            tutor: { firstName: 'John', lastName: 'Doe' },
            location: 'Room 101',
        },
        {
            id: 2,
            date: '2024-08-22',
            time: '2:00 PM - 3:00 PM',
            tutor: { firstName: 'Jane', lastName: 'Smith' },
            location: 'Room 102',
        },
    ]);

    useEffect(() => {
        studentApi.getStudentById(('userId'), (error, userData) => {
            if (error) {
                console.error("Error fetching student:", error);
            } else {
                setUser(userData);
            }
        });

        tutorApi.getAllTutors((error, tutorsData) => {
            if (error) {
                console.error("Error fetching tutors:", error);
            } else {
                setTutors(tutorsData);
            }
        });

        bookingApi.getBookingsByStudentId(('userId'), (error, sessionsData) => {
            if (error) {
                console.error("Error fetching sessions:", error);
            } else {
                setSessions(sessionsData);
            }
        });
    }, []);

    const filterData = (data, query) => {
        return data.filter(item =>
            Object.values(item).some(value =>
                value.toLowerCase().includes(query.toLowerCase())
            )
        );
    };

    const cancelBooking = (bookingId) => {
        bookingApi.deleteBooking(bookingId, (error) => {
            if (error) {
                console.error("Error canceling booking:", error);
            } else {
                setSessions(prevSessions => prevSessions.filter(session => session.id !== bookingId));
            }
        });
    };

    return (
        <div className="dashboard">
            <StudentNavbar />

            <header className="dashboard-header">
                <h1>Student Dashboard</h1>
                <div className="search-bar">
                    <input type="text" placeholder="Search" />
                    <button className="btn btn-primary">Search</button>
                </div>
            </header>

            <div className="dashboard-content">
                {user && (
                    <section className="profile-section">
                        <div className="profile-card">
                            <div className="profile-image">
                                <img src={user.profileImage} alt="User" />
                            </div>
                            <div className="profile-details">
                                <h2>{user.firstName} {user.lastName}</h2>
                                <p>{user.email}</p>
                                <p>{user.phone}</p>
                                <button className="btn btn-primary">Edit Profile</button>
                            </div>
                        </div>
                    </section>
                )}

                <section className="management-section">
                    <h4 className="sub-header">Available Tutors</h4>
                    <div className="table-container">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>Tutor Name</th>
                                    <th>Subject</th>
                                    <th>Availability</th>
                                    <th>Rating</th>
                                </tr>
                            </thead>
                            <tbody>
                                {filterData(tutors, searchQuery).map(tutor => (
                                    <tr key={tutors.id}>
                                        <td>{tutors.firstName} {tutor.lastName}</td>
                                        <td>{tutors.subject}</td>
                                        <td>{tutors.availability}</td>
                                        <td>{tutors.rating}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        <button className="btn btn-primary" onClick={() => window.location.href = '/subjects'}>View Subjects</button>
                    </div>
                </section>

                <section className="management-section">
                    <h4 className="sub-header">Upcoming Sessions</h4>
                    <div className="table-container">
                        {sessions.map(sessions => (
                            <div className="session-card" key={sessions.id}>
                                <p>Date: {sessions.date}</p>
                                <p>Time: {sessions.time}</p>
                                <p>Tutor: {sessions.tutor.firstName} {sessions.tutor.lastName}</p>
                                <p>Location: {sessions.location}</p>
                                <button className="btn btn-primary" onClick={() => cancelBooking(session.id)}>Cancel Booking</button>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="management-section">
                    <h4 className="sub-header">AI Chatbot</h4>
                    <div className="table-container">
                        <button className="btn btn-primary">Chat Now</button>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Dashboard;
