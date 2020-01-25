import axios from 'axios';
import { ADVANCED_SEARCH, ADVANCED_SEARCH_ERROR } from './types';

export const searchByLocation = location => async dispatch => {
    try{
        
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