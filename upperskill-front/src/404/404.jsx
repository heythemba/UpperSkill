import { Link } from "react-router-dom";
import { IllustNotFound } from "../assets/illust404";
import { ArrowBack } from "../icons/arrowBack.jsx";
import './404.css';
import propTypes from 'prop-types';

const NotFoundPage = ({
        
        link = '/Home'

}) => {
        return (
                <div className="not-found-container">
                        <IllustNotFound className="Illustration"/>
                        <div className="not-found-action">
                                <h4>Sorry! The page you’r looking for does not exisit.</h4>
                                <div className="back-link">
                                {<ArrowBack />}
                                <Link to={link} className="link">Back</Link>
                                </div>
                        </div>
                </div>
                );
}

NotFoundPage.propTypes = {
        link: propTypes.string
}

export default NotFoundPage;