import { GET_PROFILE, PROFILE_ERROR } from '../actions/types';

const initialState = {
    profile: null,
    loading: true,
    error: {}
};

export default function(state = initialState, action) {
    const { type, payload } = action;

    switch(type) {
        // a copy of state is created, and the payload is pushed to the profile object
        case GET_PROFILE:
            return {
                ...state,
                profile: payload,
                loading: false
            };
            case PROFILE_ERROR:
                return {
                    ...state,
                    error: payload,
                    loading: false,
                    profile: null
                };
        default:
            return state;
    }
};