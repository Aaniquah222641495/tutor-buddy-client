import React, { useState } from 'react';
import '../manage.css';
import Modal from '../../../Common/Modals/Modal';
import AddTutorForm from '../../../Forms/Admin/AddTutorForm';

const ManageTutors = () => {
    const [tutors, setTutors] = useState([
        { id: 1, firstName: 'John', lastName: 'Doe', phoneNumber: '1234567891', email: 'john.doe@example.com', subject: 'Applications Development 2' },
        { id: 2, firstName: 'Jane', lastName: 'Doe', phoneNumber: '1234567899', email: 'jane.smith@example.com', subject: 'Applications Development Fundamentals 2' },
    ]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedTutor, setSelectedTutor] = useState(null);

    const handleAddTutor = (newTutor) => {
        if (selectedTutor) {
            setTutors(tutors.map(tutor => (tutor.id === selectedTutor.id ? { ...newTutor, id: selectedTutor.id } : tutor)));
        } else {
            setTutors([...tutors, { ...newTutor, id: tutors.length + 1 }]);
        }
        setIsModalOpen(false);
        setSelectedTutor(null);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setSelectedTutor(null);
    };

    const handleDeleteTutor = (id) => {
        setTutors(tutors.filter(tutor => tutor.id !== id));
    };

    const handleTutorChange = (id) => {
        const tutor = tutors.find(tutor => tutor.id === id);
        setSelectedTutor(tutor);
        setIsModalOpen(true);
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
                <div className='button-container'>
                    <button className='btn btn-primary' onClick={() => setIsModalOpen(true)}>Add Tutor</button>
                </div>
            </div>
            {isModalOpen && (
                <Modal 
                    show={isModalOpen} 
                    onClose={handleCloseModal} 
                    FormComponent={AddTutorForm} 
                    formProps={{ 
                        onAddTutor: handleAddTutor,
                        selectedTutor 
                    }} 
                />
            )}
        </div>
    );
};

export default ManageTutors;
