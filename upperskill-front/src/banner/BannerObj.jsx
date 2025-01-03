import PropTypes from 'prop-types';
import './BannerObj.css';

export const BannerObj = ({text = "Default Text",icon}) => {
        return(
                <>
                <div className="banner-obj">
                <h2 className='text-banner'>{text}</h2>
                <span>{icon}</span>
                </div>
                </>
        );
}

BannerObj.propTypes = {
    text: PropTypes.string.isRequired,
    icon: PropTypes.node
    
};