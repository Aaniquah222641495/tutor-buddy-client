import React, { useState, useEffect } from 'react';
import { StudentApi } from 'student_tutor_booking_management_system';
import TutorNavbar from '../../Common/Navbar/TutorNavbar';
import './Students.css'; // Ensure this path matches your project structure

function ViewStudents() {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchStudents = async () => {
      const studentApi = new StudentApi();
      try {
        const data = await new Promise((resolve, reject) => {
          studentApi.getAllStudents((error, data) => {
            if (error) reject(error);
            else resolve(data);
          });
        });
        setStudents(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching student data:', error);
        setError('Failed to load student data. Please try again later.');
        setLoading(false);
      }
    };

    fetchStudents();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="view-students-container">
      <TutorNavbar />
      <h1>Student List</h1>
      <table className="student-list-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone Number</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student.studentId}>
              <td>{`${student.name} ${student.lastName}`}</td>
              <td>{student.email}</td>
              <td>{student.phoneNumber}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ViewStudents;
