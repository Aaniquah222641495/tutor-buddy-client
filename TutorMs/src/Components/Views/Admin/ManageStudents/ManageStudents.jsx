
import React, { useState } from 'react';
import Modal from '../../../Common/Modals/Modal';
import AddStudentForm from '../../../Forms/Admin/AddStudentForm';
import '../manage.css';


const ManageStudents = () => {
    const [students, setStudents] = useState([
        // Example students data
        { studentId: 'S001', firstName: 'John', lastName: 'Doe', phoneNumber: '123-456-7890', email: 'john@example.com' },
        { studentId: 'S002', firstName: 'Jane', lastName: 'Smith', phoneNumber: '098-765-4321', email: 'jane@example.com' }
    ]);
    const [showModal, setShowModal] = useState(false);
    const [selectedStudent, setSelectedStudent] = useState(null);

    const openModal = () => {
        setSelectedStudent(null); // Ensure no student is selected when adding a new one
        setShowModal(true);
    };

    const closeModal = () => setShowModal(false);

    const handleAddStudent = (student) => {
        setStudents([...students, student]);
    };

    const handleEditStudent = (index) => {
        const studentToEdit = students[index];
        setSelectedStudent({ ...studentToEdit, index });
        setShowModal(true);
    };

    const handleDeleteStudent = (index) => {
        const updatedStudents = students.filter((_, i) => i !== index);
        setStudents(updatedStudents);
    };

    return (
        <div className='section'>
           <h4 className='sub-header'>Manage Students</h4>
            <div className='table-container'>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>Student Number</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Phone Number</th>
                            <th>Email</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {students.map((student, index) => (
                            <tr key={index}>
                                <td>{student.studentId}</td>
                                <td>{student.firstName}</td>
                                <td>{student.lastName}</td>
                                <td>{student.phoneNumber}</td>
                                <td>{student.email}</td>
                                <td>
                                <button className='btn btn-warning' onClick={() => handleEditStudent(student.id)}>Edit</button>
                                <button className='btn btn-danger' onClick={() => handleDeleteStudent(student.id)}>Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className='button-container'>
                <button className='btn btn-primary' onClick={openModal} >Add Student</button>
            </div>
            <Modal show={showModal} onClose={closeModal} FormComponent={AddStudentForm} formProps={{ closeModal, handleAddStudent, selectedStudent }} />
        </div>
    );
};

export default ManageStudents;