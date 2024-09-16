// src/components/AddCourse/AddCourse.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './AddCourse.css';

const AddCourse = () => {
  const [course, setCourse] = useState({
    subject: '',
    instructor: '',
    duration: '',
    schedule: '',
    status: ''
  });

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();


    toast.success('Course added successfully!');
    navigate('/courses');
  };

  return (
    <div className="add-course">
      <h2>Add New Course</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Subject</label>
          <input
            type="text"
            value={course.title}
            onChange={(e) => setCourse({ ...course, title: e.target.value })}
            required
          />
        </div>
        <div className="form-group">
          <label>Instructor</label>
          <input
            type="text"
            value={course.instructor}
            onChange={(e) => setCourse({ ...course, instructor: e.target.value })}
            required
          />
        </div>
        <div className="form-group">
          <label>Duration</label>
          <input
            type="text"
            value={course.duration}
            onChange={(e) => setCourse({ ...course, duration: e.target.value })}
            required
          />
        </div>
        <div className="form-group">
          <label>Schedule</label>
          <input
            type="text"
            value={course.schedule}
            onChange={(e) => setCourse({ ...course, schedule: e.target.value })}
            required
          />
        </div>
        <div className="form-group">
          <label>Status</label>
          <select
            value={course.status}
            onChange={(e) => setCourse({ ...course, status: e.target.value })}
            required
          >
            <option value="">Select status</option>
            <option value="Active">Active</option>
            <option value="Inactive">Inactive</option>
          </select>
        </div>
        <button type="submit" className="submit-btn">Add Course</button>
      </form>
    </div>
  );
};

export default AddCourse;
