import { useNavigate } from 'react-router-dom';
import './CourseManagement.css';

const CourseManagement = () => {
  const navigate = useNavigate();

  const goToAddCourse = () => {
    if(localStorage.getItem('loggedIn')){
    navigate('/add-course');
    }

    else{
          toast.error("Please login first to add course")
    }
  };

  
  const courses = [
    { id: 1, subject: 'Introduction to AI', instructor: 'Dr. Smith', duration: '10 weeks', schedule: 'Mon, Wed, Fri', status: 'Active' },
    { id: 2, subject: 'Advanced Mathematics', instructor: 'Dr. Johnson', duration: '12 weeks', schedule: 'Tue, Thu', status: 'Active' },
    { id: 3, subject: 'Physics 101', instructor: 'Dr. Lee', duration: '8 weeks', schedule: 'Mon, Wed', status: 'Inactive' },
    { id: 4, subject: 'Organic Chemistry', instructor: 'Dr. Davis', duration: '15 weeks', schedule: 'Tue, Thu', status: 'Active' },
    { id: 5, subject: 'Introduction to Programming', instructor: 'Dr. Brown', duration: '10 weeks', schedule: 'Mon, Fri', status: 'Active' },
    { id: 6, subject: 'World History', instructor: 'Dr. Wilson', duration: '14 weeks', schedule: 'Wed, Fri', status: 'Inactive' },
    { id: 7, subject: 'Philosophy', instructor: 'Dr. Taylor', duration: '10 weeks', schedule: 'Mon, Thu', status: 'Active' }
  ];

  return (
    <div className="course-management">
      <div className="header">
        <h2>Courses</h2>
        <button onClick={goToAddCourse} className="add-btn">Add Course</button>
      </div>
      <div style={{overflowX:"auto"}}>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Subject</th>
            <th>Instructor</th>
            <th>Duration</th>
            <th>Schedule</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {courses.map(course => (
            <tr key={course.id}>
              <td>{course.id}</td>
              <td>{course.subject}</td>
              <td>{course.instructor}</td>
              <td>{course.duration}</td>
              <td>{course.schedule}</td>
              <td>{course.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
   
    </div>
  );
};

export default CourseManagement;
