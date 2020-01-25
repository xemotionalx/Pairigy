import React from 'react';
import PropTypes from 'prop-types';

const Skills = ({profile: { skills }}) => {
    return (
        <div className="section-profile--skills text-center">
         <h4 className="heading-size--xs font-weight-bold">Skills: </h4>

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

