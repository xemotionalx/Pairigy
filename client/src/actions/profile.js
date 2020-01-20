import axios from 'axios';
// eslint-disable-next-line
import { GET_PROFILE, PROFILE_ERROR, SEARCH_PROFILE, SEARCH_PROFILE_ERROR } from './types';

//get current profile
export const getCurrentProfile = () => async dispatch => {
    try {
        //axios call to the route that will match profile to current user
        const res = await axios.get('/api/profile/me');

        dispatch({
            type: GET_PROFILE,
            payload: res.data //get this data from the database - above route
        });

    } catch (err) {
        dispatch({
            type: PROFILE_ERROR,
            payload: {
                msg: err.response.statusText,
                status: err.response.status
            }
        })
    }
};

//get any profile
export const getProfileById = userId => async dispatch => {
    try {
        //axios call to the route that will match profile to user's id
        const res = await axios.get(`/api/profile/user/${userId}`);

        dispatch({
            type: GET_PROFILE,
            payload: res.data //get this data from the database - above route
        });


    } catch (err) {
        dispatch({
            type: PROFILE_ERROR,
            payload: {
                msg: err.response.statusText,
                status: err.response.status
            }
        })

    }
}

//edit profile
//the history object has a "push" method
// edit startes as false to flag that we are creating a profile for the first time
export const createProfile = (
    formData,
    history,
    edit = false) => async dispatch => {
        try {
            //set the header type so route can receive json
            const config = {
                headers: {
                    'Content-Type': 'application/json'
                }
            };

            //send formdata in json form to post route to update the database
            const res = await axios.post('/api/profile', formData, config);

            //send data to reducer
            dispatch({
                type: GET_PROFILE,
                payload: res.data
            });

            //history object used to be able to redirect
            if (!edit) {
                history.push('/dashboard');
            };

        } catch (err) {

            const errors = err.response.data.errors;

            if (errors) {
                errors.forEach(error => dispatch(console.log(error.msg)));
            }

            dispatch({
                type: PROFILE_ERROR,
                payload: {
                    msg: err.response.statusText,
                    status: err.response.status
                }
            })

        }
    };



export const getSearchProfile = (query) => async dispatch => {
    try {
        //axios call to the route that will match profile to current user
        const res = await axios.get("/api/search?q=" + query);
        console.log(res.data);

        dispatch({
            type: SEARCH_PROFILE,
            payload: res.data //get this data from the database - above route
        });

    } catch (err) {
        dispatch({
            type: SEARCH_PROFILE_ERROR,
            payload: {
                msg: err.response.statusText,
                status: err.response.status
            }
        })
    }
};