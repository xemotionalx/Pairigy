import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getCurrentProfile } from '../../../actions/profile';

const MySocials = ({ 
    getCurrentProfile, 
    auth: { user }, 
    profile: { profile, loading} 
}) => {

    useEffect(() => {
        getCurrentProfile();
    }, [getCurrentProfile]);

    const [profileData, setProfileData] = useState({
        youtube: '',
        twitter: '',
        facebook: '',
        linkedin: '',
        instagram: '',
        github: '',
        dribbble: ''
    });

    //these functions will be called once the DOM is rendered
    useEffect(() => {
      //once getting the profile, if each item is loading or doesn't exist, leave the field blank
      //otherwise, will set the existing data into the form
      setProfileData({
        //for socials, just need to check if 'social' object exists
        twitter: loading || !profile.social ? '' : profile.social.twitter,
        facebook: loading || !profile.social ? '' : profile.social.facebook,
        linkedin: loading || !profile.social ? '' : profile.social.linkedin,
        instagram: loading || !profile.social ? '' : profile.social.instagram,
        github: loading || !profile.social ? '' : profile.social.github,
        dribbble: loading || !profile.social ? '' : profile.social.dribbble,
      });
    }, [loading, profile])
    //once loading is done (profile.loading = false), that is when useEffect runs
    
    const {
        twitter,
        facebook,
        linkedin,
        instagram,
        github,
        dribbble
    } = profileData

    return !twitter ? ( <span>""</span> ) : (
        <a href={twitter}><i class="fab fa-twitter"></i></a>
    )
}

//brings in the state/actions and defined what type they are
MySocials.propTypes = {
    getCurrentProfile: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    profile: PropTypes.object.isRequired
};

//connects state to be passed through as props
const mapStateToProps = state => ({
    auth: state.auth,
    profile: state.profile
});

export default connect( mapStateToProps, { getCurrentProfile })(MySocials);

