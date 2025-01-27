import CtaButton from '../../cta-btn/button.jsx';
import Loader from './Loader.jsx';
import { useEffect, useState, useContext } from 'react';
import openai from '../../requestQuestions.mjs';
import { UserStatus } from '../../UserProvider.jsx';

const QuestionsList = () => {

  const { handleQuiz } = useContext(UserStatus);
  
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
              content: `Write 10 questions about these topics : Health and Personal Development, Language and Communication, Creative Skills, Business and Management, Technology and Programming, STEM (Science, Technology, Engineering, Mathematics), with 4 multiple choice answers in strict JSON format ONLY.
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
        console.error("Failed to fetch questions:", error);
      }
    };

    fetchQuestions();
  }, [questionsData]);

    // Function to handle user answers



  const handleAnswer = (index, choice) => {
      const newAnswers = [...userAnswers];
      newAnswers[index] = choice;
      setUserAnswers(newAnswers);
    };


    
    //Disabled ChatGPT Request because we should have a premium account to send multiple requests
    // Fetch Recommandation from OpenAI API
 /*
    const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

      const fetchAnalyse = async () => {
        try {
        console.log("Waiting for 20 seconds before making the request...");
  
          // Wait for 20 seconds (20,000 milliseconds)
            await delay(20000);

          console.log("Sending the request...");
  // Proceed with the fetch request
          const completion = await openai.chat.completions.create({
            model: "gpt-4o-mini",
            messages: [
              { role: "system", content: "You are an IT Teacher." },
              {
                role: "user",
                content: `Using These Questions: ${questionsData} and these answers: ${userAnswers}
                Analyse the answers and return one recommandation from these topics :Health and Personal Development, Language and Communication, Creative Skills, Business and Management, Technology and Programming, STEM (Science, Technology, Engineering, Mathematics) for the user to be expert in one filed based on his answers, 
                Your Answer should be in strict JSON format ONLY.
                },`
              },
            ],
            max_tokens: 10,
            
          });
  
          // Capture the raw response
          let rawAnswer = completion.choices[0].message.content;
  
          // Log raw content for debugging
          console.log("Raw Analyse:", rawAnswer);
  
          // Remove backticks and any extra formatting
          rawAnswer = rawAnswer.replace(/```json|```/g, '').trim();
  
          // Attempt to parse as JSON
          const analysedAnswer = JSON.parse(rawAnswer);
          
          // Log parsed JSON for debugging
          console.log("Here is you Analysis !!!!!!!!!!!! ", analysedAnswer);
        } catch (error) {
         throw console.error("Failed to analyse user questions:", error);
        }
      };

      useEffect(() => {
        if (userAnswers) {
          fetchAnalyse();
        };

      },[userAnswers]);// eslint-disable-line react-hooks/exhaustive-deps
  
      */ 
  
    const handleSubmit = () => {
          const userAnswersJson = JSON.stringify(userAnswers);
          console.log(userAnswersJson);
          // User answer stored in Json formart to send it back
        };
  

        if (!Array.isArray(questionsData)) {
                return <Loader />;
        };

    
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
                            
                                <CtaButton priority='primary' text="submit" theme='Dark' onClick={()=> (handleSubmit(), handleQuiz())} />
                                </div>
                          </div>
                        </div>
    
        )
}


export default QuestionsList;