import React from 'react';
import PropTypes from 'prop-types';

const MySkills = ({profile: { skills }}) => {
    return (
        <div>
         <span className="font-weight-bold">Skills: </span>

            {skills.map((skill, index) => (
        <li className="list-item--skill mr-1" key={index}>
            {skill}
        </li>
      ))}
        </div>
    )
}

MySkills.propTypes = {
    profile: PropTypes.object.isRequired
}

export default MySkills;

