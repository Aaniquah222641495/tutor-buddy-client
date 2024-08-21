import React from 'react';

function Availability() {
  const availability = [
    {
      day: 'Monday',
      time: '10:00 AM - 11:00 AM',
      location: 'Room 101'
    },
    {
      day: 'Tuesday',
      time: '2:00 PM - 3:00 PM',
      location: 'Room 202'
    }
  ];

  return (
    <div className="availability">
      <h3>Availability</h3>
      <div className="availability-container">
        {availability.map((slot, index) => (
          <div key={index} className="availability-card">
            <p>{slot.day}</p>
            <p>Time: {slot.time}</p>
            <p>Location: {slot.location}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Availability;
