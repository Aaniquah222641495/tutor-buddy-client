import React, { useState, useEffect } from 'react';
import Modal from '../../../Common/Modals/Modal';
import AddVenueForm from '../../../Forms/Admin/AddVenueForm';
import '../manage.css';
import { LocationApi } from 'student_tutor_booking_management_system';

const ManageVenues = () => {
    const [venues, setVenues] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [selectedVenue, setSelectedVenue] = useState(null);

    const locationApi = new LocationApi();

    useEffect(() => {
        // Fetch all venues when the component mounts
        locationApi.getAllLocations((error, data) => {
            if (error) {
                console.error('Error fetching venues:', error);
            } else {
                setVenues(data);
            }
        });
    }, []);

    const handleAddVenue = (venue) => {
        if (selectedVenue) {
            // Update an existing venue
            locationApi.updateLocation(venue, selectedVenue.ve, (error, data) => {
                if (error) {
                    console.error('Error updating venue:', error);
                } else {
                    setVenues(venues.map(v => (v.locationId === selectedVenue.locationId ? data : v)));
                    setShowModal(false);
                    setSelectedVenue(null);
                }
            });
        } else {
            // Add a new venue
           locationApi.addLocation(venue, (error, data) => {
                if (error) {
                    console.error('Error adding venue:', error);
                } else {
                    setVenues([...venues, data]);
                    setShowModal(false);
                    setSelectedVenue(null);
                }
            });
        }
    };

    const handleDeleteVenue = (locationId) => {
        locationApi.deleteLocation(locationId, (error) => {
            if (error) {
                console.error('Error deleting venue:', error);
            } else {
                setVenues(venues.filter(venue => venue.locationId !== locationId));
            }
        });
    };

    const handleEditVenue = (locationId) => {
        const venue = venues.find(v => v.locationId === locationId);
        setSelectedVenue(venue);
        setShowModal(true);
    };

    return (
        <div className='section'>
            <h4 className='sub-header'>Manage Venues</h4>
            <div className='table-container'>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>Venue ID</th>
                            <th>Room</th>
                            <th>Building</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {venues.map((venue) => (
                            <tr key={venue.locationId}>
                                <td>{venue.locationId}</td>
                                <td>{venue.room}</td>
                                <td>{venue.building}</td>
                                <td>
                                    <button
                                        className='btn btn-warning'
                                        onClick={() => handleEditVenue(venue.locationId)}
                                    >
                                        Edit
                                    </button>
                                    <button
                                        className='btn btn-danger'
                                        onClick={() => handleDeleteVenue(venue.locationId)}
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
                    onClick={() => {
                        setSelectedVenue(null); // Clear selection for adding new venue
                        setShowModal(true);
                    }}
                >
                    Add Venue
                </button>
            </div>
            {showModal && (
                <Modal
                    show={showModal}
                    onClose={() => setShowModal(false)}
                    FormComponent={AddVenueForm}
                    formProps={{ 
                        handleAddVenue, 
                        closeModal: () => setShowModal(false), 
                        selectedVenue 
                    }}
                />
            )}
        </div>
    );
};

export default ManageVenues;
