import React, { useState, useEffect } from 'react';

const AddTutorForm = ({ onAddTutor, selectedTutor, subjects = [] }) => {
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

        // Basic validation if needed
        if (!tutorData.email.includes('@')) {
            alert('Please enter a valid email address.');
            return;
        }

        onAddTutor(tutorData); // Call the parent component function
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>First Name:</label>
                <input 
                    type="text" 
                    name="name" 
                    value={tutorData.name} 
                    onChange={handleChange} 
                    required 
                />
            </div>
            <div>
                <label>Last Name:</label>
                <input 
                    type="text" 
                    name="lastName" 
                    value={tutorData.lastName} 
                    onChange={handleChange} 
                    required 
                />
            </div>
            <div>
                <label>Phone Number:</label>
                <input 
                    type="text" 
                    name="phoneNumber" 
                    value={tutorData.phoneNumber} 
                    onChange={handleChange} 
                    required 
                />
            </div>
            <div>
                <label>Email:</label>
                <input 
                    type="email" 
                    name="email" 
                    value={tutorData.email} 
                    onChange={handleChange} 
                    required 
                />
            </div>
            <div>
                <label>Password:</label>
                <input 
                    type="password" 
                    name="password" 
                    value={tutorData.password} 
                    onChange={handleChange} 
                    required 
                />
            </div>
            <div>
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
            <button type="submit">{selectedTutor ? 'Update' : 'Save'}</button>
        </form>
    );
};

export default AddTutorForm;
