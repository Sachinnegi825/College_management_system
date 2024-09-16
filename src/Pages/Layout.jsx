
import { useLocation } from 'react-router-dom';
import Navbar from "../components/Navbar/Navbar"



const Layout = ({ children }) => {
  const location = useLocation();
  const includePaths = [
    '/',
    '/students',
    '/add-student', 
    '/courses',
    '/add-course',
    '/faculty',
    '/add-faculty',  
 ];

  return (
    <div>
        {includePaths.includes(location.pathname) &&  (
        <>
          <Navbar/>
        </>
      )}
      <main className="main-content">
        {children}
      </main>
    </div>
  );
};

export default Layout;

