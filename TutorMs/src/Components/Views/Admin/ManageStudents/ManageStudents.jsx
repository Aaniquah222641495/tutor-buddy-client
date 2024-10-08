import React, { useState, useEffect } from 'react';
import Modal from '../../../Common/Modals/Modal';
import AddStudentForm from '../../../Forms/Admin/AddStudentForm';
import { StudentApi } from 'student_tutor_booking_management_system';
import '../manage.css';
import { useOutletContext } from 'react-router-dom';

const ManageStudents = () => {
    const [students, setStudents] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [selectedStudent, setSelectedStudent] = useState(null);
    const { searchQuery } = useOutletContext();

    const studentApi = new StudentApi();

    // Fetch students from the database when the component mounts
    useEffect(() => {
        const fetchStudents = () => {
            studentApi.getAllStudents((error, data, response) => {
                if (error) {
                    console.error('Error fetching students:', error);
                } else {
                    setStudents(data);
                }
            });
        };

        fetchStudents();
    }, [studentApi]);

    const openModal = (student = null) => {
        setSelectedStudent(student); // Set the selected student for editing or null for adding
        setShowModal(true);
    };

    const closeModal = () => setShowModal(false);

    const handleAddStudent = (student) => {
        studentApi.addStudent(student, (error, data, response) => {
            if (error) {
                console.error('Error adding student:', error);
            } else {
                setStudents([...students, data]);
                closeModal();
            }
        });
    };

    const handleEditStudent = (updatedStudent) => {
        studentApi.updateStudent(updatedStudent, updatedStudent.studentId, (error, data, response) => {
            if (error) {
                console.error('Error updating student:', error);
            } else {
                setStudents(students.map(student =>
                    student.studentId === updatedStudent.studentId ? data : student
                ));
                closeModal();
            }
        });
    };

    const handleDeleteStudent = (studentId) => {
        studentApi.deleteStudent(studentId, (error, data, response) => {
            if (error) {
                console.error('Error deleting student:', error);
            } else {
                setStudents(students.filter(student => student.studentId !== studentId));
            }
        });
    };

    // Filter functions
    const filterData = (data, fields) => {
        return data.filter(item =>
            fields.some(field =>
                item[field]?.toString().toLowerCase().includes(searchQuery.toLowerCase())
            )
        );
    };

    const filteredStudents = filterData(students, ['studentNumber', 'name', 'lastName', 'phoneNumber', 'email']);

    return (
        <div className='section'>
            <h4 className='sub-header'>Manage Students
                <button className='btn btn-primary' onClick={() => openModal()}>Add Student</button>
            </h4>
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
                        {filteredStudents.map((student) => (
                            <tr key={student.studentId}>
                                <td>{student.studentNumber}</td>
                                <td>{student.name}</td>
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
                {/* Additional buttons or content can be added here */}
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
