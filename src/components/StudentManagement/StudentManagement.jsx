import React from 'react';
import { useNavigate } from 'react-router-dom';
import './StudentManagement.css';
import { toast } from 'react-toastify';


const StudentManagement = () => {
  const navigate = useNavigate();

  const goToAddStudent = () => {
    if(localStorage.getItem('loggedIn')){
      navigate('/add-student');
    }

    else{
          toast.error("Please login first to add an student")
    }
     
  };


  const students = [
    { id: 1, name: 'John Doe', course: 'Computer Science', email: 'john.doe@example.com', enrollmentDate: '2023-01-15', status: 'Active' },
    { id: 2, name: 'Jane Smith', course: 'Mathematics', email: 'jane.smith@example.com', enrollmentDate: '2022-11-22', status: 'Active' },
    { id: 3, name: 'Michael Johnson', course: 'Physics', email: 'michael.johnson@example.com', enrollmentDate: '2023-03-10', status: 'Inactive' },
    { id: 4, name: 'Emily Davis', course: 'Chemistry', email: 'emily.davis@example.com', enrollmentDate: '2023-02-05', status: 'Active' },
    { id: 5, name: 'David Wilson', course: 'Biology', email: 'david.wilson@example.com', enrollmentDate: '2023-07-12', status: 'Active' },
    { id: 6, name: 'Sarah Brown', course: 'Engineering', email: 'sarah.brown@example.com', enrollmentDate: '2023-05-20', status: 'Inactive' },
    { id: 7, name: 'Chris Taylor', course: 'Arts', email: 'chris.taylor@example.com', enrollmentDate: '2023-04-18', status: 'Active' }
  ];

  return (
    <div className="student-management">
      <div className="header">
        <h2>Student List</h2>
        <button onClick={goToAddStudent} className="add-btn">Add Student</button>
      </div>
      <div style={{overflowX:"auto"}}>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Course</th>
            <th>Email</th>
            <th>Enrollment Date</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {students.map(student => (
            <tr key={student.id}>
              <td>{student.id}</td>
              <td>{student.name}</td>
              <td>{student.course}</td>
              <td>{student.email}</td>
              <td>{student.enrollmentDate}</td>
              <td>{student.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
    
    </div>
  );
};

export default StudentManagement;
