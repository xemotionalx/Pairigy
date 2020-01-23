import axios from 'axios';
import { setAlert } from './alert';
import {
    GET_EMAIL,
    EMAIL_ERROR
} from './types';

// Get emails
export const getEmails = () => async dispatch => {
    try {
        const res = await axios.get('/api/mail/');

        dispatch({
            type: GET_EMAIL,
            payload: res.data
        });
    } catch (err) {
        dispatch({
            type: EMAIL_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status }
        });
    }
};