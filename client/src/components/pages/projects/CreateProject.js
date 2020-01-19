import React, {useState} from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createProject } from '../../../actions/project';

function CreateProject({
    createProject,
    history
}) {
    const [formData, setFormData] = useState({
        name: '',
        description: '',
        website: '',
        status: '',
        team: [
            {
                role: '',
                id: ''
            },
        ],
    });

    const {
        name,
        description,
        website,
        status,
        team
    } = formData

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value});

    const onTeamChange = e => {
        const { dataset: {order}, name, value } = e.target;
        const newTeamMember = team.slice();
        newTeamMember[order] = {[name] : value };
        
        setFormData({...formData, team: newTeamMember });
    };

    const addTeamMember = () =>{
        setFormData({
            ...formData, 
            team: [
                ...team,
                { 
                role: '',
                id: ''
        }]
        
        })
    }

   const onSubmit = e => {
    e.preventDefault();
    //this will submit all the fields in the formData state
    createProject(formData, history);
    };

    return (
        <div className="container mt-5 mb-5">

        <h1 className="heading-form--main mb-5">Create A New Project</h1>   

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
                {team.map((teamMember, index) =>
                (<div className="col-md-4 col-sm-12">
                <label htmlFor='role' className="form-editprofile--label">Role*:</label>
                    <input type="text" name="role" defaultValue="role" data-order={index} value={teamMember.role} onChange={e => onTeamChange(e)} className="form-control" required></input>
                <label htmlFor='id' className="form-editprofile--label mt-3">User (ID# of user who has filled the role):</label>
                    <input type="text" name="id" defaultValue="id" data-order={index} value={teamMember.id} onChange={e => onTeamChange(e)} className="form-control"></input>               
                </div>
                )
                )}
            
               </div>
              
                <input type='submit' className="btn btn-dark btn-lg" />
                <input type='button' onClick={addTeamMember} className="btn btn-dark btn-lg" />
            </form>
        </div>
    )
}

CreateProject.propTypes = {
    createProject: PropTypes.func.isRequired,
}

//with router allows for the redirect through the action
export default connect(null, {createProject})(withRouter(CreateProject));
