import ACTIONS from './index.js'
import {serverUrl} from './credentials'

export const ContactUsSubmit = (data) => (dispatch)=>{

    const requestOptions = {
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify( data ),
        credentials:'include',
        mode:'cors'
    }

    return fetch( serverUrl+'contactus/form',requestOptions)
    .then(response => {
        if(!response.ok)throw response;
        else return response.json();
    })
    .then(response =>{
        dispatch(ContactUsSubmitSuccess());
    })
    .catch(err =>{
        
    })
}

export const ContactUsSubmitSuccess = ()=>{
    return{
        type:ACTIONS.CONTACTUS_DONE
    }
}

export const NewsLetter = (data) => (dispatch)=>{

    const requestOptions = {
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify( data ),
        credentials:'include',
        mode:'cors'
    }

    return fetch( serverUrl+'newsletter/form',requestOptions)
    .then(response => {
        if(!response.ok)throw response;
        else return response.json();
    })
    .then(response =>{
        dispatch(NewsLetterSuccess());
    })
    .catch(err =>{
        
    })
}

export const NewsLetterSuccess = ()=>{
    return{
        type:ACTIONS.NEWSLETTER_DONE
    }
}