import PropTypes from "prop-types";
import "./navbar.css";
import logo from "../assets/logo192.png";
import { Avatar } from "../icons/avatar.jsx";
import CtaButton from "../cta-btn/button.jsx";
import {UserAccount} from "../icons/UserAccount.jsx";
import { Link } from "react-router-dom";


export const NavBar = ({
    isLogged = false,
    UserIcon = <UserAccount />,
    UserName = "Haythem"
}) => {
    return (
        <nav className="nav-bar">
            
            {!isLogged && (
                <>
                
                    <div className="home-grp">
                        <Link to="/Home">
                        <img  src={logo}  alt="Logo" />
                        </Link>
                    <div className="nav-links">
                        <Link className='nav-link' to='/Home'>Home</Link>
                        <Link className='nav-link' to='/About'>About Us</Link>
                        <Link className='nav-link' to='/Contact'>Contact Us</Link>
                        <Link className='nav-link' to='/FAQ'>FAQs</Link>
                        <Link className='nav-link' to='/Privacy'>Privacy Policy</Link>
                    </div>
                    </div>
                    <div className="cta-grp">
                          
                        <CtaButton className="nav-btn" priority ="link" text="Log-in" theme="Light" icon={<Avatar />} 
                        onClick={()=> (window.location = "/Login")} />
                        
                        
                        <CtaButton className="cta-btn" priority ="primary" text="Get Started For Free" theme="Dark"
                        onClick={()=> (window.location = "/Sign-Up")} />
                    </div>
                </>
            )}

            {isLogged && (
                <>
                    <div className="logged-navbar">
                        <h6>{UserName}</h6>
                        <div className="avatar">{UserIcon}</div>
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
