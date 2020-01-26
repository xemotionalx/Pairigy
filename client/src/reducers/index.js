import { combineReducers } from "redux";
import alert from './alert';
import auth from './auth';
import favorites from './faves';
import profile from './profile';
import project from './project';
import search from './search';
import messages from './messages';

export default combineReducers({
    alert,
    auth,
    favorites,
    messages,
    profile,
    project,
    search
});
