import React, { useState } from 'react';

const AddVenueForm = ({ handleAddVenue, closeModal }) => {
    const [venueId, setVenueId] = useState('');
    const [room, setRoom] = useState('');
    const [building, setBuilding] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        handleAddVenue({ venueId, room, building });
        closeModal();
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Add New Venue</h2>
            <div className='form-group'>
                <label>Venue ID</label>
                <input
                    type='text'
                    value={venueId}
                    onChange={(e) => setVenueId(e.target.value)}
                    required
                />
            </div>
            <div className='form-group'>
                <label>Room</label>
                <input
                    type='text'
                    value={room}
                    onChange={(e) => setRoom(e.target.value)}
                    required
                />
            </div>
            <div className='form-group'>
                <label>Building</label>
                <input
                    type='text'
                    value={building}
                    onChange={(e) => setBuilding(e.target.value)}
                    required
                />
            </div>
            <button type='submit'>Add Venue</button>
        </form>
    );
};

export default AddVenueForm;
