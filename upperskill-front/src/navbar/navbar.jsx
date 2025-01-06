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
                
                    <div className="browse-grp">
                        <Link to="/Home">
                        <img  src={logo}  alt="Logo" />
                        </Link>
                        <CtaButton className="nav-btn" priority ="link" text="Home" theme="Light"
                        onClick={()=> (window.location = "/Home")} />
                        <CtaButton className="nav-btn" priority ="link" text="About Us" theme="Light"
                        onClick={()=> (window.location = "/About")} />
                        <CtaButton className="nav-btn" priority ="link" text="FAQs" theme="Light"
                        onClick={()=> (window.location = "/FAQs")} />
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
