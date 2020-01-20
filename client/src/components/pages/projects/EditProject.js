import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getProjectById, createProject, deleteProject } from "../../../actions/project";

function EditProject({
  match,
  getProjectById,
  project: { loading, project },
  createProject,
  deleteProject,
  history
}) {

  const [formData, setFormData] = useState({
    projectId: '',
    name: '',
    description: '',
    website: '',
    status: '',
  });

  useEffect(() => {
    getProjectById(match.params.projectId)
   }, [getProjectById, match]); 

  useEffect(() => {
     setFormData({
       projectId: loading || !project._id ? "" : project._id,
       name: loading || !project.name ? "" : project.name,
       description: loading || !project.description ? "" : project.description,
       website: loading || !project.website ? "" : project.website,
       status: loading || !project.status ? "" : project.status,
     });   
   }, [project, loading]);

   const {
     projectId, 
     name, 
     description, 
     website, 
     status } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();
    await createProject(formData, history);
  };

  const deleteThisProject = e => {
    e.preventDefault();
    const { dataset: {projectid} } = e.target;
    deleteProject(projectid, history);
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

        <input type="submit" className="btn btn-dark btn-lg mr-3" />
      </form>
      <input type="button" value="Delete Project" className="btn btn-danger btn-lg" data-projectid={projectId} onClick={e => deleteThisProject(e)} />
    </div>
  );
}

//brings in the state/actions and defined what type they are
EditProject.propTypes = {
  getProjectById: PropTypes.func.isRequired,
  createProject: PropTypes.func.isRequired,
  deleteProject: PropTypes.func.isRequired,
  project: PropTypes.object.isRequired
};

//connects state to be passed through as props
const mapStateToProps = state => ({
  project: state.project
});

export default connect(mapStateToProps, { getProjectById, createProject, deleteProject })(
  EditProject
);
