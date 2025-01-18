import propTypes from 'prop-types';
export const ArrowUp = ({
        isClicked = false
}) => {
        return (
<div className={`arrow-up${isClicked ? '-clicked' : ''}`}>
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="24" height="24" rx="12" fill="#12395E"/>
<path d="M11 16.174L11 3.99902L13 3.99902L13 16.174L18.6 10.574L20 11.999L12 19.999L4 11.999L5.4 10.574L11 16.174Z" fill="#FBFBFE"/>
</svg>
</div>
        );
}
ArrowUp.propTypes = {
        isClicked: propTypes.bool.isRequired,
}
