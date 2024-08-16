import React, { useState, useEffect } from 'react';

const AddTutorForm = ({ closeModal, onAddTutor, selectedTutor }) => {
    const [name, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [subject, setSubject] = useState('');

    useEffect(() => {
        if (selectedTutor) {
            setFirstName(selectedTutor.name);
            setLastName(selectedTutor.lastName);
            setPhoneNumber(selectedTutor.phoneNumber);
            setEmail(selectedTutor.email);
            setPassword(selectedTutor.password);
            setSubject(selectedTutor.subject);
        } else {
            setFirstName('');
            setLastName('');
            setPhoneNumber('');
            setEmail('');
            setPassword('');
            setSubject('');
        }
    }, [selectedTutor]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const newTutor = { name, lastName, phoneNumber, email, password, subject };
        onAddTutor(newTutor);
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>{selectedTutor ? 'Edit Tutor' : 'Add New Tutor'}</h2>
            <div className='form-group'>
                <label>First Name</label>
                <input
                    type='text'
                    value={name}
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
                <label>Subject</label>
                <input
                    type='text'
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    required
                />
            </div>

            <button type="submit">{selectedTutor ? 'Save Changes' : 'Add Tutor'}</button>
        </form>
    );
};

export default AddTutorForm;
