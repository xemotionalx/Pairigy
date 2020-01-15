import React from 'react';
import DefaultAvatar from '../../../images/default-profile-avatar.jpg';

function Project() {
    return (
        <div className="container mt-5 mb-5">
             <section className="section-profile">
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

export default Project;
