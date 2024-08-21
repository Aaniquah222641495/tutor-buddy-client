import React, { useEffect, useState } from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import './AdminDashboard.css'; // Ensure this file includes the CSS for layout and search bar

const AdminLayout = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const [adminName, setAdminName] = useState('Admin');
    const navigate = useNavigate();

    useEffect(() => {
        // Fetch admin from local storage
        const adminData = JSON.parse(sessionStorage.getItem('admin'));
        if (adminData) {
            setAdminName(adminData.name);
        }
    }, []);

    const handleLogout = () => {
        console.log("Logging out...");
        sessionStorage.removeItem('admin');
        navigate('/');
    };

    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value);
    };

    return (
        <div className='dashboard-container'>
            <div className='sidebar'>
                <Link to="/adminDashboard" className='d-flex align-items-center pb-3 mb-1 mt-md-3 me-md-auto text-white text-decoration-none'>
                    <span className='welcome-message'> Welcome, {adminName}!</span>
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
                    <li className="w-100">
                        <Link to="/adminDashboard/manageSubjects" className="nav-link px-0 align-middle text-white">
                            <i className='fs-4 bi bi-tag'></i>
                            <span className='ms-2 d-none d-sm-inline'>Manage Subjects</span>
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
                <div className="search-bar-container">
                    <input
                        type="text"
                        placeholder="Search..."
                        className="search-bar"
                        value={searchQuery}
                        onChange={handleSearchChange}
                    />
                </div>
                <Outlet context={{ searchQuery }} />
            </div>
        </div>
    );
};

export default AdminLayout;
