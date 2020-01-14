import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getProfileById } from '../../../actions/profile';
import { Link } from 'react-router-dom';
import MySkills from './MySkills';
import MySocials from './MySocials';

const Profile = ({ 
    match,
    getProfileById,
    profile: { profile, loading}
 }) => {

    useEffect(() => {
        getProfileById(match.params.userId)
    }, [match, getProfileById]);

    const [profileData, setProfileData] = useState({
        name: '',
        avatar: '',
        status: '',
        website: '',
        location: '',
        bio: '',
        skills: '',
        socials: ''
    });

    //these functions will be called once the DOM is rendered
    useEffect(() => {
      //once getting the profile, if each item is loading or doesn't exist, leave the field blank
      //otherwise, will set the existing data into the form
      setProfileData({
        name: loading ? '' : profile.user.name,
        avatar: loading ? '' : profile.user.avatar,
        status: loading || !profile.status ? '' : profile.status,
        website: loading || !profile.website ? '' : profile.website,
        location: loading || !profile.location ? '' : profile.location,
        bio: loading || !profile.bio ? '' : profile.bio,
        skills: loading || !profile.skills ? '' : profile.skills,
        socials: loading || !profile.socials ? '' : profile.socials
      });
    }, [loading, profile])
    //once loading is done (profile.loading = false), that is when useEffect runs
    
    const {
        name,
        avatar,
        status,
        website,
        location,
        bio,
        skills,
        socials
    } = profileData

    return loading && profile === null ? ( <div>loading</div> ) : (
        <div className="container mt-5 mb-5">
                <section className="section-profile">
                {/* Heading : Name & Title */}
                    <div className="row mb-5">
                        <div className="col-sm-12 text-center">
                            <h1 className="heading-profile heading-profile--main mb-3">{name}</h1>
                            <h2 className="heading-profile heading-profile--sub">{status}</h2>
                        </div>
                    </div>
                    <hr />
                    <div className="row mt-5">
                    {/* Col 1: Avatar */}
                        <div className="col-md-5 col-sm-12 text-center">
                            <img src={avatar} alt="user avatar" className="avatar avatar--lg w-75 mb-5" />
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
                            {skills === null || skills === undefined || !skills ? "" : 
                            <MySkills profile={profile} />
                            } 
                        </li>
                    </ul>
                    {/* social media */}
                            {socials === null || socials === undefined || !socials ? "" : 
                            <MySocials profile={profile} />
                            } 
                
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
}

//brings in the state/actions and defined what type they are
Profile.propTypes = {
    getProfileById: PropTypes.func.isRequired,
    profile: PropTypes.object.isRequired,
};

//connects state to be passed through as props
const mapStateToProps = state => ({
    profile: state.profile
});

export default connect( mapStateToProps, { getProfileById })(Profile);
