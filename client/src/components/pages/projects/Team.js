import React from 'react';
import PropTypes from 'prop-types';

const Team = ({project: { team }}) => {

    return (
        <div>
            {team.map((user) => (
        <p>
            {user.role}
        </p>
      ))}
        </div>
    )
}

Team.propTypes = {
    project: PropTypes.object.isRequired
}

export default Team;

