import React, { useState, useEffect } from 'react';
import { AdminApi, TutorApi, StudentApi, LocationApi, SubjectApi } from 'student_tutor_booking_management_system';
import "./AdminDashboard.css"

const AdminDashboard = () => {
    const [admins, setAdmins] = useState([]);
    const [tutors, setTutors] = useState([]);
    const [students, setStudents] = useState([]);
    const [locations, setLocations] = useState([]);
    const [subjects, setSubjects] = useState([]);
    const [loading, setLoading] = useState(true);
    const [errors, setErrors] = useState([]);

    const adminApi = new AdminApi();
    const tutorApi = new TutorApi();
    const studentApi = new StudentApi();
    const locationApi = new LocationApi();
    const subjectApi = new SubjectApi();

    useEffect(() => {
        setLoading(true);
        setErrors([]);

        // Function to handle API calls
        const fetchData = () => {
            adminApi.getAllAdmins((error, adminsData) => {
                if (error) {
                    setErrors(prevErrors => [...prevErrors, 'Error fetching admins: ' + error.message]);
                } else {
                    setAdmins(adminsData);
                }
            });

            tutorApi.getAllTutors((error, tutorsData) => {
                if (error) {
                    setErrors(prevErrors => [...prevErrors, 'Error fetching tutors: ' + error.message]);
                } else {
                    setTutors(tutorsData);
                }
            });

            studentApi.getAllStudents((error, studentsData) => {
                if (error) {
                    setErrors(prevErrors => [...prevErrors, 'Error fetching students: ' + error.message]);
                } else {
                    setStudents(studentsData);
                }
            });

            locationApi.getAllLocations((error, locationsData) => {
                if (error) {
                    setErrors(prevErrors => [...prevErrors, 'Error fetching locations: ' + error.message]);
                } else {
                    setLocations(locationsData);
                }
            });

            subjectApi.getAllSubject((error, subjectsData) => {
                if (error) {
                    setErrors(prevErrors => [...prevErrors, 'Error fetching subjects: ' + error.message]);
                } else {
                    setSubjects(subjectsData);
                }
            });
        };

        fetchData();
        setLoading(false);
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div className='section'>
            <h3 className='sub-header'>Admin Dashboard</h3>
            {errors.length > 0 && (
                <div className="error">
                    {errors.map((error, index) => (
                        <p key={index}>{error}</p>
                    ))}
                </div>
            )}

            {/* Admins Table */}
            <div className='table-container'>
                <h4 className='sub-header'>Admins</h4>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>Admin ID</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Email</th>
                            <th>Phone Number</th>
                        </tr>
                    </thead>
                    <tbody>
                        {admins.map(admin => (
                            <tr key={admin.id}>
                                <td>{admin.id}</td>
                                <td>{admin.name}</td>
                                <td>{admin.lastName}</td>
                                <td>{admin.email}</td>
                                <td>{admin.phoneNumber}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Tutors Table */}
            <div className='table-container'>
                <h4 className='sub-header'>Tutors</h4>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>Tutor ID</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Phone Number</th>
                            <th>Email</th>
                            <th>Subjects</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tutors.map(tutor => (
                            <tr key={tutor.tutorId}>
                                <td>{tutor.tutorId}</td>
                                <td>{tutor.name}</td>
                                <td>{tutor.lastName}</td>
                                <td>{tutor.phoneNumber}</td>
                                <td>{tutor.email}</td>
                                <td>
                                        {(tutor.assignedSubjects || []).map(subject => subject.subjectName).join(', ')}
                                    </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Students Table */}
            <div className='table-container'>
                <h4 className='sub-header'>Students</h4>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>Student Number</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Phone Number</th>
                            <th>Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {students.map(student => (
                            <tr key={student.studentNumber}>
                                <td>{student.studentNumber}</td>
                                <td>{student.name}</td>
                                <td>{student.lastName}</td>
                                <td>{student.phoneNumber}</td>
                                <td>{student.email}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Locations Table */}
            <div className='table-container'>
                <h4 className='sub-header'>Venues</h4>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Room</th>
                            <th>Building</th>
                        </tr>
                    </thead>
                    <tbody>
                        {locations.map(location => (
                            <tr key={location.locationId}>
                                <td>{location.locationId}</td>
                                <td>{location.room}</td>
                                <td>{location.building}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Subjects Table */}
            <div className='table-container'>
                <h4 className='sub-header'>Subjects</h4>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>Subject Code</th>
                            <th>Subject Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        {subjects.map(subject => (
                            <tr key={subject.subjectCode}>
                                <td>{subject.subjectCode}</td>
                                <td>{subject.subjectName}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AdminDashboard;
