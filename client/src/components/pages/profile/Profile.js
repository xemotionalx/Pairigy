import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getProfileById } from '../../../actions/profile';
import { getProjectsByUserId } from '../../../actions/project';
import Skills from './Skills';
import DefaultAvatar from '../../../images/default-profile-avatar.jpg';

const Profile = ({ 
    match,
    getProfileById,
    profile: { profile, loading},
    getProjectsByUserId,
    project: { projects },
 }) => {

    useEffect(() => {
        getProfileById(match.params.userId)
    }, [match, getProfileById]);

    useEffect(() => {
        getProjectsByUserId(match.params.userId) 
    }, [match, getProjectsByUserId]);

    const [profileData, setProfileData] = useState({
        name: '',
        avatar: '',
        status: '',
        website: '',
        location: '',
        bio: '',
        skills: '',
        socials: '',
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
        name: loading ? '' : profile.user.name,
        avatar: loading ? '' : profile.user.avatar,
        status: loading || !profile.status ? '' : profile.status,
        website: loading || !profile.website ? '' : profile.website,
        location: loading || !profile.location ? '' : profile.location,
        bio: loading || !profile.bio ? '' : profile.bio,
        skills: loading || !profile.skills ? '' : profile.skills,
        socials: loading || !profile.social ? '' : profile.social,
        twitter: loading || !profile.social ? '' : profile.social.twitter,
        facebook: loading || !profile.social ? '' : profile.social.facebook,
        linkedin: loading || !profile.social ? '' : profile.social.linkedin,
        instagram: loading || !profile.social ? '' : profile.social.instagram,
        github: loading || !profile.social ? '' : profile.social.github,
        dribbble: loading || !profile.social ? '' : profile.social.dribbble
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
        socials,
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
                            <Skills profile={profile} />
                            } 
                        </li>
                    </ul>
                    {/* social media */}
    
                            { socials ?  
                            <div className="section-profile--socials">
                                <ul>
                                <li className="list-item--social mr-1">{twitterIcon}</li>
                                <li className="list-item--social mr-1">{facebookIcon}</li>
                                <li className="list-item--social mr-1">{linkedinIcon}</li>
                                <li className="list-item--social mr-1">{instagramIcon}</li>
                                <li className="list-item--social mr-1">{githubIcon}</li>
                                <li className="list-item--social mr-1">{dribbbleIcon}</li>
                                </ul>
                            </div> : ""
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
                        <p> {bio} </p>        
                </section>
                <section className="section-profile mt-5">
                <h2 className="heading-profile heading-profile--sub">
                        Projects
                    </h2> 
                {projects.map((project) => (
                <div className="project-box mt-5">
                <div className="project-box--header">
                    <h3 className="heading-project--main ml-1 mt-2">
                        {project.name}
                    </h3>
                    <div className="project-tag--box">
                    {project.website}
                    </div>
                    <p> 
                        <b>Description: </b>{project.description}
                    </p>
                    </div>
                    <div className="project-box--body">
                    <h3 className="heading-project--sub">
                        Team
                    </h3>
                    <div className="row">  
                    {project.team.map((user, index) => (
                        <div className="col-lg-3 col-md-6 col-sm-12" key={index}>
                        <div className="card__team text-center">
                        <img src={DefaultAvatar} alt="user avatar" className="avatar avatar--sm w-50" />
                        <hr />
                    { user.id ? <p><b>Name: </b> {user.id}</p> : <p><b> Position Open </b></p> }
                        <p><b>Role: </b> {user.role} </p>
                        </div>
                    </div>
                    ))}
                    </div>
                    </div>
                </div>

        ))}
                </section>
                

            </div>
    )
}

//brings in the state/actions and defined what type they are
Profile.propTypes = {
    getProfileById: PropTypes.func.isRequired,
    profile: PropTypes.object.isRequired,
    getProjectsByUserId: PropTypes.func.isRequired,
    project: PropTypes.object.isRequired
};

//connects state to be passed through as props
const mapStateToProps = state => ({
    profile: state.profile,
    project: state.project
});

export default connect( mapStateToProps, { getProfileById, getProjectsByUserId })(Profile);
