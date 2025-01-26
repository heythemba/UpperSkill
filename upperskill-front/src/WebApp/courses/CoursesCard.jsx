import './CoursesCard.css';
import Media from '../../assets/Media.png'
import PropTypes from "prop-types";


const CoursesCard = ({
        courseTitle = 'Course Title',
        courseDescription = 'Course Description',
        btnName = 'Enroll',
        onClick
}) => {
        return (
                <div className="course-card">
                        <img src={Media} alt='course banner'/>
                        <div className="card-content">
                                <h6>{courseTitle}</h6>
                                <p>{courseDescription}</p>
                        </div>
                        <div className="card-cta">

                                <button className="btn" onClick={onClick} >{btnName}</button>
                        </div>
                </div>
        )
}

CoursesCard.propTypes = {
        courseTitle: PropTypes.string,
        courseDescription: PropTypes.string,
        onClick: PropTypes.func,
        btnName: PropTypes.string
}

export default CoursesCard;