import {
    GET_EMAIL,
    EMAIL_ERROR
} from '../actions/types';


const inititialState = {
    emails: [],
    email: null,
    loading: true,
    error: {}
}

export default function(state = inititialState, action) {
    const {type, payload } = action;

    switch(type){
        case GET_EMAIL:
            return {
                ...state,
                emails: payload,
                loading: false
            }
            case EMAIL_ERROR:
                return {
                    ...state,
                    error: payload,
                    loading: false
                }
                default:
                    return state;

    }
}