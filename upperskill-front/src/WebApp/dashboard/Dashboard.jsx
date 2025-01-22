import CoursesCard from '../courses/CoursesCard.jsx';
import './Dashboard.css';
import PropTypes from 'prop-types';
import QuestionsList from '../questions/questionsList.jsx';

const Dashboard = ({
  quizTaken = false,
}) => {
  

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

Dashboard.propTypes = {
  quizTaken: PropTypes.bool
};

export default Dashboard;
