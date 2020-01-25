import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {
  getProjectById,
  createProject,
  deleteProject
} from "../../../actions/project";
import { getCurrentFavorites } from "../../../actions/faves";

function EditProject({
  match,
  getProjectById,
  project: { loading, project },
  createProject,
  deleteProject,
  getCurrentFavorites,
  favorites: { favorites },
  auth,
  history
}) {
  const [formData, setFormData] = useState({
    projectId: "",
    name: "",
    description: "",
    website: "",
    status: "",
    team: ""
  });

  useEffect(() => {
    getProjectById(match.params.projectId);
  }, [getProjectById, match]);

  useEffect(() => {
    getCurrentFavorites();
  }, [getCurrentFavorites]);

  useEffect(() => {
    setFormData({
      projectId: loading || !project._id ? "" : project._id,
      name: loading || !project.name ? "" : project.name,
      description: loading || !project.description ? "" : project.description,
      website: loading || !project.website ? "" : project.website,
      status: loading || !project.status ? "" : project.status,
      team: loading || !project.team ? [] : project.team,
    });
  }, [project, loading]);

  const { projectId, name, description, website, status, team } = formData;

  const [favesData, setFavesData] = useState({
    favesArr: ""
  });

  // set favorites

  useEffect(() => {
    setFavesData({
      favesArr: favorites ? favorites.favorites : []
    });
  }, [favorites]);

  const { favesArr } = favesData;

  //end set favorites

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

    const onTeamChange = e => {
      const {
        dataset: { order },
        name,
        value
      } = e.target;
      const newTeamMember = [...formData.team];
      newTeamMember[order] = { ...team[order], [name]: value };
  
      setFormData({ ...formData, team: newTeamMember });
    };
  
    const addTeamMember = () => {
      setFormData({
        ...formData,
        team: [
          ...team,
          {
            role: "",
            user: ""
          }
        ]
      });
    };

  const onSubmit = async e => {
    e.preventDefault();
    await createProject(formData, history);
  };

  const deleteThisProject = e => {
    e.preventDefault();
    const {
      dataset: { projectid }
    } = e.target;
    deleteProject(projectid, history);
  };

  console.log(team);

  return loading && project === null ? (
    <div>loading</div>
  ) : (
    <div className="container mt-5">
      <div className="container--inner mb-5">
      <input
          type="button"
          value="x Delete Project"
          className="btn btn-danger btn-lg float-right"
          data-projectid={projectId}
          onClick={e => deleteThisProject(e)}
        />
        <h1 className="heading-size--l heading--secondary-gradient text-center mb-5">Edit Your Project</h1>
        <hr />
        <form className="form-group form-default" onSubmit={e => onSubmit(e)}>
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
            />
          </div>

          <div className="row">
            <input
              type="button"
              value="+ Add Team Member"
              onClick={addTeamMember}
              className="btn btn-dark btn-lg my-3"
            />
          </div>

          <div className="row">
            {team.map((teamMember, index) => (
              <div className="col-md-4 col-sm-12">
                <div className="add-team">
                  <label htmlFor="role" className="form-editprofile--label">
                    Role*:
                  </label>
                  <input
                    type="text"
                    name="role"
                    data-order={index}
                    defaultValue={teamMember.role}
                    value={teamMember.role}
                    onChange={e => onTeamChange(e)}
                    className="form-control"
                    required
                  ></input>
                  <label
                    htmlFor="user"
                    className="form-editprofile--label mt-3"
                  >
                    User:
                  </label>
                  <select
                    type="text"
                    name="user"
                    data-order={index}
                    defaultValue={teamMember.user ? teamMember.user._id : ""}
                    value={teamMember.user ? teamMember.user._id : "" || ""}
                    onChange={e => onTeamChange(e)}
                    className="form-control"
                  >      
                    <option value={teamMember.user ? teamMember.user._id : ""}>{teamMember.user ? teamMember.user.name : "Position Open"}</option>
                    {teamMember.user ? <option value="" selected>Position Open</option> : ""}
                    <option value={auth.user && auth.user._id}>{auth.user && auth.user.name}</option> 
                    {
                      favesArr ?
                    favesArr.map(fave => (
                     <option value={fave.user._id}>{fave.user.name}</option>
                    ))
                    : ""
                    }
                  </select>
                  <small className="lead">
                    Leave blank if position is open.
                  </small>
                </div>
              </div>
            ))}
         
          </div>

          <input type="submit" className="btn button button--main btn-lg mr-3" />
        </form>

      </div>
    </div>
  );
}

//brings in the state/actions and defined what type they are
EditProject.propTypes = {
  getProjectById: PropTypes.func.isRequired,
  createProject: PropTypes.func.isRequired,
  deleteProject: PropTypes.func.isRequired,
  project: PropTypes.object.isRequired,
  getCurrentFavorites: PropTypes.func.isRequired,
  favorites: PropTypes.object.isRequired,
};

//connects state to be passed through as props
const mapStateToProps = state => ({
  project: state.project,
  favorites: state.favorites,
  auth: state.auth
});

export default connect(mapStateToProps, {
  getProjectById,
  createProject,
  deleteProject,
  getCurrentFavorites
})(EditProject);
