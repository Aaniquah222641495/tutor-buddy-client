
import React, { useState } from 'react'

//still have to add modal
const AddStudentForm = ({closeModal}) => {

    const [studentId, setStudentId] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        //Handle form submission logic here

        console.log({ studentId, firstName, lastName, phoneNumber, email, password });
        closeModal();
    }



    return (
        <form onSubmit={handleSubmit}>
            <h2>Add New Student</h2>
            <div className='form-group'>
                <label>Student Number</label>
                <input
                    type='text'
                    value={studentId}>
                    onChange={(e) => setStudentId(e.target.value)}
                    required
                </input>

            </div>
            <div className='form-group'>
                <label>First Name</label>
                <input
                    type='text'
                    value={firstName}>
                    onChange={(e) => setFirstName(e.target.value)}
                    required
                </input>
            </div>

            <div className='form-group'>
                <label>Last Name</label>
                <input
                    type='text'
                    value={lastName}>
                    onChange={(e) => setLastName(e.target.value)}
                    required
                </input>
            </div>


            <div className='form-group'>
                <label>Phone Number</label>
                <input
                    type='tel'
                    value={phoneNumber}>
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    required
                </input>
            </div>

            
            <div className='form-group'>
                <label>Email</label>
                <input
                    type='email'
                    value={email}>
                    onChange={(e) => setEmail(e.target.value)}
                    required
                </input>
            </div>
            <button type ="submit">Add Student</button>
        </form>

    )
}

export default AddStudentForm
