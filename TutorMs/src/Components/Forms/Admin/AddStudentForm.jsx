import React, { useState, useEffect } from 'react';

const AddStudentForm = ({ closeModal, handleAddStudent, handleEditStudent, selectedStudent }) => {
    const [studentId, setStudentId] = useState('');
    const [name, setFirstName] = useState('');  
    const [lastName, setLastName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [email, setEmail] = useState('');
    const [studentNumber, setStudentNumber] = useState('');
    const [password, setPassword] = useState(''); 

    useEffect(() => {
        if (selectedStudent) {
            setStudentId(selectedStudent.studentId);
            setFirstName(selectedStudent.name);  
            setLastName(selectedStudent.lastName);
            setPhoneNumber(selectedStudent.phoneNumber);
            setEmail(selectedStudent.email);
            setStudentNumber(selectedStudent.studentNumber);
            
        } else {
            setStudentId('');
            setFirstName('');
            setLastName('');
            setPhoneNumber('');
            setEmail('');
            setStudentNumber('');
            setPassword(''); // Clear the password field when adding new
        }
    }, [selectedStudent]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const student = { studentId, name, lastName, phoneNumber, email, studentNumber, password }; 
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
                <label htmlFor="studentNumber">Student Number</label>
                <input
                    type='text'
                    id="studentNumber"
                    value={studentNumber}  
                    onChange={(e) => setStudentNumber(e.target.value)}
                    required
                    disabled={!!selectedStudent} // Disable if editing
                />
            </div>
            <div className='form-group'>
                <label htmlFor="name">First Name</label>
                <input
                    type='text'
                    id="name"
                    value={name}  
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
            {!selectedStudent && ( // Show password field only when adding a new student
                <div className='form-group'>
                    <label htmlFor="password">Password</label>
                    <input
                        type='password'
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
            )}
            <button type="submit" className='btn btn-primary'>
                {selectedStudent ? 'Update Student' : 'Add Student'}
            </button>
        </form>
    );
};

export default AddStudentForm;
