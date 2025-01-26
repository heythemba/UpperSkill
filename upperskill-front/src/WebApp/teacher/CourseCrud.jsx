import PropTypes from "prop-types";
import Media from '../../assets/Media.png';
import './CourseCrud.css';
import { Edit , Delete} from 'react-feather';

const CoursesCrud = ({
        courseTitle = 'Course Title',
        courseDescription = 'Course Description'
}) => {
        return (
                <div className="crud-container">
                        <img src={Media} alt='course banner'/>
                        <div className="crud-content">
                                <h6>{courseTitle}</h6>
                                <p>{courseDescription}</p>
                        </div>
                        <div className="cta-crud">
                                <button className="secondary-btn" onClick={() => console.log('Edit button')} >{<Edit />} Edit</button>
                                <button className="warning-btn" onClick={() => console.log('Delet button')} >{<Delete />}Delete</button>
                        </div>
                </div>
        )
}

CoursesCrud.propTypes = {
        courseTitle: PropTypes.string,
        courseDescription: PropTypes.string,    
        onClick: PropTypes.func
}

export default CoursesCrud;