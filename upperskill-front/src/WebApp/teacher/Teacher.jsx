import CoursesCrud from './CourseCrud';
import './Teacher.css';
import { Plus } from 'react-feather';
import { useContext,useEffect } from 'react';
import CreateCourseForm from './CreateCourseForm';
import {UserStatus} from '../../UserProvider.jsx';
import { Toaster,toast } from 'react-hot-toast';
import { useState } from 'react';

const Teacher = () => {

        const {courseCreation, handleCourseCreation, userData } = useContext(UserStatus);
        const [teacherCourseList, setTeacherCourseList] = useState([]);

       const fetchTeacherData = async () => {

                try {
                        
                        const res = await fetch(`/api/course/teacher/${userData._id}`, {
                          method: 'GET',
                          headers: {
                            'Content-Type': 'application/json'
                          }
                        });
                        const TeacherData = await res.json();
                        setTeacherCourseList(TeacherData);
                        if (!res.ok) {
                                throw new Error('Something went wrong');
                        }
                      } catch (error) {
                        console.error(error);
                        toast.error(error.message);
                      }
        } 
        
        useEffect(() => {
                if (userData._id) {
      fetchTeacherData();
    }
        // eslint-disable-next-line react-hooks/exhaustive-deps
        },[userData._id]);

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
                        <Toaster />
                </div>
                 {teacherCourseList.map((courseCreated, index) => (
                                        <div className="course-card-item" key={index} >
                <CoursesCrud  courseTitle={courseCreated.title} courseDescription={courseCreated.description}/>
                </div>
                                          
                ))}
                </div>
        )
}

export default Teacher;