import React from 'react';
import { useOutletContext } from 'react-router-dom';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '../StudentDashboard.css';
import StudentNavbar from '../../../Common/Navbar/StudentNavbar';
import BookingApi from '../../../../web/javascript-client-generated/src/api/BookingApi'; // Import BookingApi

const Dashboard = () => {
    const { searchQuery } = useOutletContext();

    // Create an instance of BookingApi
    const bookingApi = new BookingApi();

    // Get user object from local storage
    const user = JSON.parse(localStorage.getItem('user')) || {
        firstName: 'John',
        lastName: 'Doe',
        email: 'john.doe@example.com',
        phone: '123-456-7890',
        profileImage: 'https://via.placeholder.com/150'
    };

    // Sample data for demonstration
    const tutors = [
        { id: '1', firstName: 'Jamie', lastName: 'Doe', phone: '1234567891', email: 'jamie.doe@example.com', subject: 'Applications Development 2', availability: 'Mon-Fri', rating: '4.5' },
        { id: '2', firstName: 'Jane', lastName: 'Smith', phone: '11234567899', email: 'jane.smith@example.com', subject: 'Applications Development Fundamentals 2', availability: 'Tue-Thu', rating: '4.8' }
    ];

    // State to manage sessions
    const [sessions, setSessions] = useState([
      { id: '1', date: '01/01/2022', time: '10:00 AM - 11:00 AM', tutor: 'Jamie Doe', location: 'Room 101' },
      { id: '2', date: '01/02/2022', time: '2:00 PM - 3:00 PM', tutor: 'Jane Smith', location: 'Room 202' }
    ]);

    const filterData = (data, query) => {
        return data.filter(item => 
            Object.values(item).some(value =>
                value.toLowerCase().includes(query.toLowerCase())
            )
        );
    };

    const cancelBooking = (bookingId) => {
        bookingApi.deleteBooking(bookingId, (error, data, response) => {
            if (error) {
                console.error("Error canceling booking:", error);
            } else {
                console.log("Booking canceled successfully:", response);
                // Update the sessions list to remove the canceled session
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
                                    <tr key={tutor.id}>
                                        <td>{tutor.firstName} {tutor.lastName}</td>
                                        <td>{tutor.subject}</td>
                                        <td>{tutor.availability}</td>
                                        <td>{tutor.rating}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        <button className="btn btn-primary" onClick={() => window.location.href='/subjects'}>View Subjects</button> 
                    </div>
                </section>

                <section className="management-section">
                    <h4 className="sub-header">Upcoming Sessions</h4>
                    <div className="table-container">
                        {sessions.map(session => (
                            <div className="session-card" key={session.id}>
                                <p>Date: {session.date}</p>
                                <p>Time: {session.time}</p>
                                <p>Tutor: {session.tutor}</p>
                                <p>Location: {session.location}</p>
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
