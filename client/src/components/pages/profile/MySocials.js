import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
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

    const twitterIcon = !twitter ? "" : <a href={twitter} target="_blank" rel="noopener noreferrer"><i class="fab fa-twitter"></i></a>;
    const facebookIcon = !facebook ? "" : <a href={facebook} target="_blank" rel="noopener noreferrer"><i class="fab fa-facebook"></i></a>;
    const linkedinIcon = !linkedin ? "" : <a href={linkedin} target="_blank" rel="noopener noreferrer"><i class="fab fa-linkedin"></i></a>;
    const instagramIcon = !instagram ? "" : <a href={instagram} target="_blank" rel="noopener noreferrer"><i class="fab fa-instagram"></i></a>;
    const githubIcon = !github ? "" : <a href={github} target="_blank" rel="noopener noreferrer"><i class="fab fa-github"></i></a>;
    const dribbbleIcon = !dribbble ? "" : <a href={dribbble} target="_blank" rel="noopener noreferrer"><i class="fab fa-dribbble"></i></a>;

    return !profile.social ? ( <span>""</span> ) : (
        <div>
        {twitterIcon}
        {facebookIcon}
        {linkedinIcon}
        {instagramIcon}
        {githubIcon}
        {dribbbleIcon}
        </div>
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

