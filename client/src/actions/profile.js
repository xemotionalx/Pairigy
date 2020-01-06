import axios from 'axios';
import { GET_PROFILE, UPDATE_PROFILE } from './types';

//export the function that will get the profile and load it on the profile page
export const getProfile = profile => dispatch => {
    dispatch ({
        type: GET_PROFILE,
        payload: { profile }
    })
};

//edit profile
export const createProfile = ( formData ) => dispatch => {
    dispatch ({
        type: GET_PROFILE,
        payload: formData
    })
}
