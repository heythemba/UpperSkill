import './WebApp.css';
import SideMenu from './sideMenu.jsx';
import { Routes, Route, Outlet } from 'react-router-dom';
import Dashboard from './dashboard/Dashboard.jsx';
import CourseList from './courses/CourseList.jsx';
import Settings from './settings/Settings.jsx';
import NotFoundPage from '../404/404.jsx';

const WebApp = () => {

        return (
        <div className="webapp-container">
        <SideMenu />

        
        <div className="dashboard">
        <Routes>
          
          <Route path="Dash" element={<Dashboard userDidQuiz={false} />} />
          <Route path= "Courses" element={<CourseList />} />
          <Route path= "Settings" element={<Settings />} />
          <Route path="*" element={<NotFoundPage link='/Dashboard/dash' />} />
        </Routes>
        <Outlet />
        </div>
        </div>
        )
}

export default WebApp;