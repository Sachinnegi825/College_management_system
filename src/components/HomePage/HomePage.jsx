// src/components/HomePage/HomePage.js
import { Link } from 'react-router-dom';
import './HomePage.css';

const HomePage = () => {
  return (
    <div className="home">
      <section className="hero">
        <div className="hero-content">
          <h1>Welcome to College Management System</h1>
          <p>Manage Students, Courses, and Faculty Efficiently</p>
          <div className="buttons">
            <Link to="/students" className="btn">Manage Students</Link>
            <Link to="/courses" className="btn">Manage Courses</Link>
            <Link to="/faculty" className="btn">Manage Faculty</Link>
          </div>
        </div>
      </section>

      <section className="overview">
        <h2>What You Can Do</h2>
        <p>
          Our College Management System provides a complete solution to manage students, courses, and faculty in a streamlined and efficient way. Easily track student progress, organize courses, and manage faculty members with just a few clicks.
        </p>
      </section>

      <footer className="footer">
        <p>© 2024 College Management System. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default HomePage;
