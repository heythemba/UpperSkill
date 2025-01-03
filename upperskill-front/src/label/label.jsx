import PropTypes from 'prop-types';
import './label.css';

const Label = ({ 
        text = "Hello there!", 
        expandedText = "New Feature has arrived !"
 }) => {
  return (
<>
    <div className="label">
      <div className="label-fist-text">
        <span className="first-text">{text}</span>
      </div>
      <div className="label-expanded-text">
        <span className="expanded-text">{expandedText}</span>
      </div>
    </div>
</>
  );
};

Label.propTypes = {
  text: PropTypes.string.isRequired, // Main label text
  expandedText: PropTypes.string.isRequired, // Expanded text shown on hover
};

export default Label;
