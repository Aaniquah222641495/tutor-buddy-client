import React, { useState, useEffect } from 'react';

const AddVenueForm = ({ handleAddVenue, closeModal, selectedVenue }) => {
    const [venueId, setVenueId] = useState('');
    const [room, setRoom] = useState('');
    const [building, setBuilding] = useState('');

    useEffect(() => {
        if (selectedVenue) {
            // If selectedVenue is passed, populate the form fields with its data
            setVenueId(selectedVenue.venueId);
            setRoom(selectedVenue.room);
            setBuilding(selectedVenue.building);
        } else {
            // Reset the form if no selectedVenue is provided
            setVenueId('');
            setRoom('');
            setBuilding('');
        }
    }, [selectedVenue]);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission
        handleAddVenue({ venueId, room, building });
        closeModal();
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>{selectedVenue ? 'Edit Venue' : 'Add New Venue'}</h2>
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
            <button type='submit'>{selectedVenue ? 'Save Changes' : 'Add Venue'}</button>
        </form>
    );
};

export default AddVenueForm;
