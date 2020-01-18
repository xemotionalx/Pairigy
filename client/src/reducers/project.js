import { GET_PROJECT, GET_USER_PROJECTS, PROJECT_ERROR } from '../actions/types';

const initialState = {
    project: null,
    projects: [],
    loading: true,
    error: {}
};

export default function(state = initialState, action) {
    const { type, payload } = action;

    switch(type) {
        // a copy of state is created, and the payload is pushed to the project object
        case GET_PROJECT:
            return {
                ...state,
                project: payload,
                loading: false
            };
            case GET_USER_PROJECTS:
                return {
                    ...state,
                    projects: payload,
                    loading: false
                };
            case PROJECT_ERROR:
                return {
                    ...state,
                    error: payload,
                    loading: false,
                    project: null
                };
        default:
            return state;
    }
};