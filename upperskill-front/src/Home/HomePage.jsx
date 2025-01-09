import {Top} from '../icons/Top-1.jsx';
import {Books} from '../icons/Books.jsx';
import {Users} from '../icons/Users.jsx';
import MvpFeature from '../mvp/mvp.jsx';
import Label from '../label/label.jsx';
import { LoginSecreen} from '../assets/login-secreen.jsx';
import { Progress} from '../assets/progress-svg.jsx';
import { TakeQuiz} from '../assets/take-quiz.jsx';
import { ArrowRight } from '../icons/Arrow-right.jsx';
import { KeyValueSection } from '../kvp/kvp.jsx';
import { BannerObj } from '../banner/BannerObj.jsx';
import CtaButton from '../cta-btn/button.jsx';
import './HomePage.css';

const HomePage = () => {

        return(
        <>
        {/* Landing section */}
        <div className="landing">
                {/* Display section */}
                <div className="display-text">
                        <h1 className="main-display">
                        <span className="display-1">Upgrade Your Skills with</span>
                        <span className="display-2">AI-Driven Precision</span>
                        </h1>
                        <h3 className='main-dscp'>Discover your true potential with personalized course<br/> recommendations tailored to your skill level.</h3>
                </div>
                        {/* Call To Action section */}
                        <div className="cta-landing">
                        <CtaButton priority="primary" text="Get Started For Free" theme="Dark" onClick={() => (window.location.pathname = '/Sign-Up')} />
                        <CtaButton priority="link" text="Learn more" onClick={() => (window.location.pathname = '/About')}/>
                </div>
        </div>
        <div className="banner">
                <BannerObj text='Top Experts' icon={<Top />}/>
                <BannerObj text='100+ Courses' icon={<Books color="#E8EFF5"/>}/>
                <BannerObj text='1000+ Student' icon={<Users />}/>
        </div>

        <div className='mvp-section'>
                <Label text='New Feature' expandedText='AI-Driven Quiz is here !'/>
                <div className="feature-section-heading" >
                        <h1>How It work !</h1>
                        <h4>Your Personalized Learning Journey in 3 Simple Steps</h4>
                </div>
                        <div className="mvp-container">
                        <MvpFeature isSwapped = {false} title='Take you first quiz' illust={<LoginSecreen />} description='Start your journey by creating a secure account. Once registered, take an engaging quiz designed to evaluate your current skill level and set the foundation for a tailored learning experience.' />
                        <MvpFeature isSwapped = {true} title='Get AI-Driven Recommendations' illust={<TakeQuiz />} description='Our intelligent AI analyzes your quiz results to identify gaps in your knowledge. It then recommends a curated list of courses to help you achieve your learning goals effectively and efficiently.' />
                        <MvpFeature isSwapped = {false} title='Track Your Progress' illust={<Progress />} description='Access a dynamic dashboard that visualizes your progress, highlights your achievements, and keeps you motivated. Stay on track and celebrate every milestone on your way to mastery.' />
                </div>
                <CtaButton priority="primary"  theme="Dark" text="Start Your Journey For Free" onClick={() => (window.location.pathname = '/Sign-Up')} icon={<ArrowRight />}/>
        </div>
        <KeyValueSection />
        </>
)}

export default HomePage;