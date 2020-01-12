import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getCurrentProfile } from '../../../actions/profile';

function MyProfile({ getCurrentProfile, auth, profile }) {
//calls the getCurrentProfile function
    useEffect(() => {
        getCurrentProfile();
    }, []);

    const [profileData, setProfileData] = useState({
        
    });


    return (

        <div className="container mt-5 mb-5">
            <section className="section-profile">
            {/* Heading : Name & Title */}
                <div className="row mb-5">
                    <div className="col-sm-12 text-center">
    <h1 className="heading-profile heading-profile--main mb-3">{name}</h1>
                        <h2 className="heading-profile heading-profile--sub"></h2>
                    </div>
                </div>
            <hr />
            </section>
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

