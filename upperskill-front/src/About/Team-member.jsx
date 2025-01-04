 import PropTypes from 'prop-types';
 import './team-member.css';
 import DefaultTeam from '../assets/default-team.png';
 
 const TeamMember = ({
        fullName = "Default Team Name",
        role = "Team Member Developer", 
        linkedin = "/in/heythem-ba"
        }) => {
                const handleLinkedIn = () => {
                        window.open(`https://www.linkedin.com${linkedin}`, '_blank');
                }
        return (
            <div className="team-member" 
            onClick={() => {handleLinkedIn()} }>
                <img className='team-image' src={DefaultTeam} alt="Team-Member" />
                <div className='member-info'>
                <h4 className="fullName">{fullName}</h4>
                <p className="role">{role}</p>
                </div>
            </div>
        )
}

TeamMember.propTypes = {
    fullName: PropTypes.string.isRequired,
    role: PropTypes.string.isRequired,
    img : PropTypes.node,
    linkedin: PropTypes.string.isRequired
}

export default TeamMember;