import { combineReducers } from "redux";
import alert from './alert';
import auth from './auth';
import favorites from './faves';
import profile from './profile';
import project from './project';
import search from './search';


export default combineReducers({
    alert,
    auth,
    favorites,
    profile,
    project,
    search
});
