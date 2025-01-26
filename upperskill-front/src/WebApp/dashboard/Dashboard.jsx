import DashboardCourses from '../courses/DashboardCourses.jsx';
import './Dashboard.css';
import QuestionsList from '../questions/questionsList.jsx';
import { useContext } from 'react';
import { UserStatus } from '../../UserProvider.jsx';
import Teacher from '../teacher/Teacher.jsx';

const Dashboard = () => {
  
  const { userData} = useContext(UserStatus);

  return (
    <div className='dashboard-body'>

     {userData.isStudent ? (
          userData.quizTaken ? (

            <DashboardCourses />

          ) : (
            
            <QuestionsList />

          )

     ):(

      <Teacher />

     )}
      
      

    </div>
  );
};


export default Dashboard;
