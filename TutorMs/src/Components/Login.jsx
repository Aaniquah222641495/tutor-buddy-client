import './style.css';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {AdminApi} from 'student_tutor_booking_management_system';
const Login = () => {
    const [role, setRole] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    var adminApi = new AdminApi();


    const handleRoleChange = (event) => {
        setRole(event.target.value);
    };

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleLogin = (event) => {
        event.preventDefault(); // Prevent the default form submission behavior

        // Prepare the login data
        const loginData = {
            email,
            password,
            role
        };

        // Log the data to the console
        console.log('Login Data:', loginData);

        // Mock authentication logic
        if (email && password && role) {
            // Mock response data

            // Navigate to the appropriate dashboard based on role
            if (role === 'admin') {
               const response = adminApi.authenticateAdmin(email, password, (error, data, response) =>{
                    if(error) {
                        console.log(error)
                    }
                    else{
                        console.log(response+ " " + data)
                    }
                    }
                );
                navigate('/adminDashboard');
            } else if (role === 'tutor') {
                navigate('/tutorDashboard');
            } else if (role === 'student') {
                navigate('/studentDashboard');
            }
        } else {
            alert('Please fill in all fields.');
        }
    };

    /*
    const handleLogin = async (event) => {
        event.preventDefault();
        
        const loginData = {
            email,
            password,
            role
        };

        try {
            const response = await axios.post('http://localhost:8080/auth/login', loginData);
            console.log('Login successful:', response.data);
            
            // Navigate to the appropriate dashboard based on role
            if (response.data.role === 'admin') {
                navigate('/adminDashboard');
            } else if (response.data.role === 'tutor') {
                navigate('/tutorDashboard');
            } else if (response.data.role === 'student') {
                navigate('/studentDashboard');
            }

        } catch (error) {
            console.error('Error during login:', error);
            // Handle error (e.g., show an error message)
            alert('Login failed. Please check your credentials.');
        }
    };
    */

    return (
        <div className='loginPage'>
            <div className='loginForm'>
                <h2 className='text-center'>Login Page</h2>
                <form onSubmit={handleLogin}>
                    <div className='form-group'>
                        <label htmlFor="email"><strong>Email:</strong></label>
                        <input
                            type='email'
                            name="email"
                            autoComplete='off'
                            placeholder='Enter Email'
                            value={email}
                            onChange={handleEmailChange}
                            className='form-control'
                        />
                    </div>

                    <div className='form-group'>
                        <label htmlFor="password"><strong>Password:</strong></label>
                        <input
                            type='password'
                            name="password"
                            placeholder='Enter Password'
                            value={password}
                            onChange={handlePasswordChange}
                            className='form-control'
                        />
                    </div>

                    <div className='form-group'>
                        <label htmlFor="role"><strong>Role:</strong></label>
                        <select
                            name='role'
                            value={role}
                            onChange={handleRoleChange}
                            className='form-control'
                        >
                            <option value="" disabled>Select Role</option>
                            <option value="admin">Admin</option>
                            <option value="tutor">Tutor</option>
                            <option value="student">Student</option>
                        </select>
                    </div>

                    <div className='form-group'>
                        <button type="submit" className='btn btn-success w-100'>Login</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;
