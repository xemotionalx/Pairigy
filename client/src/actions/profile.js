import axios from 'axios';
// eslint-disable-next-line
import { GET_PROFILE, PROFILE_ERROR, UPDATE_PROFILE } from './types';

//get current profile
export const getCurrentProfile = () => async dispatch => {
    try {
        //axios call to the route that will match profile to user's id
        const res = await axios.get('/api/profile/me');

        dispatch ({
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
export const createProfile = ( formData ) => async dispatch => {
    
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
        dispatch ({
            type: GET_PROFILE,
            payload: res.data
        });

    } catch(err) {
        //save the errors array from the post route to this variable
        const errors = err.response.data.errors;

        errors.forEach(error => {
            console.log(error.msg)
        });

        dispatch({
            type: PROFILE_ERROR,
            payload: { 
                msg: err.response.statusText, 
                status: err.response.status 
            }
        })

    }
    
}
