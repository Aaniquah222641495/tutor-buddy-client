import React, { useState, useEffect } from 'react';
import Modal from '../../../Common/Modals/Modal';
import AddAdminForm from '../../../Forms/Admin/AddAdminForm';
import { AdminApi } from 'student_tutor_booking_management_system';
import '../manage.css';

const ManageAdmins = () => {
    const [admins, setAdmins] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [selectedAdmin, setSelectedAdmin] = useState(null);

    // Create an instance of AdminApi
    const adminApi = new AdminApi();

    // Fetch admins from the database when the component mounts
    useEffect(() => {
        const fetchAdmins = () => {
            adminApi.getAllAdmins((error, data, response) => {
                if (error) {
                    console.error('Error fetching admins:', error);
                } else {
                    setAdmins(data); 
                }
            });
        };

        fetchAdmins();
    }, [adminApi]);

    const openModal = (admin = null) => {
        setSelectedAdmin(admin); // Set the selected admin for editing or null for adding
        setShowModal(true);
    };

    const closeModal = () => setShowModal(false);

    const handleAddAdmin = (admin) => {
        adminApi.createAdmin(admin, (error, data, response) => {
            if (error) {
                console.error('Error adding admin:', error);
            } else {
                setAdmins([...admins, data]);
                closeModal();
            }
        });
    };

    const handleEditAdmin = (updatedAdmin) => {
        const adminId = updatedAdmin.id;
        const body = {
            name: updatedAdmin.name,
            lastName: updatedAdmin.lastName,
            email: updatedAdmin.email,
            phoneNumber: updatedAdmin.phoneNumber,
            password: updatedAdmin.password
        };

        adminApi.updateAdmin(body, adminId, (error, data, response) => {
            if (error) {
                console.error('Error editing admin:', error);
            } else {
                console.log('Admin updated:', data);
                setAdmins(admins.map(admin =>
                    admin.id === data.id ? data : admin
                ));
                closeModal();
            }
        });
    };

    const handleDeleteAdmin = (id) => {
        adminApi.deleteAdmin(id, (error, data, response) => {
            if (error) {
                console.error('Error deleting admin:', error);
            } else {
                console.log('Admin deleted successfully.');
                setAdmins(admins.filter(admin => admin.id !== id));
            }
        });
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
                            <tr key={admin.id}>
                                <td>{admin.id}</td>
                                <td>{admin.name}</td>
                                <td>{admin.lastName}</td>
                                <td>{admin.email}</td>
                                <td>{admin.phoneNumber}</td>
                                <td>
                                    <button className='btn btn-warning' onClick={() => openModal(admin)}>Edit</button>
                                    <button className='btn btn-danger' onClick={() => handleDeleteAdmin(admin.id)}>Delete</button>
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
