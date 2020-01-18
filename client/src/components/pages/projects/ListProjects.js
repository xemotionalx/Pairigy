import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getProjectsByUserId } from '../../../actions/project';
import DefaultAvatar from '../../../images/default-profile-avatar.jpg';

function ListProjects({
    match,
    getProjectsByUserId,
    project: { projects, loading },
}) {
    useEffect(() => {
        getProjectsByUserId(match.params.userId) 
    }, [match, getProjectsByUserId]);

    return loading && projects === [] ? ( <div>loading</div> ) : (     
        projects.map((project) => (
        
        <div className="project-box mt-5">
                    <h3 className="heading-project--main ml-1 mt-2">
                        {project.name}
                    </h3>

                    <hr className="mb-5"/>
                    
                    <h3 className="heading-project--sub">
                        Description
                    </h3>
                    <div className="project-tag--box">
                    {project.website}
                    </div>
                    <p>{project.description}</p>

                    <hr className="mb-5"/>
     
                    <h3 className="heading-project--sub">
                        Team
                    </h3>
                    <div className="project-tag--box">
                    <span className="project-tag">Status: {project.status}</span>
                    </div>


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

        ))
    )
}

ListProjects.propTypes = {
    getProjectsByUserId: PropTypes.func.isRequired,
    project: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    project: state.project
})

export default connect( mapStateToProps, { getProjectsByUserId })(ListProjects);
