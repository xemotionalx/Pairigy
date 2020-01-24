import { combineReducers } from "redux";
import alert from './alert';
import auth from './auth';
import favorites from './faves';
import profile from './profile';
import project from './project';
import email from './email';

export default combineReducers({
    alert,
    auth,
    favorites,
    profile,
    project,
    email
});
