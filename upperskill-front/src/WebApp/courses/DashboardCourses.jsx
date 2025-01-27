import CoursesCard from "./CoursesCard";
import EnrolledCourseList from "./EnrolledCourseList";
import './DashboardCourses.css';
import { useEffect, useState } from 'react';
import { toast, Toaster } from 'react-hot-toast';

const  DashboardCourses = () => {

        const [courseList, setCourseList] = useState([]);

        const fetchTeacherData = async () => {
 
                 try {
                         
                         const res = await fetch(`/api/course/all`, {
                           method: 'GET',
                           headers: {
                             'Content-Type': 'application/json'
                           }
                         });
                         const courseData = await res.json();
                         setCourseList(courseData);
                         if (!res.ok) {
                                 throw new Error('Cannot get courses');
                         }
                       } catch (error) {
                         console.error(error);
                         toast.error(error.message);
                       }
         } 
         
         useEffect(() => {
                 if (courseList) {
       fetchTeacherData();
     }
         
         },[courseList]);

        return (
       <div className="courses-conatiner">
        <div className="enrolled-section">
        <h4 className="course-title">Enrolled Courses</h4>
        <div className="divider"></div>
        <EnrolledCourseList courseTitle='Web Development' courseDescription="Learn Basics of web Developpment" />
        </div>

        <div className="recommended-section">
        <h4 className="course-title">Recommended courses based on your skills:</h4>
        <div className="divider"></div>
       {courseList.map((courses, index) => (
        <div className="course-card-item" key={index} >
        <CoursesCard  courseTitle={courses.title} courseDescription={courses.description}/>
        </div>
                                                 
         ))}
        </div>
        <Toaster />
       </div>
        );
        }


export default DashboardCourses;