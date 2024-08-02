import React, { useState } from 'react';
import Modal from '../../../Common/Modals/Modal';
import AddVenueForm from '../../../Forms/Admin/AddVenueForm';
import '../manage.css';

const ManageVenues = () => {
    const [venues, setVenues] = useState([
        { venueId: '1', room: '2.22', building: 'Library' },
        { venueId: '2', room: 'Lab 1.1', building: 'Engineering Building' }
    ]);

    const [showModal, setShowModal] = useState(false);

    const handleAddVenue = (venue) => {
        setVenues([...venues, venue]);
    };

    const handleDeleteVenue = (venueId) => {
        setVenues(venues.filter(venue => venue.venueId !== venueId));
    };

    const handleEditVenue = (venueId) => {
        // Logic for editing venue
        console.log(`Edit venue with ID: ${venueId}`);
    };

    return (
        <div className='section'>
            <h4 className='sub-header'>Manage Venues</h4>
            <div className='table-container'>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>VenueID</th>
                            <th>Room</th>
                            <th>Building</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {venues.map((venue) => (
                            <tr key={venue.venueId}>
                                <td>{venue.venueId}</td>
                                <td>{venue.room}</td>
                                <td>{venue.building}</td>
                                <td>
                                    <button
                                        className='btn btn-warning'
                                        onClick={() => handleEditVenue(venue.venueId)}
                                    >
                                        Edit
                                    </button>
                                    <button
                                        className='btn btn-danger'
                                        onClick={() => handleDeleteVenue(venue.venueId)}
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className='button-container'>
                <button
                    className='btn btn-primary'
                    onClick={() => setShowModal(true)}
                >
                    Add Venue
                </button>
            </div>
            {showModal && (
                <Modal
                    show={showModal}
                    onClose={() => setShowModal(false)}
                    FormComponent={AddVenueForm}
                    formProps={{ handleAddVenue, closeModal: () => setShowModal(false) }}
                />
            )}
        </div>
    );
};

export default ManageVenues;
