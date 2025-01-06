import CtaButton from '../cta-btn/button';
import { ArrowRight } from '../icons/Arrow-right';
import './kvp.css';
import PropTypes from 'prop-types';
import { KvpItem } from './KvpItem';
import {Ai} from '../icons/AI-Icon';    
import { BooksBlack } from '../icons/Books-black';
import { ProgressTraining } from '../icons/progress-training';
import { UserFreindly } from '../icons/user-freindly';

export const KeyValueSection = () => {
        return(
                <>
                <div className="key-value-section">
                        <div className="label-title" >
                                <p>Features</p>
                        </div>
                        <h1>Why Choose UpperSkill ?</h1>
                        <div className="key-value-content">
                        <div className="key-value-row">
                        <KvpItem text='AI-Powered Assessments' icon={<Ai />} description='Get insightful results that match your unique learning needs.'/>
                        <KvpItem text='Personalized Recommendations' icon={<BooksBlack />} description='Access curated courses designed just for you.' />
                        </div>
                        <div className="key-value-row">
                        <KvpItem text='Progress Tracking' icon={<ProgressTraining />} description='Stay motivated with a dashboard that showcases your achievements.'/>
                        <KvpItem text='User-Freindly Design' icon={<UserFreindly />} description='Enjoy a sleek, intuitive interface crafted for your convenience.' />
                        </div>
                        </div>
                        <CtaButton text="Get Started" 
                        onClick={() => (window.location.pathname = '/Sign-Up')}
                        priority="primary" theme="Dark" icon={<ArrowRight />} />
                </div>
                </>
        )
}

KeyValueSection.propTypes = {
color: PropTypes.string
}