import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getProjectById, createProject } from "../../../actions/project";

function EditProject({
  match,
  getProjectById,
  project: { project, loading },
  createProject,
  history
}) {
  useEffect(() => {
    getProjectById(match.params.projectId);
  }, [match, getProjectById]);

  console.log(match.params.projectId);

  const [formData, setFormData] = useState({
    owner: "",
    name: "",
    description: "",
    website: "",
    status: "",
  });

  //these functions will be called once the DOM is rendered
  useEffect(() => {
    //once getting the profile, if each item is loading or doesn't exist, leave the field blank
    //otherwise, will set the existing data into the form
    setFormData({
      name: loading || !project.name ? "" : project.name,
      description: loading || !project.description ? "" : project.description,
      website:
        loading || !project.website
          ? ""
          : `<span className="project-tag">${project.website}</span>`,
      status: loading || !project.status ? "" : project.status,
    });
  }, [loading, project]);
  //once loading is done (profile.loading = false), that is when useEffect runs

  const { name, description, website, status } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    //this will submit all the fields in the formData state
    createProject(formData, history);
  };

  return loading && project === null ? (
    <div>loading</div>
  ) : (
    <div className="container mb-5 mt-5">
      <h1 className="heading-form--main mb-5">Edit Your Project</h1>

      <form className="form-group" onSubmit={e => onSubmit(e)}>
        <div className="row">
          <label htmlFor="name" className="form-editprofile--label">
            Project Name*:
          </label>
          <input
            type="text"
            name="name"
            value={name}
            onChange={e => onChange(e)}
            className="form-control mb-4"
            required
          ></input>
          <label htmlFor="description" className="form-editprofile--label">
            Description*:
          </label>
          <input
            type="text"
            name="description"
            value={description}
            onChange={e => onChange(e)}
            className="form-control mb-4"
            required
          ></input>
          <label htmlFor="website" className="form-editprofile--label">
            Website:
          </label>
          <input
            type="text"
            name="website"
            value={website}
            onChange={e => onChange(e)}
            className="form-control mb-4"
          ></input>
          <label htmlFor="status" className="form-editprofile--label">
            Status:
          </label>
          <input
            type="text"
            name="status"
            value={status}
            onChange={e => onChange(e)}
            className="form-control mb-4"
          ></input>
        </div>

        <input type="submit" className="btn btn-dark btn-lg" />
       
      </form>
    </div>
  );
}

//brings in the state/actions and defined what type they are
EditProject.propTypes = {
  getProjectById: PropTypes.func.isRequired,
  createProject: PropTypes.func.isRequired,
  project: PropTypes.object.isRequired
};

//connects state to be passed through as props
const mapStateToProps = state => ({
  project: state.project
});

export default connect(mapStateToProps, { getProjectById, createProject })(
  EditProject
);
