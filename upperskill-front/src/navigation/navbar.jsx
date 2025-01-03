import PropTypes from "prop-types";
import "./navbar.css";
import logo from "../assets/logo192.png";
import { Avatar } from "../icons/avatar.jsx";
import CtaButton from "../cta-btn/button";

export const NavBar = ({
    isLogged = false
}) => {
    return (
        <div className="nav-bar">
            {!isLogged && (
                <>
                
                    <div className="browse-grp">
                        <img src={logo}  alt="Logo" />
                        <CtaButton className="nav-btn" priority ="link" text="Home" theme="Light"
                        onClick={()=> (console.log(`this is home button`))} />
                        <CtaButton className="nav-btn" priority ="link" text="About Us" theme="Light"
                        onClick={()=> (console.log(`this is About US button`))} />
                        <CtaButton className="nav-btn" priority ="link" text="FAQ" theme="Light"
                        onClick={()=> (console.log(`this is FAQ button`))} />
                    </div>
                    <div className="cta-grp">
                          
                        <CtaButton className="nav-btn" priority ="link" text="Log-in" theme="Light" icon={<Avatar />} 
                        onClick={()=> (console.log(`this is login button`))} />
                        
                        
                        <CtaButton className="cta-btn" priority ="primary" text="Get Started For Free" theme="Dark"
                        onClick={()=> (console.log(`this is getting started button`))} />
                    </div>
                </>
            )}

            {isLogged && (
                <>
                    <div className="text-wrapper-2">
                        <h4>Haythem</h4>
                    </div>

                    
                </>
            )}
        </div>
    );
};

NavBar.propTypes = {
    isLogged: PropTypes.bool
};
