import axios from 'axios';

import { GET_MESSAGE, GET_RECEIVED, MESSAGE_ERROR } from './types';

export const createMessage = (formData, history) => async dispatch => {
    try {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        };

    const res = await axios.post('/api/mail', formData, config);

    dispatch({
        type: GET_MESSAGE,
        payload: res.data //get this data from the database - above route
    });
} catch (err) {
    dispatch({
        type: MESSAGE_ERROR,
        payload: {
            msg: err.response.statusText,
            status: err.response.status
        }
    })
}
}

export const getReceived = formData => async dispatch => {
    try {
    const res = await axios.get('/api/mail/me');

    dispatch({
        type: GET_RECEIVED,
        payload: res.data //get this data from the database - above route
    });

} catch (err) {
    dispatch({
        type: MESSAGE_ERROR,
        payload: {
            msg: err.response.statusText,
            status: err.response.status
        }
    })
}
}