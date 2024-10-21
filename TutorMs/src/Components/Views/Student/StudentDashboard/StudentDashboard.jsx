import { useState, useEffect } from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '../StudentDashboard.css';
import StudentNavbar from '../../../Common/Navbar/StudentNavbar';
import { useNavigate } from 'react-router-dom';
import StarRating from '../ViewTutors/StarRating';
import EditProfileModal from '../StudentDashboard/EditProfileModel';
import { StudentApi, TutorApi, ReviewApi, BookingApi } from 'student_tutor_booking_management_system';


const Dashboard = () => {
    const [studentData, setStudentData] = useState(null);
    const [tutorsData, setTutorsData] = useState([]);
    const [reviewsData, setReviewsData] = useState([]);
    const [sessionsData, setSessionsData] = useState([]);
    const [searchError, setSearchError] = useState('');
    const [showEditModal, setShowEditModal] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchStudentData = async () => {
            try {
                const storedStudentData = sessionStorage.getItem('student');
                if (storedStudentData) {
                    const student = JSON.parse(storedStudentData);
                    console.log("Stored student data:", student);
                    setStudentData(student);
                    fetchUpcomingSessions(student.studentId); // Automatically fetch sessions
                } else {
                    console.error("No student data found in sessionStorage");
                }
            } catch (error) {
                console.error("Error fetching student data", error);
            }
        };

        const fetchTutorsData = () => {
            try {
                const tutorApi = new TutorApi();
                tutorApi.getAllTutors((error, data) => {
                    if (error) {
                        console.error("Error fetching tutors data", error);
                    } else {
                        setTutorsData(data);
                        fetchReviewsForTutors(data.map(tutor => tutor.tutorId)); // Use tutorId
                    }
                });
            } catch (error) {
                console.error("Error fetching tutors data", error);
            }
        };

        const fetchReviewsForTutors = (tutorIds) => {
            const reviewApi = new ReviewApi();
            let allReviews = [];

            tutorIds.forEach((tutorId, index) => {
                console.log(`Fetching reviews for Tutor ID: ${tutorId}`); // Debug log
                reviewApi.getAllReviewsByTutor(tutorId, (error, data) => {
                    if (error) {
                        console.error(`Error fetching reviews for tutor ${tutorId}`, error);
                    } else {
                        allReviews = [...allReviews, ...data];
                    }
                    // After the last request, set the reviews data
                    if (index === tutorIds.length - 1) {
                        setReviewsData(allReviews);
                    }
                });
            });
        };

        fetchStudentData();
        fetchTutorsData();
    }, []);

    const handleEditProfile = () => {
        setShowEditModal(true);
    };

    const handleCloseModal = () => {
        setShowEditModal(false);
    };

    const handleUpdateStudent = (updatedStudent) => {
        setStudentData(updatedStudent);
        sessionStorage.setItem('student', JSON.stringify(updatedStudent)); // Update session storage
    };

    const fetchUpcomingSessions = (id) => {
        try {
            const bookingApi = new BookingApi();
            console.log("Fetching bookings for student ID:", id);
            bookingApi.getAllBookingsByStudent(id, (error, data) => {
                if (error) {
                    console.error("Error fetching bookings:", error);
                    setSearchError("Error fetching bookings.");
                } else {
                    console.log("Fetched bookings:", data);
                    setSessionsData(data);
                    setSearchError('');
                }
            });
        } catch (error) {
            console.error("Error fetching bookings:", error);
            setSearchError("Error fetching bookings.");
        }
    };

    const handleCancelBooking = (bookingId) => {
        try {
            const bookingApi = new BookingApi();
            console.log("Attempting to cancel booking with ID:", bookingId);
            bookingApi.deleteBooking(bookingId, (error, data, response) => {
                if (error) {
                    console.error("Error canceling booking:", error, response);
                    alert(`Failed to cancel booking. Please try again later. Error: ${error}`);
                } else {
                    console.log("Successfully canceled booking with ID:", bookingId);
                    setSessionsData(prevSessions => prevSessions.filter(session => session.bookingId !== bookingId));
                    alert("Booking canceled successfully.");
                }
            });
        } catch (error) {
            console.error("Error canceling booking:", error);
            alert("An unexpected error occurred. Please try again.");
        }
    };


    const tutorsWithRatings = tutorsData.map(tutor => {
        const tutorReviews = reviewsData.filter(review => review.tutorId === tutor.tutorId); // Use tutorId
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
                            <button onClick={handleEditProfile}>Edit Profile</button>
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
                                <th>Subjects</th>
                                <th>Rating</th>
                            </tr>
                        </thead>
                        <tbody>
                            {tutorsWithRatings.map(tutor => (
                                <tr key={tutor.tutorId}> {/* Use tutorId */}
                                    <td>{tutor.name}</td>
                                    <td>{tutor.phoneNumber}</td>
                                    <td>{tutor.email}</td>
                                    <td>{(tutor.assignedSubjects || []).map(subject => subject.subjectName).join(', ') || 'N/A'}</td>
                                    <td><StarRating rating={tutor.rating} /></td>  {/* Use the StarRating component */}
                                </tr>
                            ))}
                        </tbody>
                    </table>

                    <button className="subject-button" onClick={() => navigate('/subjects')}>View Subjects</button>
                </section>
            </div>

            <section className="sessions-section">
                <div className="sessions-list">
                    <h1>Upcoming Sessions</h1>
                    <ul>
                        {sessionsData.map(session => (
                            <li key={session.bookingId}>
                                <h3>Session ID: {session.bookingId}</h3>
                                <p><strong>Date:</strong> {session.bookingDate.toLocaleDateString("it-IT") || 'N/A'}</p>
                                <p><strong>Start time:</strong> {session.startTime || 'N/A'}</p>
                                <p><strong>Subject:</strong> {session.subjectId || 'N/A'}</p>
                                <p><strong>Topic:</strong> {session.topic || 'N/A'}</p>
                                <p><strong>Tutor:</strong> {session.tutorId || 'N/A'}</p>
                                <p><strong>Location:</strong> {session.locationId || 'N/A'}</p>
                                <button onClick={() => handleCancelBooking(session.bookingId)}>Cancel Booking</button>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            {/* Include the Edit Profile Modal */}
            {studentData && (
                <EditProfileModal 
                    show={showEditModal} 
                    handleClose={handleCloseModal} 
                    studentData={studentData} 
                    onUpdate={handleUpdateStudent} 
                />
            )}

        </div>
    );
};

export default Dashboard;
