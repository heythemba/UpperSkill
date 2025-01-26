import CoursesCard from "./CoursesCard";
import EnrolledCourseList from "./EnrolledCourseList";
import './DashboardCourses.css';

const  DashboardCourses = () => {

        return (
       <div className="courses-conatiner">
        <div className="enrolled-section">
        <h4 className="course-title">Enrolled Courses</h4>
        <div className="divider"></div>
        <EnrolledCourseList courseTitle='Web Development' courseDescription="Learn Basics of web Developpment" />
        </div>

        <div className="recommended-section">
        <h4 className="course-title">Recommended Courses</h4>
        <div className="divider"></div>
        <CoursesCard courseTitle='Web Development' courseDescription="Learn Basics of web Developpment" />
        </div>
       </div>
        );
        }


export default DashboardCourses;