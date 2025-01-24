import CtaButton from '../../cta-btn/button.jsx';
import Loader from './Loader.jsx';
import { useEffect, useState } from 'react';
import openai from '../../requestQuestions.mjs';
import PropTypes from 'prop-types'

const QuestionsList = ({
        quizTaken = false,
}) => {
  
        // State for storing questions data
  const [questionsData, setQuestionsData] = useState(null);
  //state to store user answers
  const [userAnswers, setUserAnswers] = useState([]);

    // Fetch questions from OpenAI API
  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const completion = await openai.chat.completions.create({
          model: "gpt-4o-mini",
          messages: [
            { role: "system", content: "You are an IT Teacher." },
            {
              role: "user",
              content: `Write 10 questions about IT, with 4 multiple choice answers in strict JSON format ONLY.
              Each question should have the following structure:
              {
                "question": "What is 2 + 2?",
                "choices": ["2", "3", "4", "5"],
                "answer": "4"
              },`
            },
          ],
          max_tokens: 1000,
          
        });

        // Capture the raw response
        let rawContent = completion.choices[0].message.content;

        // Log raw content for debugging
        console.log("Raw Response:", rawContent);

        // Remove backticks and any extra formatting
        rawContent = rawContent.replace(/```json|```/g, '').trim();

        // Attempt to parse as JSON
        const questions = JSON.parse(rawContent);

        // Log parsed JSON for debugging
        console.log("Parsed JSON: ", questions);

        setQuestionsData(questions);
      } catch (error) {
       throw console.error("Failed to fetch questions:", error);
      }
    };

    fetchQuestions();
  }, []);


  const handleAnswer = (index, choice) => {
      const newAnswers = [...userAnswers];
      newAnswers[index] = choice;
      setUserAnswers(newAnswers);
    };
    // State to switch between quiz taken or not.
    const [userDidQuiz, setQuizTaken] = useState(quizTaken);
  
    useEffect(() => {
          if (userDidQuiz) {
            setQuizTaken(true);
          }
        }, [userDidQuiz]);
  
    const handleSubmit = () => {
          const userAnswersJson = JSON.stringify(userAnswers);
          console.log(userAnswersJson);
          // User answer stored in Json formart to send it back
        };
  

        if (!Array.isArray(questionsData)) {
                return <Loader />;
              }


        return (
                
                <div className="quiz-not-taken">
                          <div className="question-list-container">
                            {questionsData.map((question, index) => (
                              <div key={index} className="question-list">
                                <h4>Question N:{index + 1}</h4>
                                <p className="question">{question.question}</p>
                                <ul>
                                  {question.choices.map((choice, choiceIndex) => (
                                        <li className="list-item" key={choiceIndex}>
                                        <input
                                        className="input-radio"
                                        type="radio"
                                        name={`answer-${index}`}
                                        value={choice}
                                        onChange={() => handleAnswer(index, choice)}
                                        checked={userAnswers[index] === choice}
                                        />
                                      {choice}
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
    
        )
}

QuestionsList.propTypes = {
        quizTaken: PropTypes.bool
      };

export default QuestionsList;