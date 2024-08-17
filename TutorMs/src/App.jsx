// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Components/Login';
import AdminDashboard from './Components/Views/Admin/AdminDashboard';
import BookingForm from './Components/Forms/Student/BookingForm';
import Footer from './Components/Common/Footer/Footer';
import ManageTutors from './Components/Views/Admin/ManageTutors/ManageTutors';
import ManageStudents from './Components/Views/Admin/ManageStudents/ManageStudents';
import ManageVenues from './Components/Views/Admin/ManageVenues/ManageVenues';
import ManageAdmins from './Components/Views/Admin/ManageAdmins/ManageAdmins';
import ManageSubjects from './Components/Views/Admin/ManageSubjects/ManageSubjects';
import AdminLayout from './Components/Views/Admin/AdminLayout';

import StudentDashboard from './Components/Views/Student/StudentDashboard/StudentDashboard'; 
import Subjects from './Components/Views/Student/ViewSubjects/ViewSubjects'; 
import Tutors from './Components/Views/Student/ViewTutors/ViewTutors'; 

const App = () => {
    return (
        <Router>
            <div className='app'>
                <Routes>
                    <Route path='/' element={<Login />} />
                    <Route path='/adminDashboard' element={<AdminLayout />}>
                        <Route index element={<AdminDashboard />} />
                        <Route path='manageAdmins' element={<ManageAdmins />} />
                        <Route path='manageTutors' element={<ManageTutors />} />
                        <Route path='manageStudents' element={<ManageStudents />} />
                        <Route path='manageVenues' element={<ManageVenues />} />
                        <Route path='manageSubjects' element={<ManageSubjects/>}/>
                    </Route>
                    <Route path='/bookingForm' element={<BookingForm />} />

                    <Route path='/studentDashboard' element={<StudentDashboard />} /> 
                    <Route path='/subjects' element={<Subjects />} />
                    <Route path='/tutors' element={<Tutors />} />

                </Routes>
                <Footer />
            </div>
        </Router>
    );
}

export default App;