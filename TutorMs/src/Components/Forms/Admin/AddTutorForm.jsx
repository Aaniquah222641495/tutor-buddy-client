import React, { useState } from 'react';

const AddTutorForm = ({ closeModal, onAddTutor }) => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [subject, setSubject] = useState(''); // Added state for subject

    const handleSubmit = (e) => {
        e.preventDefault();
        const newTutor = { firstName, lastName, phoneNumber, email, password, subject };
        onAddTutor(newTutor); // Call the callback to add the tutor
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Add New Tutor</h2>
            <div className='form-group'>
                <label>First Name</label>
                <input
                    type='text'
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    required
                />
            </div>

            <div className='form-group'>
                <label>Last Name</label>
                <input
                    type='text'
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    required
                />
            </div>

            <div className='form-group'>
                <label>Phone Number</label>
                <input
                    type='tel'
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    required
                />
            </div>

            <div className='form-group'>
                <label>Email</label>
                <input
                    type='email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
            </div>

            <div className='form-group'>
                <label>Password</label>
                <input
                    type='password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
            </div>

            <div className='form-group'>
                <label>Subject</label> {/* Added subject label */}
                <input
                    type='text'
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    required
                />
            </div>

            <button type="submit">Add Tutor</button>
        </form>
    );
};

export default AddTutorForm;
