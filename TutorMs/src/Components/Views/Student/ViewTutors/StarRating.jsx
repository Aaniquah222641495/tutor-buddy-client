import React from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './StarRating.css'; // Assuming you're adding custom CSS for stars here

const StarRating = ({ rating }) => {
    const fullStars = Math.floor(rating);  // Number of full stars
    const halfStar = rating % 1 !== 0;  // Determine if there's a half-star
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);  // Remaining empty stars

    return (
        <div className="star-rating">
            {[...Array(fullStars)].map((_, i) => (
                <i key={`full-${i}`} className="bi bi-star-fill star filled"></i>  // Full star
            ))}
            {halfStar && <i className="bi bi-star-half star filled"></i>}  
            {[...Array(emptyStars)].map((_, i) => (
                <i key={`empty-${i}`} className="bi bi-star star"></i>  // Empty star
            ))}
        </div>
    );
};

export default StarRating;
