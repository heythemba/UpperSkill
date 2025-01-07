import './WebApp.css';
import SideMenu from './sideMenu.jsx';
import { Routes, Route } from 'react-router-dom';
import Dashboard from './dashboard/Dashboard.jsx';
import Courses from './courses/Courses.jsx';
import Settings from './settings/Settings.jsx';
import NotFoundPage from '../404/404.jsx';

const WebApp = () => {
        return (
        <div className="webapp-container">
        <SideMenu />

        
        <div className="dashboard">
        <Routes>
          <Route path="/Dashboard/Dash" element={<Dashboard />} />
          <Route path= "/Dashboard/Courses" element={<Courses />} />
          <Route path= "/Dashboard/Settings" element={<Settings />} />
          <Route path="/Dashboard/*" element={<NotFoundPage link='/Dashboard/dash' />} />
        </Routes>
        </div>
        </div>
        )
}
export default WebApp;