import PropTypes from 'prop-types';
import './mvp.css';

const MvpFeature = ({ 
        title = "This is title", 
        description = "this is a description",
        illust, 
        isSwapped = false
        }) => {
  return (
        <>
    <div className={`mvp-feature ${isSwapped ? 'swapped' : ''}`}>
     
      <div className="mvp-feature-text">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
      
      <div className="mvp-feature-illustration">
        {illust}
      </div>

    </div>
    </>
  );
};

MvpFeature.propTypes = {
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        isSwapped: PropTypes.bool,
        illust : PropTypes.node
}
export default MvpFeature;
