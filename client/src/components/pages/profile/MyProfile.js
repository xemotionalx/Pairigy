import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getCurrentProfile } from '../../../actions/profile';

function MyProfile({ getCurrentProfile, auth, profile }) {
//calls the getCurrentProfile function
    useEffect(() => {
        getCurrentProfile();
    }, [getCurrentProfile]);

    return (
        <div>
            <h1>
                My Profile
            </h1>
        </div>
    )
}

//brings in the state/actions and defined what type they are
MyProfile.propTypes = {
    getCurrentProfile: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    profile: PropTypes.object.isRequired
};

//connects state to be passed through as props
const mapStateToProps = state => ({
    auth: state.auth,
    profile: state.profile
});

export default connect( mapStateToProps, { getCurrentProfile })(MyProfile);

