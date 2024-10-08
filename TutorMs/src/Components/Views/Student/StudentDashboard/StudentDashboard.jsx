import { useState, useEffect } from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '../StudentDashboard.css';
import StudentNavbar from '../../../Common/Navbar/StudentNavbar';
import { useNavigate } from 'react-router-dom';
import { StudentApi, TutorApi, ReviewApi, BookingApi } from 'student_tutor_booking_management_system';

const Dashboard = () => {
    const [studentData, setStudentData] = useState(null);
    const [tutorsData, setTutorsData] = useState([]);
    const [reviewsData, setReviewsData] = useState([]);
    const [sessionsData, setSessionsData] = useState([]);
    const [studentId, setStudentId] = useState('');
    const [password, setPassword] = useState('');
    const [searchError, setSearchError] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const fetchStudentData = async () => {
            try {
                const storedStudentData = sessionStorage.getItem('student');
                if (storedStudentData) {
                    const student = JSON.parse(storedStudentData);
                    console.log("Stored student data:", student);
                    setStudentData(student);
                } else {
                    console.error("No student data found in sessionStorage");
                }
            } catch (error) {
                console.error("Error fetching student data", error);
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

    const fetchUpcomingSessions = async (id) => {
        try {
            const bookingApi = new BookingApi();
            console.log("Fetching bookings for student ID:", id);  // Debugging line
            bookingApi.getAllBookingsByStudent(id, (error, data) => {
                if (error) {
                    console.error("Error fetching bookings:", error);
                    setSearchError("Error fetching bookings.");
                } else {
                    console.log("Fetched bookings:", data);  // Debugging line
                    setSessionsData(data);
                    setSearchError('');
                }
            });
        } catch (error) {
            console.error("Error fetching bookings:", error);
            setSearchError("Error fetching bookings.");
        }
    };
    

    const handleSearch = () => {
        if (studentId && password) {
            fetchUpcomingSessions(studentId);
        } else {
            setSearchError("Please enter both student ID and password.");
        }
    };

    const handleCancelBooking = async (bookingId) => {
        try {
            const bookingApi = new BookingApi();
            console.log("Attempting to cancel booking with ID:", bookingId);  // Add this line for debugging
            bookingApi.deleteBooking(bookingId, (error, data, response) => {
                if (error) {
                    console.error("Error canceling booking:", error);
                } else {
                    console.log("Successfully canceled booking with ID:", bookingId);  // Add this line for success feedback
                    setSessionsData(prevSessions => prevSessions.filter(session => session.bookingId !== bookingId));
                }
            });
        } catch (error) {
            console.error("Error canceling booking:", error);
        }
    };
    
    const tutorsWithRatings = tutorsData.map(tutor => {
        const tutorReviews = reviewsData.filter(review => review.tutorId === tutor.id);
        const totalRating = tutorReviews.reduce((acc, review) => acc + review.rating, 0);
        const averageRating = tutorReviews.length ? totalRating / tutorReviews.length : 0;
        return { ...tutor, rating: averageRating };
    });

    const handleLogout = () => {
        console.log("Logging out...");
        sessionStorage.removeItem('student');
        sessionStorage.removeItem('studentId');
        navigate('/');
    };

    return (
        <div className="dashboard">
            <StudentNavbar />

            <header className="dashboard-header">
                <h1>Student Dashboard</h1>
            </header>

            <div className="dashboard-content">
                <section className="profile-section">
                    <div className="profile-card">
                        <div className="profile-image">
                            <img src="https://via.placeholder.com/150" alt="User" />
                        </div>
                        <div className="profile-details">
                            {studentData ? (
                                <>
                                    <h2>{studentData.lastName}</h2>
                                    <p>Email: {studentData.email}</p>
                                    <p>Phone: {studentData.phoneNumber}</p>
                                </>
                            ) : (
                                <p>Loading profile...</p>
                            )}
                            <button>Edit Profile</button>
                            <button onClick={handleLogout}>Logout</button>
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

                    <button className="subject-button" onClick={() => navigate('/subjects')}>View Subjects</button>
                </section>
            </div>

            <section className="sessions-section">
                <h2>Search Upcoming Sessions</h2>
                <div className="search-form">
                    <input 
                        type="text" 
                        placeholder="Student ID" 
                        value={studentId}
                        onChange={(e) => setStudentId(e.target.value)}
                    />
                    <input 
                        type="password" 
                        placeholder="Password" 
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button onClick={handleSearch}>Search</button>
                    {searchError && <p className="error-message">{searchError}</p>}
                </div>

                <div className="sessions-list">
                    <h3>Upcoming Sessions</h3>
                    <ul>
                        {sessionsData.map(session => (
                            <li key={session.bookingId}>
                                <p>Session ID: {session.bookingId}</p>
                                <p>Date: {session.date || 'N/A'}</p>
                                <p>Time: {session.time || 'N/A'}</p>
                                <p>Subject: {session.subject || 'N/A'}</p>
                                <p>Tutor: {session.tutorName || 'N/A'}</p>
                                <p>Location: {session.location || 'N/A'}</p>
                                <button onClick={() => handleCancelBooking(session.bookingId)}>Cancel Booking</button>
                            </li>
                        ))}
                    </ul>
                </div>

            </section>

            <section className="chat-section">
                <h2>AI Chatbot</h2>
                <button>Chat Now</button>
            </section>
        </div>
    );
};

export default Dashboard;
