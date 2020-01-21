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
          <div className="project-box--header">
            <h3 className="heading-size--s ml-5">{project.name}</h3>
          </div>

          <div className="project-box--body">
          <div className="project-tag--box">{project.website}</div>
          
          <h3 className="project__sub-heading mb-3 ml-3"><b>Project Description</b></h3>

            <p className="ml-5 mb-5">
              {project.description}
            </p>

            <hr className="mt-5" />

            <h3 className="project__sub-heading mb-3 ml-3"><b>Team</b></h3>
            <div className="row ml-3">
              {project.team.map((role, index) => (
                <div className="col-lg-3 col-md-6 col-sm-12" key={index}>
                  <div className="card__team text-center mb-3">
                    <img
                      src={DefaultAvatar}
                      alt="user avatar"
                      className="avatar avatar--sm w-50"
                    />
                    <hr />
                    {role.user ? (
                      <p>
                        <b>Name: </b> {role.user.name}
                      </p>
                    ) : (
                      <p>
                        <b> Position Open </b>
                      </p>
                    )}
                    <p>
                      <b>Role: </b> {role.role}{" "}
                    </p>
                  </div>
                </div>
              ))}
            </div>
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
