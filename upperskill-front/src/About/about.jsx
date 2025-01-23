import { Link } from 'react-router-dom';
import './about.css';
import TeamMember from './Team-member';
import { ArrowRight } from '../icons/Arrow-right.jsx';

import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';

const AboutUS = () => {
        // Import the useLocation Module 
        const scrollPosition = useLocation();
        //reset scroll position
        useEffect(() => {
            window.scrollTo(0, 0);
        }, [scrollPosition]);

    return (
        <div className='about-us-container'>
        <div className="about-us">
         <div className="meet-the-team">
                <div className="about-header">
                <h1>About US</h1>
                <h3>Meet the Team</h3>
                <p className="team-desc">Hi! We’re Haythem and Racem — three passionate developers from Tunisia. 
                        Together, we’ve built UpperSkill, a smart educational platform that empowers you to learn better and faster. 
                        By assessing your current knowledge and guiding you through a customized learning path, 
                        UpperSkill ensures that every step of your journey leads to success.
                </p>
                </div>
                <div className="team-members">
                        <TeamMember fullName='Haythem Baganna' role='Front-End Developer' linkedin='/in/heythem-ba'/>
                        <TeamMember fullName='Racem Bouchnak ' role='Back-End Developer' linkedin='/in/Racem-Bouchnak' />
                </div>
         </div>
        </div>
        <div className='get-started-section'>
          <div className='heading'>
                <h4>Elevate your skills with our recommended courses</h4>
                <p>Our AI-Driven Quiz will assess your current knowledge and guide you through a customized learning path, UpperSkill ensures that every step of your journey leads to success.</p>
          </div>
          <Link to='/login' className='link-signup'>
          Get Started 
          {<ArrowRight />}
          </Link>
         </div>

        </div>
    )
}

export default AboutUS;