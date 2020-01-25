import axios from 'axios';
import { ADVANCED_SEARCH, ADVANCED_SEARCH_ERROR } from './types';

export const searchByLocation = (location, history) => async dispatch => {
    try{
        //axios call to the search route that will query location
        const res = await axios.get(`/api/profile/search/location/${location}`);

        dispatch({
            type: ADVANCED_SEARCH,
            payload: res.data //get this data from the database - above route
        });

        history.push('/search/results');

    } catch(err) {
        dispatch({
            type: ADVANCED_SEARCH_ERROR,
            payload: {
                msg: err.response.statusText,
                status: err.response.status
            }
        })
    }
}