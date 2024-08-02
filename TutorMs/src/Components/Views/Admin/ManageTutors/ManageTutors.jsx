import React, { useState } from 'react';
import './manageTutors.css';

const ManageTutors = () => {
    const [tutors, setTutors] = useState([
        { id: 1, firstName: 'John', lastName: 'Doe', phoneNumber: '1234567891', email: 'john.doe@example.com', subject: 'Applications Development 2' },
        { id: 2, firstName: 'Jane', lastName: 'Doe', phoneNumber: '1234567899', email: 'jane.smith@example.com', subject: 'Applications Development Fundamentals 2' },
    ]);

    const handleAddTutor = () => {
        // Logic to add tutor; might involve opening a form/modal
    };

    const handleTutorChange = (id) => {
        // Logic to edit tutor; might involve opening a form/modal with current tutor details
    };

    const handleDeleteTutor = (id) => {
        setTutors(tutors.filter(tutor => tutor.id !== id));
    };

    return (
        <div className='section'>
            <h4 className='sub-header'>Manage Tutors</h4>
            <div className='table-container'>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>Tutor ID</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Phone Number</th>
                            <th>Email</th>
                            <th>Subject</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tutors.map(tutor => (
                            <tr key={tutor.id}>
                                <td>{tutor.id}</td>
                                <td>{tutor.firstName}</td>
                                <td>{tutor.lastName}</td>
                                <td>{tutor.phoneNumber}</td>
                                <td>{tutor.email}</td>
                                <td>{tutor.subject}</td>
                                <td>
                                    <button className='btn btn-warning' onClick={() => handleTutorChange(tutor.id)}>Edit</button>
                                    <button className='btn btn-danger' onClick={() => handleDeleteTutor(tutor.id)}>Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <button className='btn btn-primary' onClick={handleAddTutor}>Add Tutor</button>
            </div>
        </div>
    );
};

export default ManageTutors;
