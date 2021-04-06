import ACTIONS from './index'
import { InitialSetup } from './initialSetup'
import  {store} from '../store.js'
import {serverUrl} from './credentials'
import { showToast } from './toastAction'


export const loginUserGoogle = (data)=>(dispatch)=>{
    
    dispatch( loginLoading());

    const requestOptions = {
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify( data ),
        credentials:'include',
        mode:'cors'
    };
    var myError = {
        err:false,
        message:'Weak Internet Connection',
        color:'red'
    }
    return fetch(serverUrl+'user/google_login',requestOptions)
    .then((response) => {
        if(response.ok)return response.json
        else{
            return response.text()
            .then(text=>{
                const msg = JSON.parse(text).msg
                myError.err = true;
                myError.message = msg;
            })
            .catch(err=>{
                return err;
            })
        }
    })
    .then(response=>{
        if(!myError.err)
        {
            localStorage.setItem('isLogged',true);
            dispatch(loginSuccess());
            store.dispatch(InitialSetup(true));
        }
        else{
            dispatch(showToast(myError))
            dispatch(loginFailed());
        }
    })
    .catch(err=>{
            dispatch(showToast(myError))
            dispatch(loginFailed());
    })
}
export const loginUser = ( data ) => (dispatch) => {

    dispatch( loginLoading());

    const requestOptions = {
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify( data ),
        credentials:'include',
        mode:'cors'
    };
    var myError = {
        err:false,
        message:'Weak Internet Connection',
        color:'red'
    }
    return fetch(serverUrl+'user/login',requestOptions)
    .then((response) => {
        if(response.ok)return response.json
        else{
            return response.text()
            .then(text=>{
                const msg = JSON.parse(text).msg
                myError.err = true;
                myError.message = msg;
            })
            .catch(err=>{
                return err;
            })
        }
    })
    .then(response=>{
        if(!myError.err)
        {
            localStorage.setItem('isLogged',true);
            dispatch(loginSuccess());
            store.dispatch(InitialSetup(true));
        }
        else{
            dispatch(showToast(myError))
            dispatch(loginFailed());
        }
    })
    .catch(err=>{
        dispatch(showToast(myError))
        dispatch(loginFailed());
    })
}

export const signupUser = (data) => (dispatch) =>{

    dispatch( signupLoading());
    const requestOptions = {
        method:'POST',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify( data )
    };
    var myError = {
        err:false,
        message:'Weak Internet Connection',
        color:'red'
    }
    return fetch(serverUrl+'user/register', requestOptions)
    .then((response) => {
        if(response.ok)return response.json
        else{
            return response.text()
            .then(text=>{
                const msg = JSON.parse(text).msg
                myError.err = true;
                myError.message = msg;
            })
            .catch(err=>{
                return err;
            })
        }
    })
    .then(response=>{
        if(!myError.err)
        {
            dispatch(signupSuccess())
            dispatch(showToast({color:'green',message:'A mail has been sent to you , activate you mail'}))
        }
        else{
            dispatch(showToast(myError))
            dispatch(signupFailed());
        }
    })
    .catch(err=>{
        dispatch(showToast(myError))
        dispatch(signupFailed());
    })

}

export const activateAccount = (token) => (dispatch)=>{

    const requestOptions = {
        method:'POST',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify( token )
    };
    var myError = {
        err:false,
        heading:'Some Error Occured',
        info:'Weak Internet Connection'
    }
    return fetch(serverUrl+'user/activation', requestOptions)
    .then(response =>{
        if(response.ok)return response.json
        else{
            return response.text()
            .then(text=>{
                const msg = JSON.parse(text).msg
                myError.err = true;
                myError.message = msg;
            })
            .catch(err=>{
                return err;
            })
        }
    })
    .then(response=>{
        if(!myError.err)
        {
            dispatch(showToast({color:'green',message:'Email activated Successfully'}))
        }
        else{
            dispatch(showToast(myError));
        }
    },err=>err)
    .catch(err=>{
        dispatch(showToast(myError));
    })
}

export const getUserInfo = ( token )=>(dispatch)=>{

    const requestOptions = {
        method:'GET',
        headers:{
            'Content-Type':'application/json',
            'Authorization':token
        },
        credentials:'include',
        mode:'cors'
    }

    return fetch(serverUrl+'user/info',requestOptions)
    .then(response=>{
        if(response.ok)
        return response.json();
        throw response
    })
    .then(response=>{

        const userInfo = response.user;
        dispatch(setUserInfo(userInfo));
    })
    .catch(err=>{
        dispatch(showToast({color:'red',message:'Weak Internet connection'}))
    })
}
export const logoutUser = () => (dispatch)=>{

    const requestOptions={
        method:'GET',
        headers:{'Content-Type':'application/json'},
        credentials:'include',
        mode:'cors'
    }

    return fetch(serverUrl+'user/logout',requestOptions)
    .then(response=>response.json())
    .then(response=>{
        dispatch(BackToInitial()); 
    })
}

const setUserInfo = (user)=>{
    return{
        type:ACTIONS.SET_USERINFO,
        payload:user
    }
}

const BackToInitial = ()=>{
    return{
        type:ACTIONS.LOGOUT_USER
    }
}

export const loginLoading = ()=>{
    return {
        type : ACTIONS.LOGIN_LOADING
    }
}
export const loginFailed = ()=>{
    return{
        type: ACTIONS.LOGING_FAILED
    }
}
export const loginSuccess = (data)=>{
    return{
        type: ACTIONS.LOGIN_SUCCESS
    }
}
export const signupLoading = ()=>{
    return{
        type:ACTIONS.SIGNUP_LOADING
    }
}
export const signupFailed = (data) =>{
    return{
        type: ACTIONS.SIGNUP_FAILED
    }
}
export const signupSuccess = () =>{
    return{
        type: ACTIONS.SIGNUP_SUCCESS
    }
}