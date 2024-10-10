import React, { useState, useEffect } from 'react';

const AddSubjectForm = ({ closeModal, onAddSubject, selectedSubject }) => {
    const [subjectCode, setSubjectCode] = useState('');
    const [subjectName, setSubjectName] = useState('');

    useEffect(() => {
        if (selectedSubject) {
            setSubjectCode(selectedSubject.subjectCode);
            setSubjectName(selectedSubject.subjectName);
        } else {
            // Reset fields if no subject is selected
            setSubjectCode('');
            setSubjectName('');
        }
    }, [selectedSubject]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const subject = {
            subjectCode,
            subjectName
        };
        onAddSubject(subject); // Call the parent component function
        closeModal(); // Close the modal after submission
    };

    return (
        <form onSubmit={handleSubmit} className="form">
            <h2 className="sub-header">{selectedSubject ? 'Edit Subject' : 'Add New Subject'}</h2>
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
            <button type="submit" className='btn btn-primary'>
                {selectedSubject ? 'Update' : 'Save'}
            </button>
        </form>
    );
};

export default AddSubjectForm;
