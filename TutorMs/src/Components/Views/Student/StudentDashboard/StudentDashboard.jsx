import React, { useState, useEffect } from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '../StudentDashboard.css';
import StudentNavbar from '../../../Common/Navbar/StudentNavbar';
import { StudentApi, TutorApi, ReviewApi, BookingApi } from 'student_tutor_booking_management_system';

const Dashboard = () => {
    const [studentData, setStudentData] = useState(null);
    const [tutorsData, setTutorsData] = useState([]);
    const [reviewsData, setReviewsData] = useState([]);
    const [sessionsData, setSessionsData] = useState([]);

    useEffect(() => {
        const fetchStudentData = async () => {
            try {
                // Example: Retrieve email and password from a form input
                // const email = document.getElementById("emailInput").value;
                // const password = document.getElementById("passwordInput").value;

                // Example: Retrieve email and password from a stored session (e.g., localStorage or sessionStorage)
                const email = localStorage.getItem("userEmail");
                const password = localStorage.getItem("userPassword");

                // Ensure that the user has entered the credentials
                if (!email || !password) {
                    console.error("Email or password is missing");
                    return;
                }

                const studentApi = new StudentApi();

                studentApi.authenticateStudent(email, password, (error, data) => {
                    if (error) {
                        console.error("Error fetching student data", error);
                    } else {
                        setStudentData(data);
                        fetchSessionsData(data.id); // Fetch sessions data after student data
                    }
                });
            } catch (error) {
                console.error("Error fetching student data", error);
            }
        };


        const fetchSessionsData = async (studentId) => {
            try {
                const bookingApi = new BookingApi();
                bookingApi.getAllBookingsByStudent(studentId, (error, data) => {
                    if (error) {
                        console.error("Error fetching sessions data", error);
                    } else {
                        const upcomingSessions = data.filter(session => new Date(session._date) >= new Date());
                        setSessionsData(upcomingSessions);
                    }
                });
            } catch (error) {
                console.error("Error fetching sessions data", error);
            }
        };

        const fetchTutorsData = async () => {
            try {
                const tutorApi = new TutorApi();
                tutorApi.getAllTutors((error, data) => {
                    if (error) {
                        console.error("Error fetching tutors data", error);
                    } else {
                        setTutorsData(data);
                        fetchReviewsForTutors(data.map(tutor => tutor.id));
                    }
                });
            } catch (error) {
                console.error("Error fetching tutors data", error);
            }
        };

        const fetchReviewsForTutors = async (tutorIds) => {
            try {
                const reviewApi = new ReviewApi();
                let reviews = [];
                for (let id of tutorIds) {
                    await new Promise((resolve, reject) => {
                        reviewApi.getAllReviewsByTutor(id, (error, data) => {
                            if (error) {
                                console.error(`Error fetching reviews for tutor ${id}`, error);
                                reject(error);
                            } else {
                                reviews.push(...data);
                                resolve();
                            }
                        });
                    });
                }
                setReviewsData(reviews);
            } catch (error) {
                console.error("Error fetching reviews data", error);
            }
        };

        fetchStudentData();
        fetchTutorsData();
    }, []);

    // Cancel booking handler
    const handleCancelBooking = async (bookingId) => {
        try {
            const bookingApi = new BookingApi();
            bookingApi.deleteBooking(bookingId, (error) => {
                if (error) {
                    console.error("Error canceling booking", error);
                } else {
                    // Remove the canceled booking from the state
                    setSessionsData(prevSessions => prevSessions.filter(session => session.bookingId !== bookingId));
                }
            });
        } catch (error) {
            console.error("Error canceling booking", error);
        }
    };

    // Merge reviews with tutors data
    const tutorsWithRatings = tutorsData.map(tutor => {
        const tutorReviews = reviewsData.filter(review => review.tutorId === tutor.id);
        const totalRating = tutorReviews.reduce((acc, review) => acc + review.rating, 0);
        const averageRating = tutorReviews.length ? totalRating / tutorReviews.length : 0;
        return { ...tutor, rating: averageRating };
    });

    return (
        <div className="dashboard">
            <StudentNavbar />

            <header className="dashboard-header">
                <h1>Student Dashboard</h1>
                <div className="search-bar">
                    <input type="text" placeholder="Search" />
                    <button>Search</button>
                </div>
            </header>

            <div className="dashboard-content">
                <section className="profile-section">
                    <div className="profile-card">
                        <div className="profile-image">
                            <img src="https://via.placeholder.com/150" alt="User"/>
                        </div>
                        <div className="profile-details">
                            {studentData ? (

                                <>
                                    <h2>{`${studentData.firstName} ${studentData.lastName}`}</h2>
                                    <p>Email: {studentData.email}</p>
                                    <p>Phone: {studentData.phoneNumber}</p>
                                </>
                            ) : (
                                <p>Loading profile...</p>
                            )}
                            <button>Edit Profile</button>
                        </div>
                    </div>
                </section>

                <section className="tutors-section">
                    <h2>Available Tutors</h2>
                    <table>
                        <thead>
                        <tr>
                            <th>Tutor Name</th>
                            <th>Phone Number</th>
                            <th>Email</th>
                            <th>Rating</th>
                        </tr>
                        </thead>
                        <tbody>
                        {tutorsWithRatings.map(tutor => (
                            <tr key={tutor.id}>
                                <td>{tutor.name}</td>
                                <td>{tutor.phoneNumber}</td>
                                <td>{tutor.email}</td>
                                <td>{tutor.rating.toFixed(1)}</td>
                            </tr>
                        ))}
                        </tbody>
                    </table>

                    <button className="subject-button" onClick={() => window.location.href = '/subjects'}>View Subjects</button>
                </section>
            </div>

            <section className="sessions-section">
                <h2>Upcoming Sessions</h2>
                {sessionsData.length > 0 ? (
                    sessionsData.map(session => (
                        <div key={session.bookingId} className="session-card">
                            <p>Date: {new Date(session._date).toLocaleDateString()}</p>
                            <p>Time: {session.startTime} - {session.endTime}</p>
                            <p>Tutor ID: {session.tutorId}</p>
                            <p>Subject ID: {session.subjectId}</p>
                            <button onClick={() => handleCancelBooking(session.bookingId)}>Cancel Booking</button>
                        </div>
                    ))
                ) : (
                    <p>No upcoming sessions</p>
                )}
            </section>

            <section className="chat-section">
                <h2>AI Chatbot</h2>
                <button>Chat Now</button>
            </section>
        </div>
    );
};

export default Dashboard;
