import './WebApp.css';
import { Routes, Route, Outlet, Navigate } from 'react-router-dom';
import Dashboard from './dashboard/Dashboard.jsx';
import CourseList from './courses/CourseList.jsx';
import Settings from './settings/Settings.jsx';
import NotFoundPage from '../404/404.jsx';
import SideMenu from './sidemenu/sideMenu.jsx';
import { useContext } from 'react';
import { UserStatus } from '../UserProvider.jsx';


const WebApp = () => {

        const {userData} = useContext(UserStatus);

        return (
        <div className="webapp-container">
        <SideMenu />

        
        <div className="dashboard">
        <Routes>
          
          <Route path="Dash" element={userData ? <Dashboard quizTaken={false} /> : <Navigate to='/' />} />
          <Route path= "Courses" element={userData ? <CourseList /> : <Navigate to='/' />} />
          <Route path= "Settings" element={userData ? <Settings /> : <Navigate to='/' />} />
          <Route path="*" element={userData ? <NotFoundPage link='/Dashboard/dash' /> : <Navigate to='/' />} />
        </Routes>
        <Outlet />
        </div>
        </div>
        )
}

export default WebApp;