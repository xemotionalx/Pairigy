import { GET_FAVES, FAV_ERROR } from '../actions/types';

const initialState = {
    favorites: [],
    err: {}
};

export default function (state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        // a copy of state is created, and the payload is pushed to the profile object
        case GET_FAVES:
            return {
                ...state,
                favorites: payload,
            };
        case FAV_ERROR:
            return {
                ...state,
                error: payload,
               favorites: []
            };
        default:
            return state;
    }
};