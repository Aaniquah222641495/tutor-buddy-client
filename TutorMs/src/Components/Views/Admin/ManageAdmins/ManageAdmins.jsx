import React, { useState } from 'react';
import Modal from '../../../Common/Modals/Modal';
import AddAdminForm from '../../../Forms/Admin/AddAdminForm';
import '../manage.css';

const ManageAdmins = () => {
    const [admins, setAdmins] = useState([
        { adminId: 'A001', firstName: 'Alice', lastName: 'Johnson', email: 'alice@example.com', phoneNumber: '123-456-7890' },
        { adminId: 'A002', firstName: 'Bob', lastName: 'Smith', email: 'bob@example.com', phoneNumber: '098-765-4321' }
    ]);
    const [showModal, setShowModal] = useState(false);
    const [selectedAdmin, setSelectedAdmin] = useState(null);

    const openModal = (admin = null) => {
        setSelectedAdmin(admin); // Set the selected admin for editing or null for adding
        setShowModal(true);
    };

    const closeModal = () => setShowModal(false);

    const handleAddAdmin = (admin) => {
        setAdmins([...admins, { ...admin, adminId: `A${(admins.length + 1).toString().padStart(3, '0')}` }]);
    };

    const handleEditAdmin = (updatedAdmin) => {
        setAdmins(admins.map(admin =>
            admin.adminId === updatedAdmin.adminId ? updatedAdmin : admin
        ));
    };

    const handleDeleteAdmin = (adminId) => {
        setAdmins(admins.filter(admin => admin.adminId !== adminId));
    };

    return (
        <div className='section'>
            <h4 className='sub-header'>Manage Admins</h4>
            <div className='table-container'>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>Admin ID</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Email</th>
                            <th>Phone Number</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {admins.map((admin) => (
                            <tr key={admin.adminId}>
                                <td>{admin.adminId}</td>
                                <td>{admin.firstName}</td>
                                <td>{admin.lastName}</td>
                                <td>{admin.email}</td>
                                <td>{admin.phoneNumber}</td>
                                <td>
                                    <button className='btn btn-warning' onClick={() => openModal(admin)}>Edit</button>
                                    <button className='btn btn-danger' onClick={() => handleDeleteAdmin(admin.adminId)}>Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className='button-container'>
                <button className='btn btn-primary' onClick={() => openModal()}>Add Admin</button>
            </div>
            {showModal && (
                <Modal
                    show={showModal}
                    onClose={closeModal}
                    FormComponent={AddAdminForm}
                    formProps={{
                        closeModal,
                        handleAddAdmin,
                        handleEditAdmin,
                        selectedAdmin
                    }}
                />
            )}
        </div>
    );
};

export default ManageAdmins;
