import ACTIONS from './index'
import {serverUrl} from './credentials'
import {store} from '../store'
import { showToast } from './toastAction'

export const resetPassword = (data)=> (dispatch)=>{

    dispatch(resetLoading())
    var token = data.token||localStorage.getItem('token')
    alert('token :'+token)
    const requestOptions = {
        method:'POST',
        headers:{
            'Content-Type':'application/json',
            'Authorization':token
        },
        body:JSON.stringify( data ),
        credentials:'include',
        mode:'cors'
    };
    var myError={
        err:false,
        heading:'Internal Server Error',
        info:'Due to some Technical Issues/Internet connection this error may occur please try after some time'
    }
    return fetch(serverUrl+'user/reset',requestOptions)
    .then(response =>{
        if(response.ok)return response.json();
        else{
            return response.text()
            .then(text=>{
                const msg = JSON.parse(text).msg
                myError.err = true;
                myError.heading = "Reset Password"
                myError.info = msg;
            })
            .catch(err=>{
                return err;
            })
        }
    },err=>{
        throw err;
    })
    .then(response=>{

        if(myError.err){
            alert('reset');
            dispatch(resetError(myError))
        }
        else{
            dispatch(resetSuccess(myError));
        }
    },err=>{
        var errmess = new Error(err.message);
        throw errmess;
    })
    .catch(err=>{
        dispatch(resetError(myError))
    })
}

export const forgotPassword = (data)=>(dispatch)=>{

    dispatch(forgotLoading());
    const requestOptions = {
        method:'POST',
        headers:{
            'Content-Type':'application/json',
        },
        body:JSON.stringify( data ),
        credentials:'include',
        mode:'cors'
    };
    var myError={
        err:false,
        heading:'Internal Server Error',
        info:'Due to some Technical Issues/Internet connection this error may occur please try after some time'
    }
    return fetch(serverUrl+'user/forgot',requestOptions)
    .then(response=>{
        if(response.ok)return response.json();
        else{
            return response.text()
            .then(text=>{
                const msg = JSON.parse(text).msg
                myError.err = true;
                myError.heading = "Forgot Password"
                myError.info = msg;
            })
            .catch(err=>{
                return err;
            })
        }
    },err=>{
        throw err;
    })
    .then(response=>{
        var toast={
            show:true,
            message:(myError.info),
            color:'red',
            time:'20000'
        }
        if(myError.err){
            store.dispatch(showToast(toast));
        }
        else{
            dispatch(forgotSuccess(data.email));
        }
    },err=>{
        var errmess = new Error(err.message);
        throw errmess;
    })
    .catch(err=>{
        dispatch(forgotError(myError))
    })
}




export const resetLoading = ()=>{
    return {
        type:ACTIONS.RESET_LOADING
    }
}

export const resetError = (data)=>{
    return{
        type:ACTIONS.RESET_ERROR,
        payload:{
            heading:data.heading,
            info:data.info
        }
    }
}

export const resetSuccess = ()=>{
    return{
        type:ACTIONS.RESET_SUCCESS,
    }
}

export const forgotLoading = ()=>{
    return {
        type:ACTIONS.FORGOT_LOADING
    }
}

export const forgotError = ()=>{
    return{
        type:ACTIONS.FORGOT_ERROR
    }
}

export const forgotSuccess = (data)=>{
    return{
        type:ACTIONS.FORGOT_SUCCESS,
        payload:data
    }
}

