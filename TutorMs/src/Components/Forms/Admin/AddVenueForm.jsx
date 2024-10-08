import React, { useState, useEffect } from 'react';

const AddVenueForm = ({ handleAddVenue, closeModal, selectedVenue }) => {
    const [venue, setVenue] = useState({
        room: '',
        building: ''
    });

    useEffect(() => {
        // If editing a venue, populate the form with the existing data
        if (selectedVenue) {
            setVenue({
                room: selectedVenue.room || '',
                building: selectedVenue.building || ''
            });
        } else {
            // Reset fields if no venue is selected
            setVenue({
                room: '',
                building: ''
            });
        }
    }, [selectedVenue]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setVenue({
            ...venue,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        handleAddVenue(venue); // Call the parent function to handle adding the venue
        closeModal(); // Close the modal after submission
    };

    return (
        <form onSubmit={handleSubmit} className="form">
            <h2 className="sub-header">{selectedVenue ? 'Edit Venue' : 'Add New Venue'}</h2>
            <div className="form-group">
                <label htmlFor="room">Room</label>
                <input
                    type="text"
                    id="room"
                    name="room"
                    className="form-control"
                    value={venue.room}
                    onChange={handleChange}
                    required
                />
            </div>
            <div className="form-group">
                <label htmlFor="building">Building</label>
                <input
                    type="text"
                    id="building"
                    name="building"
                    className="form-control"
                    value={venue.building}
                    onChange={handleChange}
                    required
                />
            </div>
            <div className="button-container">
                <button type="submit" className="btn btn-primary">
                    {selectedVenue ? 'Update Venue' : 'Add Venue'}
                </button>
                <button type="button" className="btn btn-secondary" onClick={closeModal}>
                    Cancel
                </button>
            </div>
        </form>
    );
};

export default AddVenueForm;
