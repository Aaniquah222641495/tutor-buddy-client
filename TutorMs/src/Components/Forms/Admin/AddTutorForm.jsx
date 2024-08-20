import React, { useState, useEffect } from 'react';

const AddTutorForm = ({ closeModal, onAddTutor, selectedTutor, subjects }) => {
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
            setSubject(selectedTutor.subjectId); // Set the subjectId
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
        const newTutor = { 
            name, 
            lastName, 
            phoneNumber, 
            email, 
            password, 
            subjectId: subject // Use subjectId for the selected subject
        };
        onAddTutor(newTutor, selectedTutor ? selectedTutor.tutorId : null);
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
                <select
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    required
                >
                    <option value='' disabled>Select a subject</option>
                    {subjects.map(subject => (
                        <option key={subject.subjectId} value={subject.subjectId}>
                            {subject.subjectName}
                        </option>
                    ))}
                </select>
            </div>

            <button type="submit">{selectedTutor ? 'Save Changes' : 'Add Tutor'}</button>
            <button type="button" onClick={closeModal}>Cancel</button>
        </form>
    );
};

export default AddTutorForm;
