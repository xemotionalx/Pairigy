import React, { useEffect, useState } from "react";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { createProject } from "../../../actions/project";
import { getCurrentFavorites } from "../../../actions/faves";

function CreateProject({
  createProject,
  getCurrentFavorites,
  favorites: { favorites },
  auth,
  history
}) {
  useEffect(() => {
    getCurrentFavorites();
  }, [getCurrentFavorites]);

  const [formData, setFormData] = useState({
    name: "",
    description: "",
    website: "",
    status: "",
    team: [
      {
        role: "",
        user: null
      }
    ]
  });

  const { name, description, website, status, team } = formData;

  const [favesData, setFavesData] = useState({
    favesArr: ""
  });

  useEffect(() => {
    setFavesData({
      favesArr: favorites ? favorites.favorites : []
    });
  }, [favorites]);

  const { favesArr } = favesData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onTeamChange = e => {
    const {
      dataset: { order },
      name,
      value
    } = e.target;
    const newTeamMember = [...formData.team];
    newTeamMember[order] = { ...team[order], [name]: value || null };

    setFormData({ ...formData, team: newTeamMember });
  };

  const addTeamMember = () => {
    setFormData({
      ...formData,
      team: [
        ...team,
        {
          role: "",
          user: null
        }
      ]
    });
  };

  const onSubmit = e => {
    e.preventDefault();
    //this will submit all the fields in the formData state
    createProject(formData, history);
  };

  return (
    <div className="container mt-5 mb-5">
      <div className="container--inner mb-5">
        <h1 className="heading-size--m mb-5">Create A New Project</h1>
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
            ></input>
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
                    defaultValue={teamMember.role}
                    value={teamMember.user || ""}
                    onChange={e => onTeamChange(e)}
                    className="form-control"
                  >
                    <option value="" selected>Favorites</option>
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
          <div className="row">
            <div className="col-sm-12 text-center">
              <input
                type="submit"
                className="btn button button--main btn-lg text-center"
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  ) 
}

CreateProject.propTypes = {
  createProject: PropTypes.func.isRequired,
  getCurrentFavorites: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  favorites: state.favorites,
  auth: state.auth
});

//with router allows for the redirect through the action
export default connect(mapStateToProps, { createProject, getCurrentFavorites })(
  withRouter(CreateProject)
);
