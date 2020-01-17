import React, {useState} from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createProject } from '../../../actions/project';
import { getProfileById } from '../../../actions/profile';

function CreateProject({
    createProject,
    history
}) {
    const [formData, setFormData] = useState({
        name: '',
        description: '',
        website: '',
        status: '',
        role_1: '',
        id_1: '',
        role_2: '',
        id_2: '',
        role_3: '',
        id_3: '',
    });

    const {
        name,
        description,
        website,
        status,
        role_1,
        id_1,
        role_2,
        id_2,
        role_3,
        id_3,
    } = formData

   const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value})

   const onSubmit = e => {
    e.preventDefault();
    //this will submit all the fields in the formData state
    createProject(formData, history);
    };

    return (
        <div className="container mt-5 mb-5">
            <form className="form-group" onSubmit={e => onSubmit(e)}>
                <div className="row">
                    <label htmlFor='name' className="form-editprofile--label">Project Name*:</label>
                        <input type="text" name='name' value={name} onChange={e => onChange(e)} className="form-control mb-4" required></input>
                    <label htmlFor='description' className="form-editprofile--label">Description*:</label>
                        <input type="text" name='description' value={description} onChange={e => onChange(e)} className="form-control mb-4" required></input>
                    <label htmlFor='website' className="form-editprofile--label">Website:</label>
                        <input type="text" name='website' value={website} onChange={e => onChange(e)} className="form-control mb-4"></input>
                    <label htmlFor='status' className="form-editprofile--label">Status:</label>
                        <input type="text" name='status' value={status} onChange={e => onChange(e)} className="form-control mb-4"></input>
                    </div>
                <div className="row">
                        <h2>Build Your Team</h2>
                </div>
                <div className="row">
                {/* Role 1 */}
                <div className="col-md-4 col-sm-12">
                <label htmlFor='role_1' className="form-editprofile--label">Role*:</label>
                    <input type="text" name="role_1" value={role_1} onChange={e => onChange(e)} className="form-control" required></input>
                <label htmlFor='id_1' className="form-editprofile--label mt-3">User (ID# of user who has filled the role):</label>
                    <input type="text" name="id_1" value={id_1} onChange={e => onChange(e)} className="form-control" required></input>               
                </div>

                {/* Role 2 */}
                <div className="col-md-4 col-sm-12">
                <label htmlFor='role_2' className="form-editprofile--label">Role*:</label>
                    <input type="text" name="role_2" value={role_2} onChange={e => onChange(e)} className="form-control" ></input>
                <label htmlFor='id_2' className="form-editprofile--label mt-3">User (ID# of user who has filled the role):</label>
                    <input type="text" name="role_2" value={id_2} onChange={e => onChange(e)} className="form-control"></input>               
                </div>

                {/* Role 1 */}
                <div className="col-md-4 col-sm-12">
                <label htmlFor='role_3' className="form-editprofile--label">Role*:</label>
                    <input type="text" name="role_3" value={role_3} onChange={e => onChange(e)} className="form-control" ></input>
                <label htmlFor='id_3' className="form-editprofile--label mt-3">User (ID# of user who has filled the role):</label>
                    <input type="text" name="id_3" value={id_3} onChange={e => onChange(e)} className="form-control"></input>               
                </div>


               </div>
                <input type='submit' className="btn btn-dark btn-lg" />
            </form>
        </div>
    )
}

CreateProject.propTypes = {
    createProject: PropTypes.func.isRequired,
}

//with router allows for the redirect through the action
export default connect(null, {createProject})(withRouter(CreateProject));
