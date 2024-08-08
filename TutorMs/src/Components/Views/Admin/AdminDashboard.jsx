// AdminDashboard.jsx
import React from 'react';
import { useOutletContext } from 'react-router-dom';
import './AdminDashboard.css'; // Import the CSS file for specific component styles

const AdminDashboard = () => {
    const { searchQuery } = useOutletContext();

    const filterData = (data, query) => {
        return data.filter(item => 
            Object.values(item).some(value =>
                value.toLowerCase().includes(query.toLowerCase())
            )
        );
    };

    // Sample data for demonstration
    const admins = [
        { id: '1', firstName: 'Admin1', lastName: 'Last1', email: 'admin1@example.com', phone: '1234567890' },
        { id: '2', firstName: 'Admin2', lastName: 'Last2', email: 'admin2@example.com', phone: '0987654321' }
    ];

    const tutors = [
        { id: '1', firstName: 'John', lastName: 'Doe', phone: '1234567891', email: 'john.doe@example.com', subject: 'Applications Development 2' },
        { id: '2', firstName: 'Jane', lastName: 'Doe', phone: '11234567899', email: 'jane.smith@example.com', subject: 'Applications Development Fundamentals 2' }
    ];

    const students = [
        { id: '1', firstName: 'Emily', lastName: 'Johnson', email: 'emily.johnson@example.com' },
        { id: '2', firstName: 'Michael', lastName: 'Brown', email: 'michael.brown@example.com' }
    ];

    const venues = [
        { id: '1', room: '2.22', building: 'Library' },
        { id: '2', room: 'Lab 1.1', building: 'Engineering Building' }
    ];

    return (
        <div className='dashboard-content'>
            <div className='management-section'>
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
                            {filterData(admins, searchQuery).map(admin => (
                                <tr key={admin.id}>
                                    <td>{admin.id}</td>
                                    <td>{admin.firstName}</td>
                                    <td>{admin.lastName}</td>
                                    <td>{admin.email}</td>
                                    <td>{admin.phone}</td>
                                    <td><button className='btn btn-primary'>Delete</button></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            <div className='management-section'>
                <h4 className='sub-header'>Manage Tutors</h4>
                <div className='table-container'>
                    <table className='table'>
                        <thead>
                            <tr>
                                <th>Tutor ID</th>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Phone Number</th>
                                <th>Email</th>
                                <th>Subject</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filterData(tutors, searchQuery).map(tutor => (
                                <tr key={tutor.id}>
                                    <td>{tutor.id}</td>
                                    <td>{tutor.firstName}</td>
                                    <td>{tutor.lastName}</td>
                                    <td>{tutor.phone}</td>
                                    <td>{tutor.email}</td>
                                    <td>{tutor.subject}</td>
                                    <td><button className='btn btn-primary'>Delete</button></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            <div className='management-section'>
                <h4 className='sub-header'>Manage Students</h4>
                <div className='table-container'>
                    <table className='table'>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Email</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filterData(students, searchQuery).map(student => (
                                <tr key={student.id}>
                                    <td>{student.id}</td>
                                    <td>{student.firstName}</td>
                                    <td>{student.lastName}</td>
                                    <td>{student.email}</td>
                                    <td><button className='btn btn-primary'>Delete</button></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            <div className='management-section'>
                <h4 className='sub-header'>Manage Venues</h4>
                <div className='table-container'>
                    <table className='table'>
                       
<thead>
                            <tr>
                                <th>Venue ID</th>
                                <th>Room</th>
                                <th>Building</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filterData(venues, searchQuery).map(venue => (
                                <tr key={venue.id}>
                                    <td>{venue.id}</td>
                                    <td>{venue.room}</td>
                                    <td>{venue.building}</td>
                                    <td><button className='btn btn-primary'>Delete</button></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;