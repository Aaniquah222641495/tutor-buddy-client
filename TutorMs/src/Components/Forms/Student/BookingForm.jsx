import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './bookingForm.css';

const BookingForm = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [preferredDate, setPreferredDate] = useState(new Date());
    const [startTime, setStartTime] = useState('08:00');
    const [endTime, setEndTime] = useState('10:00');
    const [preferredVenue, setPreferredVenue] = useState('');
    const [errors, setErrors] = useState('');

    const venues = [
        'Library',
        'Lab 1.1',
        'Lab 2.2',
        'Lab 3.3'
    ];

    const timeSlots = [];
    for (let hour = 8; hour <= 17; hour += 2) {
        const hourFormatted = hour < 10 ? `0${hour}` : hour;
        timeSlots.push(`${hourFormatted}:00`);
    }

    const validateTimes = () => {
        const [startHour, startMinute] = startTime.split(':').map(Number);
        const [endHour, endMinute] = endTime.split(':').map(Number);

        const start = new Date();
        start.setHours(startHour);
        start.setMinutes(startMinute);

        const end = new Date();
        end.setHours(endHour);
        end.setMinutes(endMinute);

        if (end <= start) {
            setErrors('End time must be at least 2 hours after start time.');
            return false;
        }
        if ((end - start) < 2 * 60 * 60 * 1000) { // 2 hours in milliseconds
            setErrors('End time must be at least 2 hours after start time.');
            return false;
        }
        setErrors('');
        return true;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateTimes()) {
            // Handle form submission logic
            console.log({
                firstName,
                lastName,
                email,
                phoneNumber,
                preferredDate,
                startTime,
                endTime,
                preferredVenue,
            });
        }
    };

    return (
        <form onSubmit={handleSubmit} className='booking-form'>
            <h2>Book a Tutoring Session</h2>
            <div className='form-group'>
                <label>First Name</label>
                <input
                    type="text"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    required
                />
            </div>

            <div className='form-group'>
                <label>Last Name</label>
                <input
                    type="text"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    required
                />
            </div>

            <div className='form-group'>
                <label>Email</label>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
            </div>

            <div className='form-group'>
                <label>Phone Number</label>
                <input
                    type="tel"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    required
                />
            </div>

            <div className='form-group'>
                <label>Preferred Date</label>
                <DatePicker
                    selected={preferredDate}
                    onChange={(date) => setPreferredDate(date)}
                    dateFormat="yyyy/MM/dd"
                    required
                />
            </div>

            <div className='form-group'>
                <label>Start Time</label>
                <select
                    value={startTime}
                    onChange={(e) => setStartTime(e.target.value)}
                    required
                >
                    {timeSlots.map((slot, index) => (
                        <option key={index} value={slot}>{slot}</option>
                    ))}
                </select>
            </div>

            <div className='form-group'>
                <label>End Time</label>
                <select
                    value={endTime}
                    onChange={(e) => setEndTime(e.target.value)}
                    required
                >
                    {timeSlots.map((slot, index) => (
                        <option key={index} value={slot}>{slot}</option>
                    ))}
                </select>
            </div>

            {errors && <p className='error-message'>{errors}</p>}

            <div className='form-group'>
                <label>Venue</label>
                <select
                    value={preferredVenue}
                    onChange={(e) => setPreferredVenue(e.target.value)}
                    required
                >
                    <option value='' disabled>Select a venue</option>
                    {venues.map((venue, index) => (
                        <option key={index} value={venue}>{venue}</option>
                    ))}
                </select>
            </div>

            <button type='submit'>Book Now</button>
        </form>
    );
}

export default BookingForm;
