import React, { useState, useEffect } from 'react';


const AddStudentForm = ({ closeModal, handleAddStudent, handleEditStudent, selectedStudent }) => {
    const [studentId, setStudentId] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [email, setEmail] = useState('');

    useEffect(() => {
        if (selectedStudent) {
            setStudentId(selectedStudent.studentId);
            setFirstName(selectedStudent.firstName);
            setLastName(selectedStudent.lastName);
            setPhoneNumber(selectedStudent.phoneNumber);
            setEmail(selectedStudent.email);
        } else {
            setStudentId('');
            setFirstName('');
            setLastName('');
            setPhoneNumber('');
            setEmail('');
        }
    }, [selectedStudent]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const student = { studentId, firstName, lastName, phoneNumber, email };
        if (selectedStudent) {
            handleEditStudent(student);
        } else {
            handleAddStudent(student);
        }
        closeModal();
    };

    return (
        <form onSubmit={handleSubmit} className="form">
            <h2 className="sub-header">{selectedStudent ? 'Edit Student' : 'Add New Student'}</h2>
            <div className='form-group'>
                <label htmlFor="studentId">Student Number</label>
                <input
                    type='text'
                    id="studentId"
                    value={studentId}
                    onChange={(e) => setStudentId(e.target.value)}
                    required
                    disabled={!!selectedStudent} // Disable if editing
                />
            </div>
            <div className='form-group'>
                <label htmlFor="firstName">First Name</label>
                <input
                    type='text'
                    id="firstName"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    required
                />
            </div>
            <div className='form-group'>
                <label htmlFor="lastName">Last Name</label>
                <input
                    type='text'
                    id="lastName"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    required
                />
            </div>
            <div className='form-group'>
                <label htmlFor="phoneNumber">Phone Number</label>
                <input
                    type='tel'
                    id="phoneNumber"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    required
                />
            </div>
            <div className='form-group'>
                <label htmlFor="email">Email</label>
                <input
                    type='email'
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
            </div>
            <button type="submit" className='btn btn-primary'>
                {selectedStudent ? 'Update Student' : 'Add Student'}
            </button>
        </form>
    );
};

export default AddStudentForm;
