import { GET_MESSAGE, DELETE_MESSAGE, GET_RECEIVED, MESSAGE_ERROR } from "../actions/types";

const initialState = {
  received: [],
  message: null,
  messageSelected: false,
  error: {}
};

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    // a copy of state is created, and the payload is pushed to the profile object
    case GET_MESSAGE:
      return {
        ...state,
        message: payload,
        messageSelected: true,
        loading: false
      };
    case DELETE_MESSAGE: 
        return {
            ...state,
            message: null,
            messageSelected: false,
            error: {}
        }
    case GET_RECEIVED:
      return {
        ...state,
        received: payload,
        loading: false
      };
    case MESSAGE_ERROR:
      return {
        ...state,
        error: payload,
        loading: false,
        message: null,
        received: []
      };
    default:
      return state;
  }
}
