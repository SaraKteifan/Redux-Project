import login from "./login";
import data from "./data";
import fetch from './fetch'
import {combineReducers} from 'redux';


const AllReducers=combineReducers({
    login: login,
    data: data,
    users: fetch
});

export default AllReducers;