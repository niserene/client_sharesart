import {combineReducers} from 'redux';
import auth from './authReducer'
import token from './tokenReducer'
import toast from './toastReducer'
import password from './passwordReducer'
import users from './usersReducer'
import admin from './adminReducer'

export default combineReducers({
    auth,
    token,
    users,
    password,
    toast,
    admin
});