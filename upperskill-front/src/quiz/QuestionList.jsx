import { useState } from 'react';
import questionsData from '../testQuestion.json';
import "./QuestionList.css";

const QuestionList = () => {
  const [userAnswers, setUserAnswers] = useState({});

  const handleAnswer = (questionIndex, choice) => {
    setUserAnswers(prevAnswers => ({
      ...prevAnswers,
      [questionIndex]: choice
    }));
  };

  const handleSubmit = () => {
    const userAnswersJson = JSON.stringify(userAnswers);
    console.log(userAnswersJson);
    // User answer stored in Json formart to send it back
  };

  return (

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
      <button onClick={() => handleSubmit()}>Submit</button>
    </div>
  );
};

export default QuestionList;