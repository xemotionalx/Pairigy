import React from 'react';
import PropTypes from 'prop-types';

const Skills = ({profile: { skills }}) => {
    return (
        <div className="section-profile--skills">
         <span className="font-weight-bold">Skills: </span>

            {skills.map((skill, index) => (
        <li className="list-item--skill mr-1" key={index}>
            {skill}
        </li>
      ))}
        </div>
    )
}

Skills.propTypes = {
    profile: PropTypes.object.isRequired
}

export default Skills;

