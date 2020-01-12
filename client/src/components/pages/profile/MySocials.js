import React from 'react';
import PropTypes from 'prop-types';

const MySocials = ({profile: { social }}) => {
    return (
        <div>

            { social.youtube ? 
            <li className="list-item--social">
                <a href={social.youtube}>
                <i className="fab fa-youtube fa-2x mr-3"></i>
                </a>
            </li>
            : ""
            }

            { social.twitter ? 
            <li className="list-item--social">
                <a href={social.twitter}>
                <i className="fab fa-twitter fa-2x mr-3"></i>
                </a>
            </li>
            : ""
            }

        </div>
    )
}

MySocials.propTypes = {
    profile: PropTypes.object.isRequired
}

export default MySocials;

{/* <li className="list-item--social">
<i className="fab fa-instagram fa-2x mr-3"></i>
</li> 
<li className="list-item--social">
<i className="fab fa-github-alt fa-2x mr-3"></i>
</li>  */}