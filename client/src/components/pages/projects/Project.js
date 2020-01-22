import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getProjectById } from "../../../actions/project";

import DefaultAvatar from "../../../images/default-profile-avatar.jpg";

function Project({ match, getProjectById, project: { project, loading } }) {
  useEffect(() => {
    getProjectById(match.params.projectId);
  }, [match, getProjectById]);

  const [projectData, setProjectData] = useState({
    owner: "",
    name: "",
    description: "",
    website: "",
    status: ""
  });

  //these functions will be called once the DOM is rendered
  useEffect(() => {
    //once getting the profile, if each item is loading or doesn't exist, leave the field blank
    //otherwise, will set the existing data into the form
    setProjectData({
      name: loading || !project.name ? "" : project.name,
      description: loading || !project.description ? "" : project.description,
      website:
        loading || !project.website
          ? ""
          : `<span className="project-tag">${project.website}</span>`,
      status: loading || !project.status ? "" : project.status
    });
  }, [loading, project]);
  //once loading is done (profile.loading = false), that is when useEffect runs

  const { name, description, website, status } = projectData;

  return loading && project === null ? (
    <div>loading</div>
  ) : (
    <div className="container mt-5 mb-5">
      <section className="section-profile">
        {/* Projects - Text */}
        <div className="project-box">
          <h3 className="heading-project--main ml-1 mt-2">{name}</h3>

          <hr className="mb-5" />

          <h3 className="heading-project--sub">Description</h3>
          <div className="project-tag--box">{website}</div>
          <p>{description}</p>

          <hr className="mb-5" />

          <h3 className="heading-project--sub">Team</h3>
          <div className="project-tag--box">
            <span className="project-tag">Status: {status}</span>
          </div>

          <div className="row">
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
      </section>
    </div>
  );
}

//brings in the state/actions and defined what type they are
Project.propTypes = {
  getProjectById: PropTypes.func.isRequired,
  project: PropTypes.object.isRequired
};

//connects state to be passed through as props
const mapStateToProps = state => ({
  project: state.project
});

export default connect(mapStateToProps, { getProjectById })(Project);
