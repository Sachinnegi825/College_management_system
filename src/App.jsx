import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import StudentManagement from './components/StudentManagement/StudentManagement';
import CourseManagement from './components/CourseManagement/CourseManagement';
import FacultyManagement from './components/FacultyManagement/FacultyManagement';
import AddStudent from './components/AddStudent/AddStudent';
import AddCourse from './components/AddCourse/AddCourse';
import AddFaculty from './components/AddFaculty/AddFaculty';
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import HomePage from './components/Homepage/Homepage';
import Layout from './Pages/Layout';
import ErrorPage from './Pages/ErrorPage';
import 'react-toastify/dist/ReactToastify.css';




const App = () => {


  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/students" element={<StudentManagement />} />
          <Route path="/add-student" element={<PrivateRoute><AddStudent /></PrivateRoute>} />
          <Route path="/courses" element={<CourseManagement />} />
          <Route path="/add-course" element={<PrivateRoute><AddCourse /></PrivateRoute>} />
          <Route path="/faculty" element={<FacultyManagement />} />
          <Route path="/add-faculty" element={<PrivateRoute><AddFaculty /></PrivateRoute>} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="*" element={<ErrorPage/>} />
        </Routes>
      </Layout>
      <ToastContainer />
    </Router>
  );
};

const PrivateRoute = ({ children }) => {
  const isLoggedIn = localStorage.getItem('loggedIn') === 'true';
  return isLoggedIn ? children : <Navigate to="/login" />;
};

export default App;
