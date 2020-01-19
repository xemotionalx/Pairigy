import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getProjectsByUserId, getProjectById } from "../../../actions/project";
import DefaultAvatar from "../../../images/default-profile-avatar.jpg";

function MyProjects({
  getProjectsByUserId,
  getProjectById,
  auth: { user },
  project: { projects, loading }
}) {

  useEffect(() => {
    getProjectsByUserId();
  }, [getProjectsByUserId]);

  const setProjectState = async e => {
    e.preventDefault();
    const { dataset: {projectid} } = e.target;
    await getProjectById(projectid);
    window.location.replace(`project/edit/${projectid}`);
  };

  return loading && projects === [] ? (
    <div>loading</div>
  ) : (
    <div className="container mt-5 mb-5">
      <h1>{user && user.name}, Edit And Manage The Projects You Own</h1>
      {projects.map((project, index) => (
        <div className="project-box row mt-5" key={index}>
          <div className="col-sm-12">
            <div className="project-box--header row">
              <div className="col-sm-12">
                <button
                  className="button button--user-action float-right" 
                  data-projectid={project._id}
                  onClick={(e) => setProjectState(e)}
                >
                  Edit Project
                </button>
                <h3 className="heading-project--main ml-1 mt-2">
                  {project.name}
                </h3>
                <div className="project-tag--box">{project.website}</div>
                <p>
                  <b>Description: </b>
                  {project.description}
                </p>
              </div>
            </div>
            <div className="project-box--body row">
              <div className="col-sm-12">
                <h3 className="heading-project--sub">Team</h3>
                <div className="row">
                  {project.team.map((user, index) => (
                    <div className="col-lg-3 col-md-6 col-sm-12" key={index}>
                      <div className="card__team text-center">
                        <img
                          src={DefaultAvatar}
                          alt="user avatar"
                          className="avatar avatar--sm w-50"
                        />
                        <hr />
                        {user.id ? (
                          <p>
                            <b>Name: </b> {user.id}
                          </p>
                        ) : (
                          <p>
                            <b> Position Open </b>
                          </p>
                        )}
                        <p>
                          <b>Role: </b> {user.role}{" "}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

MyProjects.propTypes = {
  getProjectsByUserId: PropTypes.func.isRequired,
  getProjectById: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  project: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  project: state.project
});

export default connect(mapStateToProps, { getProjectsByUserId, getProjectById })(MyProjects);
