import PropTypes from 'prop-types';
import './footer.css';
import { LogoWhite } from '../assets/white-logo192';
import { Link } from 'react-router-dom';

// Getting the actual year dynamically
const getFullYear = () => new Date().getFullYear();

const Footer = (
        {isLogged = false}
) => {
      return(
        <div className="footer">       
        {!isLogged && (
        <>
                <div className="footer-container">
                        <div className='footer-logo'>
                        <Link to='/Home'>
                        <LogoWhite />
                        </Link>
                        </div>
                        <div className='footer-links'>
                                <Link className='footer-link' to='/Home'>Home</Link>
                                <Link className='footer-link' to='/About'>About Us</Link>
                                <Link className='footer-link' to='/Contact'>Contact Us</Link>
                                <Link className='footer-link' to='/FAQ'>FAQs</Link>
                                <Link className='footer-link' to='/Privacy'>Privacy Policy</Link>
                        </div>
                </div>          
                        <div className='copyright'>
                                <p>UpperSkill {getFullYear()} Copyright©</p>
                        </div>

        </>
                        
        )}
         {isLogged && (
        <> 
                <div className='copyright'>
                        <p>Copyright© {getFullYear()} UpperSkill</p>    
                </div>
        </>
        )}
        </div>
      )
}

Footer.propTypes = {
        isLogged: PropTypes.bool
}
export default Footer;