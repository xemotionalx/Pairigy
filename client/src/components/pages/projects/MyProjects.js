import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { getProjectsByOwnerId, getProjectById } from "../../../actions/project";
import DefaultAvatar from "../../../images/default-profile-avatar.jpg";

function MyProjects({
  getProjectsByOwnerId,
  getProjectById,
  auth: { user },
  project: { projects, loading }
}) {
  useEffect(() => {
    getProjectsByOwnerId();
  }, [getProjectsByOwnerId]);

  const setProjectState = async e => {
    e.preventDefault();
    const {
      dataset: { projectid }
    } = e.target;
    await getProjectById(projectid);
    window.location.replace(`project/edit/${projectid}`);
    return false;
  };

  return loading && projects === [] ? (
    <div>loading</div>
  ) : (
    <div className="container mb-5 mt-5">   
        <Link
          to="/createproject"
          className="btn button button--main mb-3 float-right"
        >
          <i className="fas fa-plus"></i> Create New Project
        </Link>
        <br />
        <h1 className="heading-size--xs mt-5 mb-5">
          <b>Manage Your Projects</b>
        </h1>
        {projects.map((project, index) => (
          <div className="project-box mb-5">
            <div className="project-box--header">
              <h3 className="heading-size--s ml-5">{project.name}</h3>
              <input
                type="button"
                value="Edit Project"
                data-projectid={project._id}
                className="btn button button--main float-right"
                onClick={e => setProjectState(e)}
              />
            </div>
            <div className="project-box--body">
              <div className="project-tag--box">{project.website}</div>

              <h3 className="project__sub-heading mb-3 ml-3">
                <b>Project Description</b>
              </h3>

              <p className="ml-5 mb-5">{project.description}</p>

              <hr className="mt-5" />

              <h3 className="project__sub-heading mb-3 ml-3">
                <b>Team</b>
              </h3>
              <div className="row ml-3">
                {project.team.map((role, index) => (
                  <div className="col-lg-3 col-md-6 col-sm-12" key={index}>
                    <div className="card__team text-center mb-3">
                      <img
                        src={role.user ? role.user.avatar : DefaultAvatar}
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
        ))}
    </div>
  );
}

MyProjects.propTypes = {
  getProjectsByOwnerId: PropTypes.func.isRequired,
  getProjectById: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  project: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  project: state.project
});

export default connect(mapStateToProps, {
  getProjectsByOwnerId,
  getProjectById
})(MyProjects);
