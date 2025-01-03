import PropTypes from 'prop-types';
import './kvpitem.css';

export const KvpItem = ({text = "Default Text", description = "Default Description",icon = "default-icon"}) => {
        return(
                <>
                <div className="kvp-container">
                <h3 className="title">{text}</h3>
                <span className='icon'>{icon}</span>
                <p className="desc">{description}</p>
                </div>
                </>
        );
}

KvpItem.propTypes = {
    text: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    icon: PropTypes.node
};
