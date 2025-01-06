import './sideMenu.css';
import logo from "../assets/white-logo192.png";
import { useState } from 'react';
import {DashboardIcon} from '../icons/DashboardIcon.jsx';


const SideMenu = () => {
        const [state, setState] = useState('');
        const handleState = () => {
                setState('active');
        }
        return (
                
        <div className="side-menu">
                <div className="nav-side-menu">
                <img src={logo} alt="UpperSkill" />
                <div className="divider-side-menu"></div>
                <div className='list-menu'>
                <button className={state} onClick={()=> handleState()} > 
                <span>{<DashboardIcon />}</span>
                Dashboard</button>
                <button className={state} onClick={()=> handleState()} >
                Courses</button>
                <button className={state} onClick={()=> handleState()} >
                Settings</button>
                <button className={state} onClick={()=> handleState()} > 
                FAQs</button>
                </div>
                </div>
                <div className="logout-menu">
                <div className="divider-side-menu"></div>
                <button className="btn-menu" onClick={()=> (console.log('logout'))}
                >Logout</button>
                </div>
        </div>
        )
}

export default SideMenu;