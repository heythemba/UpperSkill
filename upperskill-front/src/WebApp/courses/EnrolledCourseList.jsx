import './CourseList.css';
import CoursesCard from './CoursesCard';

const EnrolledCourseList = () => {


        return (
                <div className="enrolled-course-list">
                        <CoursesCard courseTitle='Web Development' 
                        courseDescription='Start your journey in learning web develoment for absoloute beginner' 
                        btnName='Continue Learning'
                        onClick={() => (console.log(`Course ${CoursesCard.courseTitle} has been clicked`))} />
                </div>
        );
}

export default EnrolledCourseList;