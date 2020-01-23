import axios from 'axios';
// eslint-disable-next-line
import { GET_FAVES, FAV_ERROR } from './types';

//get current profile
export const getCurrentFavorites = () => async dispatch => {
    try {
        //axios call to the route that will match profile to current user
        const res = await axios.get('/api/faves/me');

        dispatch({
            type: GET_FAVES,
            payload: res.data //get this data from the database - above route
        });

    } catch (err) {
        dispatch({
            type: FAV_ERROR,
            payload: {
                msg: err.response.statusText,
                status: err.response.status
            }
        })
    }
};

export const addNewFavorite = (userId) => async dispatch => {
    try {

        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        };

        //axios call to the route that will match profile to current user
        const res = await axios.post('/api/faves', {newFav: userId}, config);

        dispatch({
            type: GET_FAVES,
            payload: res.data
        });

    } catch (err) {
        dispatch({
            type: FAV_ERROR,
            payload: {
                msg: err.response.statusText,
                status: err.response.status
            }
        })
    }
}