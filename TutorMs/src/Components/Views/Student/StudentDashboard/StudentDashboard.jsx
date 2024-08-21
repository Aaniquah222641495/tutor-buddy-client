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
    const navigate = useNavigate();

    useEffect(() => {
        const fetchStudentData = async () => {
            try {
                const storedStudentData = sessionStorage.getItem('student');
                if (storedStudentData) {
                    const student = JSON.parse(storedStudentData);
                    console.log("Stored student data:", student); // Debug: Log student data
                    setStudentData(student);
                    if (student.id) {
                        await fetchSessionsData(student.id); // Pass student ID to fetchSessionsData
                    } else {
                        console.error("Student ID not found in stored data");
                    }
                } else {
                    console.error("No student data found in sessionStorage");
                }
            } catch (error) {
                console.error("Error fetching student data", error);
            }
        };


        const fetchSessionsData = async (studentId) => {
            try {
                console.log("Fetching sessions for student ID:", studentId); // Debug: Log student ID
                const bookingApi = new BookingApi();
                const data = await new Promise((resolve, reject) => {
                    bookingApi.getAllBookingsByStudent(studentId, (error, result) => {
                        if (error) {
                            console.error("Error fetching sessions from API:", error); // Log API error
                            reject(error);
                        } else {
                            resolve(result);
                        }
                    });
                });
                console.log("Fetched sessions data:", data); // Log data
                if (data && Array.isArray(data)) {
                    const upcomingSessions = data.filter(session => new Date(session._date) >= new Date());
                    console.log("Upcoming sessions:", upcomingSessions); // Log filtered sessions
                    setSessionsData(upcomingSessions);
                } else {
                    console.error("Fetched data is not an array:", data); // Error: Data should be an array
                }
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

    const handleCancelBooking = async (bookingId) => {
        try {
            const bookingApi = new BookingApi();
            bookingApi.deleteBooking(bookingId, (error) => {
                if (error) {
                    console.error("Error canceling booking", error);
                } else {
                    setSessionsData(prevSessions => prevSessions.filter(session => session.bookingId !== bookingId));
                }
            });
        } catch (error) {
            console.error("Error canceling booking", error);
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
        navigate('/');
    };

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
                            <img src="https://via.placeholder.com/150" alt="User" />
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
                <h2>Upcoming Sessions</h2>
                {sessionsData.length > 0 ? (
                    <table>
                        <thead>
                        <tr>
                            <th>Date</th>
                            <th>Time</th>
                            <th>Topic</th>
                            <th>Tutor ID</th>
                            <th>Actions</th>
                        </tr>
                        </thead>
                        <tbody>
                        {sessionsData.map(session => {
                            // Debug: Log session data
                            console.log("Session data:", session);

                            // Ensure _date and other fields are present and valid
                            const sessionDate = new Date(session._date);
                            const formattedDate = sessionDate.toLocaleDateString();
                            const formattedStartTime = session.startTime || "N/A";
                            const formattedEndTime = session.endTime || "N/A";
                            const formattedTopic = session.topic || "No topic";
                            const formattedTutorId = session.tutorId || "No ID";

                            return (
                                <tr key={session.bookingId}>
                                    <td>{formattedDate}</td>
                                    <td>{`${formattedStartTime} - ${formattedEndTime}`}</td>
                                    <td>{formattedTopic}</td>
                                    <td>{formattedTutorId}</td>
                                    <td>
                                        <button onClick={() => handleCancelBooking(session.bookingId)}>
                                            Cancel Booking
                                        </button>
                                    </td>
                                </tr>
                            );
                        })}
                        </tbody>
                    </table>
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
