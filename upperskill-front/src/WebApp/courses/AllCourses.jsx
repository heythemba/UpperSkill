import './AllCourses.css';
import {toast, Toaster } from "react-hot-toast";
import { useEffect,useState } from 'react';
import CoursesCard from './CoursesCard.jsx';

const AllCourses = () => {

 const [courseList, setCourseList] = useState([]);
 const fetchCourses = async () => {

        try {
                const res = await fetch('/api/course/all', {
                  method: 'GET',
                  headers: {
                    'Content-Type': 'application/json'
                  }
                });
                const data = await res.json();
                if (!res.ok) {
                        throw new Error('Something went wrong');
                }
                setCourseList(data);
                console.log('here is course list ', courseList);
              } catch (error) {
                console.error(error);
                toast.error(error.message);
              }
}

useEffect(() => {
        fetchCourses();
// eslint-disable-next-line react-hooks/exhaustive-deps
},[]);

        return (
                <div className="all-course-container">
                        <div className="course-heading">
                        <h4 className="all-courses">All Courses</h4>
                        <div className="heading-divider"></div>
                        </div>

                        {courseList.map((course, index) => (
                        <div className="course-card-item" key={index} >
                        <CoursesCard  courseTitle={course.title} courseDescription={course.description}/>
                        </div>
                          
                        ))}
                        <Toaster
                      position="top-center"
                      reverseOrder={false}
                      />
                </div>
        );
}

export default AllCourses;