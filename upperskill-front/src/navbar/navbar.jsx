import PropTypes from "prop-types";
import "./navbar.css";
import logo from "../assets/logo192.png";
import { Avatar } from "../icons/avatar.jsx";
import CtaButton from "../cta-btn/button.jsx";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Settings, User, LogOut } from 'react-feather';


export const NavBar = ({
    isLogged = false,
    UserIcon = <Avatar />,
    UserName = "Haythem"
}) => {
    

   

    const [profileMenu, setProfileMenu] = useState(false);
    const handleProfileMenu = () => { 
        setProfileMenu(!profileMenu);
    }

    return (
        <nav className="nav-bar">
            
            {!isLogged  && (
                <>
                
                    <div className="home-grp">
                        <Link to="/Home">
                        <img  src={logo}  alt="Logo" />
                        </Link>
                    <div className="nav-links">
                        <Link className='nav-link' to='/Home'>Home</Link>
                        <Link className='nav-link' to='/About'>About Us</Link>
                        <Link className='nav-link' to='/FAQs'>FAQs</Link>
                        <Link className='nav-link' to='/Privacy'>Privacy Policy</Link>
                    </div>
                    </div>
                    <div className="cta-grp">
                          
                        <Link className="nav-link" to='/Login'>Login {<Avatar />}</Link>
                        
                        
                        <CtaButton className="cta-btn" priority ="primary" text="Get Started For Free" theme="Dark"
                        onClick={()=> (window.location = "/Sign-Up")} />
                    </div>
                </>
            )}

            {isLogged && (
                <>
                    <div className="logged-navbar" onClick={() => handleProfileMenu()}>
                        
                        <div className="user-menu">
                        <h6>{UserName}</h6>
                        {UserIcon}
                        </div>
                        {profileMenu && (
                            <div className="menu-profile" onMouseLeave={() => handleProfileMenu()}>
                            <ul>
                                    <li>
                                            <Link className='profile-menu-links' to="/Dashboard/profile">{<User size={24} color='var(--primary-500)' />} Profile</Link>
                                    </li>
                                    <li> 
                                            <Link className='profile-menu-links' to="/Dashboard/Settings">{<Settings size={24} color='var(--primary-500)' /> } Settings</Link>
                                    </li>
                                    <li>
                                            <button className='logout-btn' onClick={() => console.log('Logged-out')}>{<LogOut size={24} color='var(--background-color)' />} Logout</button>
                                    </li>
                            </ul>
                            </div>
                        )}
                    </div>

                    
                </>
            )}
        </nav>
    );
};

NavBar.propTypes = {
    isLogged: PropTypes.bool,
    UserIcon: PropTypes.node,
    UserName: PropTypes.string,
};
