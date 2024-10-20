import React, { useState } from "react";
import '../EditProfileModel.css'; // Import the updated CSS
import { StudentApi } from "student_tutor_booking_management_system";

const EditProfileModal = ({ show, handleClose, studentData, onUpdate }) => {
    const [formData, setFormData] = useState({
        name: studentData.name || '',
        lastName: studentData.lastName || '',
        email: studentData.email || '',
        phoneNumber: studentData.phoneNumber || '',
        currentPassword: studentData.password || '', // Initialize with current password for validation
        newPassword: '',
        confirmPassword: ''
    });

    const [passwordError, setPasswordError] = useState('');

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Basic password validation
        if (formData.newPassword && formData.newPassword !== formData.confirmPassword) {
            setPasswordError('New password and confirmation do not match');
            return;
        } else {
            setPasswordError('');
        }

        // Prepare data to be sent; if no new password is provided, use the current password
        const updatedData = {
            name: formData.name,
            lastName: formData.lastName,
            email: formData.email,
            phoneNumber: formData.phoneNumber,
            password: formData.newPassword || formData.currentPassword // Use new password if available, otherwise current password
        };

        const studentApi = new StudentApi();
        studentApi.updateStudent(updatedData, studentData.studentId, (error, data) => {
            if (error) {
                console.error("Error updating student:", error);
            } else {
                onUpdate(data);
                handleClose();
            }
        });
    };

    if (!show) return null;

    return (
        <div className="modal-overlay">
            <div className="modal-content booking-modal">
                <button className="modal-close" onClick={handleClose}>&times;</button>
                <h2>Edit Profile</h2>
                <form onSubmit={handleSubmit}>
                    <label>
                        First Name:
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                        />
                    </label>
                    <label>
                        Last Name:
                        <input
                            type="text"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                        />
                    </label>
                    <label>
                        Email:
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                        />
                    </label>
                    <label>
                        Phone Number:
                        <input
                            type="tel"
                            name="phoneNumber"
                            value={formData.phoneNumber}
                            onChange={handleChange}
                        />
                    </label>

                    {/* Password Section */}
                    <h3>Change Password</h3>
                    <label>
                        Current Password:
                        <input
                            type="password"
                            name="currentPassword"
                            value={formData.currentPassword}
                            onChange={handleChange}
                            readOnly // Make this field read-only to prevent changes
                        />
                    </label>
                    <label>
                        New Password:
                        <input
                            type="password"
                            name="newPassword"
                            value={formData.newPassword}
                            onChange={handleChange}
                        />
                    </label>
                    <label>
                        Confirm New Password:
                        <input
                            type="password"
                            name="confirmPassword"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                        />
                    </label>
                    {passwordError && <p className="error-message">{passwordError}</p>}

                    <div className="modal-buttons">
                        <button type="submit">Save</button>
                        <button type="button" onClick={handleClose}>Cancel</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default EditProfileModal;
