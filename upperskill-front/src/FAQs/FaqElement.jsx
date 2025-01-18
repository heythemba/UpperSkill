import propTypes from 'prop-types';
import { useState } from 'react';
import './FaqElement.css';
import { ArrowUp } from '../icons/ArrowUp';

const FaqElement = ({
        question = "Question ?",
        answer ="Answer.",
}) => {

        const [isExpanded, setIsExpanded] = useState(false);
        const handleExpand = () => {
                setIsExpanded(!isExpanded);
        }
        return (
            <div className='faq-element'>
                <div className="question">

                <h4 >{question}</h4>
                <div onClick={() => handleExpand()} >{<ArrowUp isClicked={isExpanded}/>}</div>
                </div>
                {isExpanded && (
                    <div className="answer">
                    <div className='divider-line'></div>
                    <p className='answer'>{answer}</p>
                    </div>
                )}
                
            </div>
        );
}

FaqElement.propTypes = {
        question: propTypes.string.isRequired,
        answer: propTypes.string.isRequired,
}

export default FaqElement;