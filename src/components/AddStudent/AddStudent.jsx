import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import './AddStudent.css';

const AddStudent = () => {
  const [student, setStudent] = useState({
    name: '',
    course: '',
    email: '',
    enrollmentDate: '',
    status: ''
  });

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success('Student added successfully!');
    navigate('/student');
  };

  return (
    <div className="add-student">
      <h2>Add New Student</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            value={student.name}
            onChange={(e) => setStudent({ ...student, name: e.target.value })}
            required
          />
        </div>
        <div className="form-group">
          <label>Course</label>
          <input
            type="text"
            value={student.course}
            onChange={(e) => setStudent({ ...student, course: e.target.value })}
            required
          />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            value={student.email}
            onChange={(e) => setStudent({ ...student, email: e.target.value })}
            required
          />
        </div>
        <div className="form-group">
          <label>Enrollment Date</label>
          <input
            type="date"
            value={student.enrollmentDate}
            onChange={(e) => setStudent({ ...student, enrollmentDate: e.target.value })}
            required
          />
        </div>
        <div className="form-group">
          <label>Status</label>
          <select
            value={student.status}
            onChange={(e) => setStudent({ ...student, status: e.target.value })}
            required
          >
            <option value="">Select status</option>
            <option value="Active">Active</option>
            <option value="Inactive">Inactive</option>
          </select>
        </div>
        <button type="submit" className="submit-btn">Add Student</button>
      </form>
    </div>
  );
};

export default AddStudent;
