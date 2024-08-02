import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Components/Login';
import AdminDashboard from './Components/Views/Admin/AdminDashboard';
import BookingForm from './Components/Views/Student/BookingForm';
import Footer from './Components/Common/Footer/Footer';
import ManageTutors from './Components/Views/Admin/ManageTutors/ManageTutors';
import ManageStudents from './Components/Views/Admin/ManageStudents/ManageStudents';



const App = () => {
    return (
    
     <Router>
      <div className='app'>
        <Routes>
          <Route path='/' element={<Login/>}/>
          <Route path='/adminDashboard' element={<AdminDashboard/>}/>
          <Route path='/adminDashboard/manageTutors' element={<ManageTutors/>}/>
          <Route path='/adminDashboard/manageStudents' element={<ManageStudents/>}/>        
        </Routes>
        <Footer/>
      </div>
     </Router>
     
  
      
    );
  }


export default App;
