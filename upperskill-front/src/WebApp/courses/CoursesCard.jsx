import './CoursesCard.css';
import Media from '../../assets/Media.png'
import PropTypes from "prop-types";


const CoursesCard = ({
        courseTitle = 'Course Title',
        courseDescription = 'Course Description',
        onClick
}) => {
        return (
                <div className="course-card">
                        <img src={Media} alt='course banner'/>
                        <div className="card-content">
                                <h4>{courseTitle}</h4>
                                <p>{courseDescription}</p>
                        </div>
                        <div className="card-cta">
                                <div className="in-progress-label">
                                        <p className='content'>In-Pogress</p>
                                </div>
                                <button className="btn" onClick={onClick} >Continue learning</button>
                        </div>
                </div>
        )
}

CoursesCard.propTypes = {
        courseTitle: PropTypes.string,
        courseDescription: PropTypes.string,
        onClick: PropTypes.func
}

export default CoursesCard;