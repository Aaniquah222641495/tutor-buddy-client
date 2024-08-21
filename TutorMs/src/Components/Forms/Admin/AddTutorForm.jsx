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
        }
    }, [selectedTutor]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setTutorData({
            ...tutorData,
            [name]: value
        });
    };

    const handleSubjectsChange = (e) => {
        const { options } = e.target;
        const selectedSubjects = [];
        for (let i = 0, l = options.length; i < l; i++) {
            if (options[i].selected) {
                selectedSubjects.push(Number(options[i].value));
            }
        }
        setTutorData({
            ...tutorData,
            assignedSubjects: selectedSubjects
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onAddTutor(tutorData);
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
                    multiple 
                    name="assignedSubjects" 
                    value={tutorData.assignedSubjects} 
                    onChange={handleSubjectsChange}
                    required
                >
                    {subjects.map(subject => (
                        <option key={subject.subjectId} value={subject.subjectId}>
                            {subject.subjectName}
                        </option>
                    ))}
                </select>
            </div>
            <button type="submit">Save</button>
        </form>
    );
};

export default AddTutorForm;
