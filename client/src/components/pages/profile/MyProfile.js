import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getCurrentProfile } from '../../../actions/profile';
import MySkills from './MySkills';
import MySocials from './MySocials';

const MyProfile = ({ 
    getCurrentProfile, 
    auth: { user }, 
    profile: { profile, loading} 
}) => {

    useEffect(() => {
        getCurrentProfile();
    }, [getCurrentProfile]);

    const [profileData, setProfileData] = useState({
        status: '',
        website: '',
        location: '',
        bio: '',
    });

    //these functions will be called once the DOM is rendered
    useEffect(() => {
      //once getting the profile, if each item is loading or doesn't exist, leave the field blank
      //otherwise, will set the existing data into the form
      setProfileData({
        status: loading || !profile.status ? '' : profile.status,
        website: loading || !profile.website ? '' : profile.website,
        location: loading || !profile.location ? '' : profile.location,
        bio: loading || !profile.bio ? '' : profile.bio,
      });
    }, [loading, profile])
    //once loading is done (profile.loading = false), that is when useEffect runs
    
    const {
        status,
        website,
        location,
        bio,
    } = profileData


    return loading && profile === null ? ( <div>loading</div> ) : (

        profile === null ? (
            <div className="splash--no-profile">
            <div className="container mt-5 mb-5">
                <section className="section-profile ">
                    <div className="row mb-5">
                    <div className="col-sm-12 text-center">
                        <h1 className="heading-profile heading-profile--main mb-5">
                            Welcome, {user.name}
                        </h1>
                         <Link to="/createprofile" className="button button--main">
                             Create A Profile
                        </Link>
                    </div>
                    </div>
                </section>
            </div>
            </div>
            ) : 
            (   

                <div className="container mt-5 mb-5">
                <section className="section-profile">
                {/* Heading : Name & Title */}
                    <div className="row mb-5">
                        <div className="col-sm-12 text-center">
                            <h1 className="heading-profile heading-profile--main mb-3">{user && user.name}</h1>
                            <h2 className="heading-profile heading-profile--sub">{status}</h2>
                        </div>
                    </div>
                    <hr />
                    <div className="row mt-5">
                    {/* Col 1: Avatar */}
                        <div className="col-md-5 col-sm-12 text-center">
                            <img src={user.avatar} alt="user avatar" className="avatar avatar--lg w-75 mb-5" />
                        </div>
                    {/* Col 2: User overview */}
                        <div className="col-md-7 col-sm-12">
                            <div className="buttons  mb-5">
                                <Link to="/createmessage" className="button button--user-action mr-3">
                                    <i className="far fa-envelope"></i> Message
                                </Link>
                                <Link to="#" className="button button--user-action mr-3"> 
                                    <i className="far fa-star"></i> Favorite
                                </Link>
                                <Link to="/createprofile" className="button button--user-action">
                                 Edit Profile
                                </Link>
                            </div>
                    <ul>
                    {/* city, state */}
                         <li>
                            <span className="font-weight-bold">Location: </span> 
                            {location}
                        </li>
                    {/* website */}
                        <li>
                            <span className="font-weight-bold">Website: </span> 
                                <a href={website} target="_blank" rel="noopener noreferrer">
                                {website}
                                </a>
                        </li>
                    {/* skills */}
                        <li>
                            <MySkills profile={profile} /> 
                        </li>
                    </ul>
                    {/* social media */}
                        <MySocials profile={profile} />
                
                    </div>
                </div>
                </section>
                {/* BIO */}
                    <section className="section-profile mt-5">               
                        {/* Bio - Heading */}
                        <h2 className="heading-profile heading-profile--sub">
                            Bio
                        </h2>            
                        {/* Bio - Text */}
                            <p>
                                {bio}
                            </p>        
                </section>
            </div>
                
            )
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


    

// {/* BIO */}
// <section className="section-profile mt-5">               
// {/* Bio - Heading */}
// <h2 className="heading-profile heading-profile--sub">
//     Bio
// </h2>            
// {/* Bio - Text */}
// <p>
//     {profileData.bio}
// </p>        
// </section>
// </div>