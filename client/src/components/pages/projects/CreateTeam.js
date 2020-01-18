import React, {useState, useEffect} from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createProject, getProjectById } from '../../../actions/project';

function CreateTeam({
    getProjectById,
    project: { project, loading },
    createProject,
    history
}) {


    useEffect(() => {
        getProjectById("5e232dc0873f4811fb4df4a5");
    }, [getProjectById]);


    const [formData, setFormData] = useState({
        name: '',
        description: '',
        website: '',
        status: '',
        team: [
            {
                role: '',
                id: ''
            }
        ],
    });

    useEffect(() => {
        setFormData({
          name: loading || !project.name ? '' : project.name,
          description: loading || !project.description ? '' : project.description,
          status: loading || !project.status ? '' : project.status,
          team: [],
        })
      }, [project, loading])

    const {
        name,
        description,
        website,
        status,
        team,
    } = formData

   const onChange = e => setFormData(formData => ({
       team: [...formData.team[e.target.id], {
           "name": e.target.value,
           "id": e.target.value
       }]
   }))   

   const onSubmit = e => {
    e.preventDefault();

    //this will submit all the fields in the formData state
    createProject(formData, history);
    };

    return (
        <div className="container mt-5 mb-5">

        <h1 className="heading-form--main mb-5">Build Your Team</h1> 
            <form className="form-group">
                <div className="row">
                    <label htmlFor='name' className="form-editprofile--label">Project Name*:</label>
                        <input type="text" name='name' value={name} className="form-control mb-4" readonly></input>
                    <label htmlFor='description' className="form-editprofile--label">Description*:</label>
                        <input type="text" name='description' value={description} className="form-control mb-4" readonly></input>
                    <label htmlFor='website' className="form-editprofile--label">Website:</label>
                        <input type="text" name='website' value={website} className="form-control mb-4" readonly></input>
                    <label htmlFor='status' className="form-editprofile--label">Status:</label>
                        <input type="text" name='status' value={status} className="form-control mb-4" readonly></input>
                    </div>
            </form>   

            <form className="form-group" onSubmit={e => onSubmit(e)}>
                <div className="row">
                {/* Role 1 */}
                <div className="col-md-4 col-sm-12">
                <label htmlFor='role' className="form-editprofile--label">Role*:</label>
                    <input type="text" name="role" id="0" value={team.role[0]} onChange={e => onChange(e)} className="form-control" required></input>
                <label htmlFor='id' className="form-editprofile--label mt-3">User (ID# of user who has filled the role):</label>
                    <input type="text" name="id" id="0" value={team.role[0]} onChange={e => onChange(e)} className="form-control" required></input>               
                </div>

                {/* Role 2 */}
                {/* <div className="col-md-4 col-sm-12">
                <label htmlFor='role' className="form-editprofile--label">Role*:</label>
                    <input type="text" name="role" value={role} onChange={e => onChange(e)} className="form-control" ></input>
                <label htmlFor='id' className="form-editprofile--label mt-3">User (ID# of user who has filled the role):</label>
                    <input type="text" name="id" value={id} onChange={e => onChange(e)} className="form-control"></input>               
                </div> */}

                {/* Role 1 */}
                {/* <div className="col-md-4 col-sm-12">
                <label htmlFor='role' className="form-editprofile--label">Role*:</label>
                    <input type="text" name="role" value={role} onChange={e => onChange(e)} className="form-control" ></input>
                <label htmlFor='id' className="form-editprofile--label mt-3">User (ID# of user who has filled the role):</label>
                    <input type="text" name="id" value={id} onChange={e => onChange(e)} className="form-control"></input>               
                </div> */}


               </div>
                <input type='submit' className="btn btn-dark btn-lg" value='Create Team' />
            </form>
        </div>
    )
}

CreateTeam.propTypes = {
    getProjectById: PropTypes.func.isRequired,
    createProject: PropTypes.func.isRequired,
    profile: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
    project: state.project
})

//with router allows for the redirect through the action
export default connect(mapStateToProps, {getProjectById, createProject})(withRouter(CreateTeam));
