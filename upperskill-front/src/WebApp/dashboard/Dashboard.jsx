import './Dashboard.css';
import PropTypes from "prop-types";
import QuestionList from '../../quiz/QuestionList.jsx';


const Dashboard = ({

        quizTaken = false,

        }) => {

        return (
                <div className="dashboard-body">
                <div className="dash-content">
                <h4>Dashboard</h4>
                <div className="dash-divider"></div>
                </div>
                {quizTaken == true ? (
                        <div className="quiz-taken">
                                <h4>Quiz Taken</h4>
                        </div>

                        ) : (

                        <div className="quiz-not-taken">
                                <QuestionList />
                        </div>
                )}


                </div>
        )
        }

Dashboard.propTypes = {

        quizTaken: PropTypes.bool

        }

export default Dashboard;