import './button.css';
import PropTypes from "prop-types";

const CtaButton = ({ 
    priority = "primary",
    text = "Button",
    icon,
    theme = "Light",
    onClick}) => {
        
    

    return (
    <>
     <div className='cta-btn'>
        <button className={priority}
        onClick={onClick} icon={icon}>
        <span className={theme} > {text}</span>{icon && <span className="icon-wrapper">{icon}</span>}
        </button>
        
     </div>
    </>
    )
};

CtaButton.propTypes = {
    priority: PropTypes.oneOf(["primary","secondary","link"]),
    text: PropTypes.string.isRequired,
    icon: PropTypes.node,
    onClick: PropTypes.func,
    theme: PropTypes.oneOf(["Light","Dark"])
};

export default CtaButton;