import { logoutUser,getUserInfo } from './authAction'
import ACTIONS from './index'
import {serverUrl} from './credentials'

export const setToken = (token)=>{
    return{
        type:ACTIONS.SET_TOKEN,
        payload:token
    }
}
export const getAccessToken = () => (dispatch) => {
    
    const requestOptions = {
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        credentials:'include',
        mode:'cors'
    };

    return fetch(serverUrl+'user/refresh_token', requestOptions)
    .then(response=>{
        if(response.ok)
        return response.json();
        throw response;
    })
    .then(response=>{
        const access_token = response.token;
        dispatch(setToken(access_token));
        dispatch(getUserInfo(access_token));
    })
    .catch(err=>{
        console.log(err);
        dispatch(logoutUser());
    })
}