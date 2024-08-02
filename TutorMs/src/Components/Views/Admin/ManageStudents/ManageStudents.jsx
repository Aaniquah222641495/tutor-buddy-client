import React, { useState } from 'react';
import Modal from '../../../Common/Modals/Modal';
import AddStudentForm from '../../../Forms/Admin/AddStudentForm';
import '../manage.css';

const ManageStudents = () => {
    const [students, setStudents] = useState([
        { studentId: 'S001', firstName: 'John', lastName: 'Doe', phoneNumber: '123-456-7890', email: 'john@example.com' },
        { studentId: 'S002', firstName: 'Jane', lastName: 'Smith', phoneNumber: '098-765-4321', email: 'jane@example.com' }
    ]);
    const [showModal, setShowModal] = useState(false);
    const [selectedStudent, setSelectedStudent] = useState(null);

    const openModal = (student = null) => {
        setSelectedStudent(student); // Set the selected student for editing or null for adding
        setShowModal(true);
    };

    const closeModal = () => setShowModal(false);

    const handleAddStudent = (student) => {
        setStudents([...students, student]);
    };

    const handleEditStudent = (updatedStudent) => {
        setStudents(students.map(student =>
            student.studentId === updatedStudent.studentId ? updatedStudent : student
        ));
    };

    const handleDeleteStudent = (studentId) => {
        setStudents(students.filter(student => student.studentId !== studentId));
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
                        {students.map((student) => (
                            <tr key={student.studentId}>
                                <td>{student.studentId}</td>
                                <td>{student.firstName}</td>
                                <td>{student.lastName}</td>
                                <td>{student.phoneNumber}</td>
                                <td>{student.email}</td>
                                <td>
                                    <button className='btn btn-warning' onClick={() => openModal(student)}>Edit</button>
                                    <button className='btn btn-danger' onClick={() => handleDeleteStudent(student.studentId)}>Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className='button-container'>
                <button className='btn btn-primary' onClick={() => openModal()}>Add Student</button>
            </div>
            {showModal && (
                <Modal
                    show={showModal}
                    onClose={closeModal}
                    FormComponent={AddStudentForm}
                    formProps={{
                        closeModal,
                        handleAddStudent,
                        handleEditStudent,
                        selectedStudent
                    }}
                />
            )}
        </div>
    );
};

export default ManageStudents;
