import axios from 'axios';
import { GET_PROFILE, UPDATE_PROFILE } from './types';

//esport the function that will get the profile and load it on the profile page
export const getProfile = profile => dispatch => {
    dispatch ({
        type: GET_PROFILE,
        payload: { profile }
    })
};