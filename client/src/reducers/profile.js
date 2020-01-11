import { GET_PROFILE, UPDATE_PROFILE } from '../actions/types';

const initialState = {
    profile: null,
    error: {}
};

export default function(state = initialState, action) {
    const { type, payload } = action;

    switch(type) {
        // a copy of state is created, and the payload is pushed to the profile object
        case GET_PROFILE:
        case UPDATE_PROFILE:
            return {
                ...state,
                profile: payload
            };
        default:
            return state;
    }
};