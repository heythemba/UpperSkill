import './Dashboard.css';
import PropTypes from "prop-types";
import { useState, useEffect } from 'react';
import questionsData from '../../testQuestion.json';
import CtaButton from '../../cta-btn/button';
import CoursesCard from '../courses/CoursesCard'


const Dashboard = ({
        userDidQuiz = false
        }) => {
        // State to track if the quiz has been taken
  const [quizTaken, setQuizTaken] = useState(false);
        // State to store user answers
  const [userAnswers, setUserAnswers] = useState({});
        // Function to handle answer selection
  const handleAnswer = (questionIndex, choice) => {
    setUserAnswers(prevAnswers => ({
      ...prevAnswers,
      [questionIndex]: choice
    }));
  };


  useEffect(() => {
        if (userDidQuiz) {
          setQuizTaken(true);
        }
      }, [userDidQuiz]);    
  
  const handleSubmit = () => {
    const userAnswersJson = JSON.stringify(userAnswers);
    console.log(userAnswersJson);
    setQuizTaken(true);
    // User answer stored in Json formart to send it back
  };
        return (
                <div className="dashboard-body">
                <div className="dash-content">
                <h4>Dashboard</h4>
                <div className="dash-divider"></div>
                
                </div>
                {quizTaken == true ? (
                        <div className="quiz-taken">
                               <CoursesCard />
                        </div>

                        ) : (

                        <div className="quiz-not-taken">
                               <div className='question-list-container'>
                                                {/* map funtion to render like a for loop*/}
                                        {questionsData.content.questions.map((question, index) => (
                                                <div key={index} className="question-list">
                                                <h4>{question.topic}</h4>
                                                <p className='question'>{question.question}</p>
                                                <ul>
                                                {question.choices.map((choice, choiceIndex) => (
                                                <li className="list-item" key={choiceIndex}>
                                                        <input className='input-radio'
                                                        type="radio"
                                                        name={`answer-${index}`}
                                                        value={choice}
                                                        onChange={() => handleAnswer(index, choice)}
                                                        checked={userAnswers[index] === choice}
                                                        /> {choice}
                                                </li>
                                                ))}
                                                </ul>
                                                </div>
                                        ))}
                                        <div className="submit-question">
                                        <CtaButton priority='primary' text="submit" theme='Dark' onClick={()=> handleSubmit()} />
                                        </div>
                                        </div>
                        </div>
                )}


                </div>
        )
        }

Dashboard.propTypes = {

        userDidQuiz: PropTypes.bool

        }

export default Dashboard;