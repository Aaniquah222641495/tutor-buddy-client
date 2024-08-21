import React, { useState, useEffect } from 'react';
import '../manage.css';
import Modal from '../../../Common/Modals/Modal';
import AddTutorForm from '../../../Forms/Admin/AddTutorForm';
import { TutorApi, SubjectApi } from 'student_tutor_booking_management_system';
import { useOutletContext } from 'react-router-dom';

const ManageTutors = () => {
    const [tutors, setTutors] = useState([]);
    const [subjects, setSubjects] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedTutor, setSelectedTutor] = useState(null);
    const { searchQuery } = useOutletContext();

    const tutorApi = new TutorApi();
    const subjectApi = new SubjectApi();

    useEffect(() => {
        // Fetch all tutors when the component mounts
        tutorApi.getAllTutors((error, data) => {
            if (error) {
                console.error('Error fetching tutors:', error);
            } else {
                setTutors(data);
            }
        });

        // Fetch all subjects when the component mounts
        subjectApi.getAllSubject((error, data) => {
            if (error) {
                console.error('Error fetching subjects:', error);
            } else {
                setSubjects(data);
            }
        });
    }, [tutorApi, subjectApi]);

    const handleAddTutor = (newTutor) => {
        const assignedSubjects = newTutor.assignedSubjects.map(subjectId => {
            return subjects.find(subject => subject.subjectId === subjectId);
        });

        const tutorData = {
            ...newTutor,
            assignedSubjects
        };

        if (selectedTutor) {
            // Update an existing tutor
            tutorApi.updateTutor(tutorData, selectedTutor.tutorId, (error, updatedTutor) => {
                if (error) {
                    console.error('Error updating tutor:', error);
                    alert('Error updating tutor. Please check the console for details.');
                } else {
                    setTutors(tutors.map(tutor => (tutor.tutorId === selectedTutor.tutorId ? updatedTutor : tutor)));
                    setIsModalOpen(false);
                    setSelectedTutor(null);
                }
            });
        } else {
            // Add a new tutor
            tutorApi.addTutor(tutorData, (error, addedTutor) => {
                if (error) {
                    console.error('Error adding tutor:', error);
                    alert('Error adding tutor. Please check the console for details.');
                } else {
                    setTutors([...tutors, addedTutor]);
                    setIsModalOpen(false);
                    setSelectedTutor(null);
                }
            });
        }
    };

    const handleDeleteTutor = (tutorId) => {
        tutorApi.deleteTutor(tutorId, (error) => {
            if (error) {
                console.error('Error deleting tutor:', error);
            } else {
                setTutors(tutors.filter(tutor => tutor.tutorId !== tutorId));
            }
        });
    };

    const handleTutorChange = (tutorId) => {
        const tutor = tutors.find(tutor => tutor.tutorId === tutorId);
        setSelectedTutor(tutor);
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setSelectedTutor(null);
    };

    // Filter functions
    const filterData = (data, fields) => {
        return data.filter(item =>
            fields.some(field =>
                item[field]?.toString().toLowerCase().includes(searchQuery.toLowerCase())
            )
        );
    };

    const filteredTutors = filterData(tutors, ['tutorId', 'name', 'lastName', 'phoneNumber', 'email']);

    return (
        <div className='section'>
            <h4 className='sub-header'>Manage Tutors
                <button className='btn btn-primary' onClick={() => setIsModalOpen(true)}>Add Tutor</button>
            </h4>
            <div className='table-container'>
                {filteredTutors.length > 0 ? (
                    <table className='table'>
                        <thead>
                            <tr>
                                <th>Tutor ID</th>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Phone Number</th>
                                <th>Email</th>
                                <th>Subjects</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredTutors.map(tutor => (
                                <tr key={tutor.tutorId}>
                                    <td>{tutor.tutorId}</td>
                                    <td>{tutor.name}</td>
                                    <td>{tutor.lastName}</td>
                                    <td>{tutor.phoneNumber}</td>
                                    <td>{tutor.email}</td>
                                    <td>
                                        {(tutor.assignedSubjects || []).map(subject => subject.subjectName).join(', ')}
                                    </td>
                                    <td>
                                        <button className='btn btn-warning' onClick={() => handleTutorChange(tutor.tutorId)}>Edit</button>
                                        <button className='btn btn-danger' onClick={() => handleDeleteTutor(tutor.tutorId)}>Delete</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                ) : (
                    <p>No tutors available. Add a tutor to get started.</p>
                )}
            </div>
            {isModalOpen && (
                <Modal 
                    show={isModalOpen} 
                    onClose={handleCloseModal} 
                    FormComponent={AddTutorForm} 
                    formProps={{ 
                        onAddTutor: handleAddTutor,
                        selectedTutor,
                        subjects // Pass subjects to the form
                    }} 
                />
            )}
        </div>
    );
};

export default ManageTutors;
