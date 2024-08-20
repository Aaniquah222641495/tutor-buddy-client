import React, { useState, useEffect } from 'react';

const AddAdminForm = ({ closeModal, handleAddAdmin, handleEditAdmin, selectedAdmin }) => {
    const [admin, setAdmin] = useState({ name: '', lastName: '', email: '', phoneNumber: '', password: '' });

    useEffect(() => {
        if (selectedAdmin) {
            setAdmin(selectedAdmin);
        }
    }, [selectedAdmin]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setAdmin((prevAdmin) => ({ ...prevAdmin, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (selectedAdmin) {
            handleEditAdmin(admin);
        } else {
            handleAddAdmin(admin);
        }
        closeModal();
    };

    return (
        <form onSubmit={handleSubmit} className="form">
            <h2 className="sub-header">{selectedAdmin ? 'Edit Admin' : 'Add Admin'}</h2>
            <div className="form-group">
                <label htmlFor="name">First Name</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={admin.name}
                    onChange={handleChange}
                    required
                />
            </div>

            <div className="form-group">
                <label htmlFor="lastName">Last Name</label>
                <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={admin.lastName}
                    onChange={handleChange}
                    required
                />
            </div>

            <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={admin.email}
                    onChange={handleChange}
                    required
                />
            </div>

            <div className="form-group">
                <label htmlFor="phoneNumber">Phone Number</label>
                <input
                    type="tel"
                    id="phoneNumber"
                    name="phoneNumber"
                    value={admin.phoneNumber}
                    onChange={handleChange}
                    required
                />
            </div>

            <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    value={admin.password}
                    onChange={handleChange}
                    required
                />
            </div>

            <button type="submit" className="btn btn-primary">
                {selectedAdmin ? 'Update Admin' : 'Add Admin'}
            </button>
        </form>
    );
};

export default AddAdminForm;
