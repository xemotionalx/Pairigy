import axios from 'axios';
// eslint-disable-next-line
import { GET_PROJECT, DELETE_PROJECT, GET_USER_PROJECTS, PROJECT_ERROR } from './types';

//create project
//the history object has a "push" method
// edit startes as false to flag that we are creating a project for the first time
export const createProject = ( 
    formData, 
    history, 
    edit = false ) => async dispatch => {   
    try {
        //set the header type so route can receive json
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        };
        //send formdata in json form to post route to update the database
        const res = await axios.post('/api/project', formData, config);
        //send data to reducer
        dispatch ({
            type: GET_PROJECT,
            payload: res.data
        });
        //history object used to be able to redirect
        if (!edit) {
            history.push('/dashboard');
        };
    } catch(err) {
        const errors = err.response.data.errors;
        if (errors) {
            errors.forEach(error => dispatch(console.log(error.msg)));
        }
        dispatch({
            type: PROJECT_ERROR,
            payload: { 
                msg: err.response.statusText, 
                status: err.response.status 
            }
        })
    }  
};


//get any project by id
export const getProjectById = projectId => async dispatch => {
    try {
        //axios call to the route that will match profile to user's id
        const res = await axios.get(`/api/project/${projectId}`);

        console.log(res.data);

        dispatch ({
            type: GET_PROJECT,
            payload: res.data //get this data from the database - above route
        });
        
    } catch (err) {
        dispatch({
            type: PROJECT_ERROR,
            payload: { 
                msg: err.response.statusText, 
                status: err.response.status 
            }
        })
    }
}

//get any all user's projects by user id
export const getProjectsByUserId = userId => async dispatch => {
    try {
        //axios call to the route that will match profile to user's id
        const res = await axios.get(`/api/project/user/${userId}`);

        dispatch ({
            type: GET_USER_PROJECTS,
            payload: res.data //get this data from the database - above route
        });


    } catch (err) {
        dispatch({
            type: PROJECT_ERROR,
            payload: { 
                msg: err.response.statusText, 
                status: err.response.status 
            }
        })

    }
}

//get any all user's projects that they OWN by user id
export const getProjectsByOwnerId = () => async dispatch => {
    try {
        //axios call to the route that will match profile to user's id
        const res = await axios.get(`/api/project/me`);

        dispatch ({
            type: GET_USER_PROJECTS,
            payload: res.data //get this data from the database - above route
        });


    } catch (err) {
        dispatch({
            type: PROJECT_ERROR,
            payload: { 
                msg: err.response.statusText, 
                status: err.response.status 
            }
        })
    }
}

//delete project by id
//get any project by id
export const deleteProject = (
    projectId,  
    history,
    edit = false) => async dispatch => {
    try {

        if (!edit) {
            history.push('/dashboard');
        };
        
        //axios call to the route that will match profile to user's id
        await axios.delete(`/api/project/${projectId}`);

        dispatch ({ type: DELETE_PROJECT });

    } catch (err) {
        dispatch({
            type: PROJECT_ERROR,
            payload: { 
                msg: err.response.statusText, 
                status: err.response.status 
            }
        })
    }
}