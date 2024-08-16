import React, { useState, useEffect } from 'react';

const AddSubjectForm = ({ onAddSubject, selectedSubject }) => {
    const [subjectCode, setSubjectCode] = useState('');
    const [subjectName, setSubjectName] = useState('');

    useEffect(() => {
        if (selectedSubject) {
            setSubjectCode(selectedSubject.subjectCode);
            setSubjectName(selectedSubject.subjectName);
        }
    }, [selectedSubject]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const subject = {
            subjectCode,
            subjectName
        };
        onAddSubject(subject);
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="subjectCode">Subject Code</label>
                <input
                    type="text"
                    id="subjectCode"
                    value={subjectCode}
                    onChange={(e) => setSubjectCode(e.target.value)}
                    required
                />
            </div>
            <div className="form-group">
                <label htmlFor="subjectName">Subject Name</label>
                <input
                    type="text"
                    id="subjectName"
                    value={subjectName}
                    onChange={(e) => setSubjectName(e.target.value)}
                    required
                />
            </div>
            <button type="submit" className='btn btn-primary'>Save</button>
        </form>
    );
};

export default AddSubjectForm;
