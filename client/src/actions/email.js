import axios from 'axios';
import {
    GET_EMAIL,
    EMAIL_ERROR,
    SEARCH_EMAIL_ERROR,
    SEARCH_EMAIL
} from './types';

// Get emails
export const getCurrentMessage = userId => async dispatch => {
    try {
        const res = await axios.get(`/api/mail/user/${userId}`);

        dispatch({
            type: GET_EMAIL,
            payload: res.data
        });

    } catch (err) {
        dispatch({
            type: EMAIL_ERROR,
            payload: { 
                msg: err.response.statusText, 
                status: err.response.status 
            }
        });
    }
};

//get any email
export const getMessageById = (userId) => async dispatch => {
    try {
        const config = {

        }
        const res = await axios.get(`/api/mail/user/${userId}`);

        dispatch({
            type: GET_EMAIL,
            payload: res.data //get this data from the database - above route
        });


    } catch (err) {
        dispatch({
            type: EMAIL_ERROR,
            payload: {
                msg: err.response.statusText,
                status: err.response.status
            }
        })

    }
}
export const createMessage = (
    msgData,
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
            const res = await axios.post('/api/mail', msgData, config);

            //send data to reducer
            dispatch({
                type: GET_EMAIL,
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
                type: EMAIL_ERROR,
                payload: {
                    msg: err.response.statusText,
                    status: err.response.status
                }
            })

        }
    };

    export const getSearchMessage = (query) => async dispatch => {
        try {
            //axios call to the route that will match profile to current user
            const res = await axios.get("/api/search?name=" + query)
    
    
            console.log(res.data);
            console.log('a Data has been received');

            dispatch({
                type: SEARCH_EMAIL,
                payload: res.data //get this data from the database - above route
            });
    
        } catch (err) {
            dispatch({
                type: SEARCH_EMAIL_ERROR,
                payload: {
                    msg: err.response.statusText,
                    status: err.response.status
                }
            })
        }
    };