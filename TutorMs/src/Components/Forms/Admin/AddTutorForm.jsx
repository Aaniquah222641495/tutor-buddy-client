import React, { useState, useEffect } from 'react';

const AddTutorForm = ({ closeModal, onAddTutor, selectedTutor, subjects = [] }) => {
    const [tutorData, setTutorData] = useState({
        name: '',
        lastName: '',
        phoneNumber: '',
        email: '',
        password: '',
        assignedSubjects: []
    });

    useEffect(() => {
        if (selectedTutor) {
            setTutorData({
                name: selectedTutor.name || '',
                lastName: selectedTutor.lastName || '',
                phoneNumber: selectedTutor.phoneNumber || '',
                email: selectedTutor.email || '',
                password: '', // Password should not be pre-filled for security reasons
                assignedSubjects: selectedTutor.assignedSubjects.map(sub => sub.subjectId) || []
            });
        } else {
            // Reset form for adding a new tutor
            setTutorData({
                name: '',
                lastName: '',
                phoneNumber: '',
                email: '',
                password: '',
                assignedSubjects: []
            });
        }
    }, [selectedTutor]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setTutorData({
            ...tutorData,
            [name]: value
        });
    };

    const handleSubjectChange = (e) => {
        const selectedSubjectId = Number(e.target.value);
        setTutorData({
            ...tutorData,
            assignedSubjects: [selectedSubjectId] // Update to a single selected subject
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Basic validation
        if (!tutorData.email.includes('@')) {
            alert('Please enter a valid email address.');
            return;
        }

        if (!/^\d{10}$/.test(tutorData.phoneNumber)) {
            alert('Please enter a valid phone number.');
            return;
        }

        onAddTutor(tutorData); // Call the parent component function
        closeModal(); // Close the modal after submission
    };

    return (
        <form onSubmit={handleSubmit} className="form">
            <h2 className="sub-header">{selectedTutor ? 'Edit Tutor' : 'Add New Tutor'}</h2>
            <div className='form-group'>
                <label htmlFor="name">First Name</label>
                <input 
                    type="text" 
                    name="name" 
                    value={tutorData.name} 
                    onChange={handleChange} 
                    required 
                />
            </div>
            <div className='form-group'>
                <label htmlFor="lastName">Last Name</label>
                <input 
                    type="text" 
                    name="lastName" 
                    value={tutorData.lastName} 
                    onChange={handleChange} 
                    required 
                />
            </div>
            <div className='form-group'>
                <label htmlFor="phoneNumber">Phone Number</label>
                <input 
                    type="tel" 
                    name="phoneNumber" 
                    value={tutorData.phoneNumber} 
                    onChange={handleChange} 
                    required 
                />
            </div>
            <div className='form-group'>
                <label>Email:</label>
                <input 
                    type="email" 
                    name="email" 
                    value={tutorData.email} 
                    onChange={handleChange} 
                    required 
                />
            </div>
            {!selectedTutor && ( // Show password field only when adding a new tutor
                <div className='form-group'>
                    <label>Password:</label>
                    <input 
                        type="password" 
                        name="password" 
                        value={tutorData.password} 
                        onChange={handleChange} 
                        required 
                    />
                </div>
            )}
            <div className='form-group'>
                <label>Subjects:</label>
                <select 
                    name="assignedSubjects" 
                    value={tutorData.assignedSubjects[0] || ''} // Ensure single value
                    onChange={handleSubjectChange}
                    required
                >
                    <option value="" disabled>Select a subject</option>
                    {subjects.map(subject => (
                        <option key={subject.subjectId} value={subject.subjectId}>
                            {subject.subjectName}
                        </option>
                    ))}
                </select>
            </div>
            <button type="submit" className='btn btn-primary'>
                {selectedTutor ? 'Update' : 'Save'}
            </button>
        </form>
    );
};

export default AddTutorForm;
