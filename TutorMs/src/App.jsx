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
import AdminLayout from './Components/Views/Admin/AdminLayout';
import TutorDashboard from './Components/Views/Tutour/TutorDashboard';

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
                    </Route>
                    <Route path='/bookingForm' element={<BookingForm />} />
                </Routes>
                <Routes>
                    <Route path='/tutorDashboard' element={<TutorDashboard/>} />
                </Routes>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
