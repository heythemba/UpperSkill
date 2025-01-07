import './CourseList.css';
import CoursesCard from './CoursesCard';

const CourseList = () => {
        return (
                <div className="course-list">
                        <CoursesCard courseTitle='Web Development' 
                        courseDescription='Start your journey in learning web develoment for absoloute beginner' 
                        onClick={() => (console.log(`Course ${CoursesCard.courseTitle} has been clicked`))} />
                </div>
        );
}

export default CourseList;