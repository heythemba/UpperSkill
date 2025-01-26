import CoursesCard from '../courses/CoursesCard.jsx';
import './Dashboard.css';
import QuestionsList from '../questions/questionsList.jsx';
import { useContext } from 'react';
import { UserStatus } from '../../UserProvider.jsx';

const Dashboard = () => {
  
  const { quizTaken} = useContext(UserStatus);

  return (
    <div className='dashboard-body'>
      
      {quizTaken ? (

        <CoursesCard />

      ) : (
        
        <QuestionsList />

      )}

    </div>
  );
};


export default Dashboard;
