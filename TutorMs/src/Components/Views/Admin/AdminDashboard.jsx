import React from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import './AdminDashboard.css'; // Import the new CSS file

const AdminDashboard = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        console.log("Logging out...");
        // Clear any authentication tokens or user data here if needed

        // Navigate to the login page
        navigate('/');
    };

    return (
        <div className='dashboard-container'>
            <div className='sidebar'>
                <Link to="/adminDashboard" className='d-flex align-items-center pb-3 mb-1 mt-md-3 me-md-auto text-white text-decoration-none'>
                    <span className='fs-5 fw-bolder d-none d-sm-inline'>Welcome!</span>
                </Link>
                <ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
                    <li className="w-100">
                        <Link to="/adminDashboard" className='nav-link text-white px-0 align-middle'>
                            <i className="fs-4 bi bi-speedometer2"></i>
                            <span className='ms-2 d-none d-sm-inline'>Dashboard</span>
                        </Link>
                    </li>
                    <li className="w-100">
                        <Link to="/adminDashboard/manageAdmins" className="nav-link px-0 align-middle text-white">
                            <i className='fs-4 bi bi-shield-lock'></i>
                            <span className='ms-2 d-none d-sm-inline'>Manage Admins</span>
                        </Link>
                    </li>
                    <li className="w-100">
                        <Link to="/adminDashboard/manageTutors" className="nav-link px-0 align-middle text-white">
                            <i className='fs-4 bi bi-people'></i>
                            <span className='ms-2 d-none d-sm-inline'>Manage Tutors</span>
                        </Link>
                    </li>
                    <li className="w-100">
                        <Link to="/adminDashboard/manageStudents" className="nav-link px-0 align-middle text-white">
                            <i className='fs-4 bi bi-person'></i>
                            <span className='ms-2 d-none d-sm-inline'>Manage Students</span>
                        </Link>
                    </li>
                    <li className="w-100">
                        <Link to="/adminDashboard/manageVenues" className="nav-link px-0 align-middle text-white">
                            <i className='fs-4 bi bi-geo-alt'></i>
                            <span className='ms-2 d-none d-sm-inline'>Manage Venues</span>
                        </Link>
                    </li>
                    <li className="w-100" onClick={handleLogout}>
                        <Link className="nav-link px-0 align-middle text-white" to="#">
                            <i className='fs-4 bi bi-power'></i>
                            <span className='ms-2 d-none d-sm-inline'>Logout</span>
                        </Link>
                    </li>
                </ul>
            </div>

            <div className="main-content">
                <div className='main-header'>
                    <h4>Admin Dashboard</h4>
                </div>

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
                                <tr>
                                    <td>1</td>
                                    <td>Admin1</td>
                                    <td>Last1</td>
                                    <td>admin1@example.com</td>
                                    <td>1234567890</td>
                                    <td><button className='btn btn-primary'>Delete</button></td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>Admin2</td>
                                    <td>Last2</td>
                                    <td>admin2@example.com</td>
                                    <td>0987654321</td>
                                    <td><button className='btn btn-primary'>Delete</button></td>
                                </tr>
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
                                <tr>
                                    <td>1</td>
                                    <td>John</td>
                                    <td>Doe</td>
                                    <td>1234567891</td>
                                    <td>john.doe@example.com</td>
                                    <td>Applications Development 2</td>
                                    <td><button className='btn btn-primary'>Delete</button></td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>Jane</td>
                                    <td>Doe</td>
                                    <td>11234567899</td>
                                    <td>jane.smith@example.com</td>
                                    <td>Applications Development Fundamentals 2</td>
                                    <td><button className='btn btn-primary'>Delete</button></td>
                                </tr>
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
                                {/* Example rows; replace with dynamic data */}
                                <tr>
                                    <td>1</td>
                                    <td>Emily</td>
                                    <td>Johnson</td>
                                    <td>emily.johnson@example.com</td>
                                    <td><button className='btn btn-primary'>Delete</button></td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>Michael</td>
                                    <td>Brown</td>
                                    <td>michael.brown@example.com</td>
                                    <td><button className='btn btn-primary'>Delete</button></td>
                                </tr>
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
                                {/* Example rows; replace with dynamic data */}
                                <tr>
                                    <td>1</td>
                                    <td>2.22</td>
                                    <td>Library</td>
                                    <td><button className='btn btn-primary'>Delete</button></td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>Lab 1.1</td>
                                    <td>Engineering Building</td>
                                    <td><button className='btn btn-primary'>Delete</button></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <Outlet />
            </div>
        </div>
    );
};

export default AdminDashboard;
