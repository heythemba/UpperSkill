import './sideMenu.css';
import logo from "../assets/white-logo192.png";
import { useState } from 'react';
import {DashboardIcon} from '../icons/DashboardIcon.jsx';
import {CoursesIcon} from '../icons/CoursesIcon.jsx';
import {SettingIcon} from '../icons/SettingIcon.jsx';
import {FaqIcon} from '../icons/FaqIcon.jsx';
import {LogoutIcon} from '../icons/LogoutIcon.jsx';


const SideMenu = () => {
        const [activeButton, setActiveButton] = useState(window.location.pathname);

        const handleButtonClick = (path) => {
          setActiveButton(path);
          window.location.pathname = path;
        };
        return (
                
        <div className="side-menu">
                <div className="nav-side-menu">
                <img src={logo} alt="UpperSkill" />
                <div className="divider-side-menu"></div>
                <div className='list-menu'>
                <button
            className={`btn-menu ${activeButton === '/Dashboard/dash' ? 'active' : ''}`}
            onClick={() => handleButtonClick('/Dashboard/dash')}
          >
            <span><DashboardIcon /></span>
            Dashboard
          </button>
          <button
            className={`btn-menu ${activeButton === '/Dashboard/courses' ? 'active' : ''}`}
            onClick={() => handleButtonClick('/Dashboard/courses')}
          >
            <span><CoursesIcon /></span>
            Courses
          </button>
          <button
            className={`btn-menu ${activeButton === '/Dashboard/settings' ? 'active' : ''}`}
            onClick={() => handleButtonClick('/Dashboard/settings')}
          >
            <span><SettingIcon /></span>
            Settings
          </button>
          <button
            className={`btn-menu ${activeButton === '/Dashboard/faqs' ? 'active' : ''}`}
            onClick={() => handleButtonClick('/Dashboard/faqs')}
          >
            <span><FaqIcon /></span>
            FAQs
          </button>
                </div>
                </div>
                <div className="logout-menu">
                <div className="divider-side-menu"></div>
                <button className="btn-logout" onClick={()=> (console.log('logout'))}
                >
                  <span><LogoutIcon /></span>
                  Logout
                  </button>
                </div>
        </div>
        )
}

export default SideMenu;