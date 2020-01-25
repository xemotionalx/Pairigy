import { ADVANCED_SEARCH, ADVANCED_SEARCH_ERROR } from '../actions/types';

const initialState = {
    results: [],
    loading: true,
    error: {}
}

export default function (state = initialState, action) {
    const {type, payload} = action;

    switch (type) {
        case ADVANCED_SEARCH:
            return {
                ...state,
                results: payload,
                loading: false
            }
        case ADVANCED_SEARCH_ERROR: 
        return {
            ...state,
            error: payload,
            results: [],
            loading: false
        }
        default:
            return state;
    }
}
