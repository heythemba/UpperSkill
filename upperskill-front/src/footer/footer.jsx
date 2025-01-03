import PropTypes from 'prop-types';
import CtaButton from '../cta-btn/button';
import './footer.css';
import { LogoWhite } from '../assets/white-logo192';

// Getting the actual year dynamically
const getFullYear = () => new Date().getFullYear();

const Footer = (
        {isLogged = false}
) => {
      return(
        <div className="footer">       
        {!isLogged && (
                <>
                <div className="container">
                        <div className='footer-logo'>
                        <LogoWhite />
                        </div>
                        <div className='footer-link'>
                                <CtaButton className='cta-btn' text='Home' priority='link'  theme='Dark'/>
                                <CtaButton className='cta-btn' text='About Us' priority='link'  theme="Dark" />
                                <CtaButton className='cta-btn' text='Contact Us' priority='link' theme="Dark"  />
                        </div>
                </div>
                        <div className='divider'></div>    
                        <div className='copyright'>
                                <p>Copyright© {getFullYear()} UpperSkill</p>
                        </div>
                </>
                        
                )}
         {isLogged && (
                <> 
                <div className='divider'></div>    
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