import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='navbar navbar-expand-lg nabar-dark bg-dark mb-5'>
        <div className='container-fluid'>
            <Link className='navbar-brand' to={" /"}>  
            Tutor Buddy
            </Link>
            <button
            className='navbar-toggler'
            type='button'
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls='navbarNav'
            aria-expanded="false"
            aria-label='Toggle navigation'>
            <span className='navbar-toggler-icon'></span>
            </button>
            <div
            className='collapse navbar-collapse'
            id="navbarNav">
                <ul className='navbar-nav'>
                    <li className='nav-item'>
                        <Link className='nav-link active'
                        aria-current="page"
                        to={"/adminDashboard/manageAdmins"}>
                            Manage Admins
                        </Link>
                    </li>

                    <li className='nav-item'>
                        <Link className='nav-link '
                        to={"/adminDashboard/manageTutors"}>
                            Manage Tutors
                        </Link>
                    </li>

                    <li className='nav-item'>
                        <Link className='nav-link '
                        to={"/adminDashboard/manageStudents"}>
                            Manage Students
                        </Link>
                    </li>

                    <li className='nav-item'>
                        <Link className='nav-link '
                        to={"/adminDashboard/manageVenues"}>
                            Manage Venues
                        </Link>
                    </li>

                </ul>

            </div>

        </div>

    </nav>
  )
}

export default Navbar
