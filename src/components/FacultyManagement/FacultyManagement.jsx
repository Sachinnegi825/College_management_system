import { useNavigate } from 'react-router-dom';
import './FacultyManagement.css';
import { toast } from 'react-toastify';

const FacultyManagement = () => {
  const navigate = useNavigate();

  const goToAddFaculty = () => {
    
    if(localStorage.getItem('loggedIn')){
      navigate('/add-faculty');
    }

    else{
          toast.error("Please login first to add faculty")
    }
  };

  const facultyData = [
    { id: 1, name: 'Dr. Sarah Lee', department: 'Mathematics', email: 'sarah.lee@example.com', phone: '6879586978', status: 'Active' },
    { id: 2, name: 'Prof. John Smith', department: 'Physics', email: 'john.smith@example.com', phone: '6879586746', status: 'Active' },
    { id: 2, name: 'Prof. John Wick', department: 'Physics', email: 'john.wick@example.com', phone: '5869378475', status: 'Active' },
    { id: 2, name: 'Prof. Amit Pandey', department: 'Physics', email: 'amit@example.com', phone: '3457465748', status: 'Active' },
    { id: 2, name: 'Prof. Radha', department: 'Physics', email: 'radha@example.com', phone: '5668473618', status: 'Active' },
   
  ];

  return (
    <div className="faculty-management">
      <div className="header">
        <h2>Faculty List</h2>
        <button onClick={goToAddFaculty} className="add-btn">Add Faculty</button>
      </div>
      <div style={{overflowX:"auto"}}>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Department</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {facultyData.map(faculty => (
            <tr key={faculty.id}>
              <td>{faculty.id}</td>
              <td>{faculty.name}</td>
              <td>{faculty.department}</td>
              <td>{faculty.email}</td>
              <td>{faculty.phone}</td>
              <td>{faculty.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
     
    </div>
  );
};

export default FacultyManagement;
