import React from 'react';
import { Link } from 'react-router-dom';
// Import images
import DefaultAvatar from './../../images/default-profile-avatar.jpg';

const Profile = () => {
    return (
        
        <div className="container mt-5 mb-5">
             <section className="section-profile">
                {/* Heading : Name & Title */}
                <div className="row mb-5">
                    <div className="col-sm-12 text-center">
                        <h1 className="heading-profile heading-profile--main mb-3">Tyroil Smoochie-Wallace</h1>
                        <h2 className="heading-profile heading-profile--sub">Full Stack Web Developer</h2>
                    </div>
                </div>
                <hr />
                <div className="row mt-5">
                    {/* Col 1: Avatar */}
                    <div className="col-md-6 col-sm-12 text-center">
                        <img src={DefaultAvatar} alt="user avatar" className="avatar avatar--lg w-75 mb-5" />
                    </div>
                {/* Col 2: User overview */}
                <div className="col-md-6 col-sm-12">
                    <div className="buttons text-center mb-5">
                        <Link to="#" className="button button--user-action mr-5"><i className="far fa-envelope"></i> Message</Link>
                        <Link to="#" className="button button--user-action"> <i className="far fa-star"> </i>Favorite</Link>
                    </div>
                    {/* city */}
                    <ul>
                    <li>
                        <span className="font-weight-bold">Location: </span> 
                        Philadelphia
                    </li>
                    {/* website */}
                    <li>
                        <span className="font-weight-bold">Website: </span> 
                        www.macaronincheese.com
                    </li>
                    {/* skills */}
                    <li>
                        <span className="font-weight-bold">Skills: </span> 
                        <li className="skill-list-item mr-1">UX</li>
                        <li className="skill-list-item mr-1">UI</li>
                        <li className="skill-list-item mr-1">React</li>
                        <li className="skill-list-item mr-1">Node.js</li>
                    </li>
                     {/* social media */}
                    <li className="mt-5"> 
                        <li className="social-list-item">
                            <i className="fab fa-twitter fa-2x mr-3"></i>
                        </li>
                        <li className="social-list-item">
                            <i className="fab fa-instagram fa-2x mr-3"></i>
                        </li> 
                        <li className="social-list-item">
                            <i className="fab fa-github-alt fa-2x mr-3"></i>
                        </li> 
                    </li>
                </ul>
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
                    Here is where the user can write whatever they want about who they are and what they're doing on the platform.
                </p>        
             </section>

             {/* PROJECTS */}
             <section className="section-profile mt-5 mb-5">               
                {/* Projects - Heading */}
                <h2 className="heading-profile heading-profile--sub">
                    Projects
                </h2>            
                {/* Projects - Text */}
                <div className="project-box">
                    <h3 className="heading-project--main ml-1 mt-2">
                        Project Name
                    </h3>

                    <hr className="mb-5"/>


                    <h3 className="heading-project--sub">
                        Description
                    </h3>
                    <div className="project-tag--box">
                    <span className="project-tag">Link</span>
                    <span className="project-tag">Code</span>
                    <span className="project-tag">Status</span>
                    </div>
                    <p>A brief description of the project and maybe what kinds of team members are being sought</p>

                    <hr className="mb-5"/>


                    
                    <h3 className="heading-project--sub">
                        Team
                    </h3>
                    <div className="project-tag--box">
                    <span className="project-tag">Status: Open</span>
                    </div>

                    <div className="row">
                        <div className="col-lg-3 col-md-6 col-sm-12">
                            <div className="card__team text-center">
                            <img src={DefaultAvatar} alt="user avatar" className="avatar avatar--sm w-50" />
                            <hr />
                            <p><b>Name: </b> Team member name</p>
                            <p><b>Role: </b> Role title</p>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6 col-sm-12">
                            <div className="card__team text-center">
                            <img src={DefaultAvatar} alt="user avatar" className="avatar avatar--sm w-50" />
                            <hr />
                            <p><b>Name: </b> Team member name</p>
                            <p><b>Role: </b> Role title</p>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6 col-sm-12">
                            <div className="card__team text-center">
                            <img src={DefaultAvatar} alt="user avatar" className="avatar avatar--sm w-50" />
                            <hr />
                            <p><b>Name: </b> Team member name</p>
                            <p><b>Role: </b> Role title</p>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6 col-sm-12">
                            <div className="card__team text-center">
                            <img src={DefaultAvatar} alt="user avatar" className="avatar avatar--sm w-50" />
                            <hr />
                            <p><b>Name: </b> Team member name</p>
                            <p><b>Role: </b> Role title</p>
                            </div>
                        </div>

                    </div>
                </div>     
             </section>

        </div>
    )
}

export default Profile;
