import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './AddFaculty.css';

const AddFaculty = () => {
  const [faculty, setFaculty] = useState({
    name: '',
    department: '',
    email: '',
    phone: '',
    status: ''
  });

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    toast.success('Faculty added successfully!');
    navigate('/faculty'); 
  };

  return (
    <div className="add-faculty">
      <h2>Add New Faculty</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            value={faculty.name}
            onChange={(e) => setFaculty({ ...faculty, name: e.target.value })}
            required
          />
        </div>
        <div className="form-group">
          <label>Department</label>
          <input
            type="text"
            value={faculty.department}
            onChange={(e) => setFaculty({ ...faculty, department: e.target.value })}
            required
          />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            value={faculty.email}
            onChange={(e) => setFaculty({ ...faculty, email: e.target.value })}
            required
          />
        </div>
        <div className="form-group">
          <label>Phone</label>
          <input
            type="text"
            value={faculty.phone}
            onChange={(e) => setFaculty({ ...faculty, phone: e.target.value })}
            required
          />
        </div>
        <div className="form-group">
          <label>Status</label>
          <select
            value={faculty.status}
            onChange={(e) => setFaculty({ ...faculty, status: e.target.value })}
            required
          >
            <option value="">Select status</option>
            <option value="Active">Active</option>
            <option value="Inactive">Inactive</option>
          </select>
        </div>
        <button type="submit" className="submit-btn">Add Faculty</button>
      </form>
    </div>
  );
};

export default AddFaculty;
