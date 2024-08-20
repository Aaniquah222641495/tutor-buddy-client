import React, { useState, useEffect } from 'react';
import '../manage.css';
import Modal from '../../../Common/Modals/Modal';
import AddSubjectForm from '../../../Forms/Admin/AddSubjectForm';
import { SubjectApi } from 'student_tutor_booking_management_system';

const ManageSubjects = () => {
    const [subjects, setSubjects] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedSubject, setSelectedSubject] = useState(null);

    const subjectApi = new SubjectApi();

    useEffect(() => {
        // Fetch all subjects when the component mounts
        subjectApi.getAllSubject((error, data) => {
            if (error) {
                console.error('Error fetching subjects:', error);
            } else {
                setSubjects(data);
            }
        });
    }, []);

    const handleAddSubject = (newSubject) => {
        if (selectedSubject) {
            // Update an existing subject
            subjectApi.updateSubject(newSubject, selectedSubject.subjectId, (error, updatedSubject) => {
                if (error) {
                    console.error('Error updating subject:', error);
                } else {
                    setSubjects(subjects.map(subject => (subject.subjectId === selectedSubject.subjectId ? updatedSubject : subject)));
                    setIsModalOpen(false);
                    setSelectedSubject(null);
                }
            });
        } else {
            // Add a new subject
            subjectApi.addSubject(newSubject, (error, addedSubject) => {
                if (error) {
                    console.error('Error adding subject:', error);
                } else {
                    setSubjects([...subjects, addedSubject]);
                    setIsModalOpen(false);
                    setSelectedSubject(null);
                }
            });
        }
    };

    const handleDeleteSubject = (id) => {
        subjectApi.deleteSubject(id, (error) => {
            if (error) {
                console.error('Error deleting subject:', error);
            } else {
                setSubjects(subjects.filter(subject => subject.subjectId !== id));
            }
        });
    };

    const handleSubjectChange = (id) => {
        const subject = subjects.find(subject => subject.subjectId === id);
        setSelectedSubject(subject);
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setSelectedSubject(null);
    };

    return (
        <div className='section'>
            <h4 className='sub-header'>Manage Subjects</h4>
            <div className='table-container'>
                {subjects.length > 0 ? (
                    <table className='table'>
                        <thead>
                            <tr>
                                <th>Subject Code</th>
                                <th>Subject Name</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {subjects.map(subject => (
                                <tr key={subject.subjectId}>
                                    <td>{subject.subjectCode}</td>
                                    <td>{subject.subjectName}</td>
                                    <td>
                                        <button className='btn btn-warning' onClick={() => handleSubjectChange(subject.subjectId)}>Edit</button>
                                        <button className='btn btn-danger' onClick={() => handleDeleteSubject(subject.subjectId)}>Delete</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                ) : (
                    <p>No subjects available. Add a subject to get started.</p>
                )}
            </div>
            <div className='button-container'>
                <button className='btn btn-primary' onClick={() => setIsModalOpen(true)}>Add Subject</button>
            </div>
            {isModalOpen && (
                <Modal 
                    show={isModalOpen} 
                    onClose={handleCloseModal} 
                    FormComponent={AddSubjectForm} 
                    formProps={{ 
                        onAddSubject: handleAddSubject,
                        selectedSubject 
                    }} 
                />
            )}
        </div>
    );
};

export default ManageSubjects;
