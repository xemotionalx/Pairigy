import axios from "axios";

import {
  GET_MESSAGE,
  DELETE_MESSAGE,
  GET_RECEIVED,
  MESSAGE_ERROR
} from "./types";

//create and send a message
export const createMessage = (formData, history) => async dispatch => {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json"
      }
    };

    const res = await axios.post("/api/mail", formData, config);

    dispatch({
      type: GET_MESSAGE,
      payload: res.data //get this data from the database - above route
    });
  } catch (err) {
    dispatch({
      type: MESSAGE_ERROR,
      payload: {
        msg: err.response.statusText,
        status: err.response.status
      }
    });
  }
};

//get all messages received by logged in user
export const getReceived = () => async dispatch => {
  try {
    const res = await axios.get("/api/mail/me");

    dispatch({
      type: GET_RECEIVED,
      payload: res.data //get this data from the database - above route
    });
  } catch (err) {
    dispatch({
      type: MESSAGE_ERROR,
      payload: {
        msg: err.response.statusText,
        status: err.response.status
      }
    });
  }
};

//get all messages received by logged in user
export const getMessageById = message_id => async dispatch => {
  try {
    const res = await axios.get(`/api/mail/${message_id}`);

    dispatch({
      type: GET_MESSAGE,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: MESSAGE_ERROR,
      payload: {
        msg: err.response.statusText,
        status: err.response.status
      }
    });
  }
};

//delete message
//delete message by id
//get any message by id
export const deleteMessage = (messageId, history) => async dispatch => {
  try {
      console.log(messageId);
    //axios call to the route that will match profile to user's id
    await axios.delete(`/api/mail/${messageId}`);
    dispatch({ type: DELETE_MESSAGE });
    history.push("/mail");
  } catch (err) {
    dispatch({
      type: MESSAGE_ERROR,
      payload: {
        msg: err.response.statusText,
        status: err.response.status
      }
    });
  }
};
