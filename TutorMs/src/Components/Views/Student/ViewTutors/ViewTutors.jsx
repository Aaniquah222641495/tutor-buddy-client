import React, { useState, useEffect } from 'react';
import BookingModal from '../MakeBooking/MakeBooking';
import '../ViewTutors/ViewTutors.css';
import StudentNavbar from '../../../Common/Navbar/StudentNavbar';
import { TutorApi, ReviewApi } from 'student_tutor_booking_management_system';
import StarRating from '../ViewTutors/StarRating'; // Import the StarRating component

const Tutors = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedTutor, setSelectedTutor] = useState(null);
    const [tutors, setTutors] = useState([]);
    const [tutorReviews, setTutorReviews] = useState({}); // Holds reviews keyed by tutor ID
    const [searchQuery, setSearchQuery] = useState(''); // Holds the search query

    useEffect(() => {
        const fetchTutorsAndReviews = async () => {
            const tutorApi = new TutorApi();
            const reviewApi = new ReviewApi();

            try {
                const fetchedTutors = await new Promise((resolve, reject) => {
                    tutorApi.getAllTutors((error, data) => {
                        if (error) reject(error);
                        else resolve(data);
                    });
                });

                setTutors(fetchedTutors);

                // Fetch reviews for each tutor
                const reviewsData = {};
                for (const tutor of fetchedTutors) {
                    const tutorId = tutor.tutorId; // Use tutorId instead of id
                    const reviews = await new Promise((resolve, reject) => {
                        reviewApi.getAllReviewsByTutor(tutorId, (error, data) => {
                            if (error) reject(error);
                            else resolve(data);
                        });
                    });
                    reviewsData[tutorId] = reviews;
                }
                setTutorReviews(reviewsData);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchTutorsAndReviews();
    }, []);

    const handleBookingClick = (tutor) => {
        setSelectedTutor(tutor);
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    const calculateAverageRating = (reviews) => {
        if (!reviews.length) return 0;
        const totalRating = reviews.reduce((sum, review) => sum + review.rating, 0);
        return (totalRating / reviews.length).toFixed(1); // Return a fixed decimal rating
    };

    // Filter tutors based on the search query
    const filteredTutors = tutors.filter((tutor) =>
        `${tutor.name} ${tutor.lastName}`.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="tutors-page">
            <StudentNavbar />

            <header className="tutors-header">
                <h1>Tutors</h1>
                <input
                    type="text"
                    placeholder="Search tutors by name"
                    className="search-bar"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)} // Update search query state on change
                />
                <button className="search-button">Search</button>
            </header>

            <section className="tutor-list">
                {filteredTutors.map((tutor) => {
                    const reviews = tutorReviews[tutor.tutorId] || []; // Use tutorId
                    const averageRating = calculateAverageRating(reviews);

                    return (
                        <div className="tutor-card" key={tutor.email}>
                            <h2>{tutor.name} {tutor.lastName}</h2>
                            <p>Email: {tutor.email}</p>
                            <p>Phone: {tutor.phoneNumber}</p>
                            <p>Rating: <StarRating rating={averageRating} /></p> {/* Added StarRating component */}

                            <button onClick={() => handleBookingClick(tutor)}>Book Now</button>
                        </div>
                    );
                })}
            </section>

            <BookingModal
                isOpen={isModalOpen}
                onClose={handleCloseModal}
                tutor={selectedTutor}
            />
        </div>
    );
};

export default Tutors;
