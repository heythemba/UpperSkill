import './FAQs.css';
import FaqElement from './FaqElement.jsx';
import { 
        GeneralQuestions,
        AccountAndQuizRelatedQuestions,
        CoursesAndLearningPath,
        TechnicalSupportAndPrivacy,
        FuturePlansAndUpdates
 } from './contentFaq.json';

const FAQs = () => {
        return (
                <div className="FAQs-container">
                <h1>Frequently Asked Questions (FAQs)</h1>
                <p className='intro'>Welcome to UpperSkill! Our mission is to empower your growth with AI-driven learning paths tailored to your needs. Dive into a smarter way to upskill and achieve your goals with precision and ease</p>
                <div className="faq-content">     
                <h4 className='faq-titel'>General Questions</h4>
                {GeneralQuestions.map((faq, index) => (
                        <FaqElement key={index} question={faq.question} answer={faq.answer} />
                ))}
                <h4 className='faq-titel'> Account And Quiz Related Questions</h4>
                {AccountAndQuizRelatedQuestions.map((faq, index) => (
                        <FaqElement key={index} question={faq.question} answer={faq.answer} />
                ))}

                {CoursesAndLearningPath.map((faq, index) => (
                        <FaqElement key={index} question={faq.question} answer={faq.answer} />
                ))}

                {TechnicalSupportAndPrivacy.map((faq, index) => (
                        <FaqElement key={index} question={faq.question} answer={faq.answer} />
                ))}

                {FuturePlansAndUpdates.map((faq, index) => (
                        <FaqElement key={index} question={faq.question} answer={faq.answer} />
                ))}


                </div>

        </div>
  );
}

export default FAQs;