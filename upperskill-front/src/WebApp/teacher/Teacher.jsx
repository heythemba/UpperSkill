import CoursesCrud from './CourseCrud';
import './Teacher.css';
import { Plus } from 'react-feather';
import { useContext } from 'react';
import CreateCourseForm from './CreateCourseForm';
import {UserStatus} from '../../UserProvider.jsx';

const Teacher = () => {

        const {courseCreation, handleCourseCreation} = useContext(UserStatus);

        return (
                <div className="teacher-body">
                <div className="heading-teacher">
                        <div className="cta-heading">
                        <h4 className='CRUD-heading'>Dashboard</h4>
                        <button className="cta-primary"
                        onClick={() => handleCourseCreation()}
                        >{<Plus />} Create Course</button>
                        {courseCreation && <CreateCourseForm />}
                        </div>
                        <div className="heading-divider"></div>
                </div>
                <CoursesCrud courseTitle='Course Title' courseDescription='CourseDescription '/>
                </div>
        )
}

export default Teacher;