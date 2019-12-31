import React from 'react';
import { Link } from 'react-router-dom';
// Import images
import DefaultAvatar from './../../images/default-profile-avatar.jpg';

const Profile = () => {
    return (
        
        <div className="container mt-5">
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
             <section className="section-profile mt-5">

             </section>
            
        </div>
    )
}

export default Profile;
