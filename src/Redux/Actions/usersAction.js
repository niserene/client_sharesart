import { serverUrl } from './credentials';
import { showToast } from './toastAction';



export const newsLetterRequest = (data)=>(dispatch)=>{

    const requestOptions = {
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify(data),
        credentials:'include',
        mode:'cors'
    };
    var myError={
        err:false,
        message:'Weak Internet Connection, could not sent request , please try again',
        color:'red'
    }
    
    fetch(serverUrl+'newsletter/subscribe',requestOptions)
    .then( response =>{
        if(response.ok)return response.json();
        else{
            response.text()
            .then(text=>{
                const msg = JSON.parse(text).msg
                myError.message = msg;
                myError.err = true;
            })
            .catch(err=>err)
        }
    })
    .then(response=>{
        if(!myError.err){
            myError.message = response.msg;
            myError.color = 'green'
        }
        dispatch(showToast(myError))
    })
    .catch(err=>{
        dispatch(showToast(myError))
    })
}

export const contactUsRequest = (data)=>(dispatch)=>{

    const requestOptions = {
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify(data),
        credentials:'include',
        mode:'cors'
    };
    var myError={
        err:false,
        message:'Weak Internet Connection, could not sent request , please try again',
        color:'red'
    }
    
    fetch(serverUrl+'contact_us/contact',requestOptions)
    .then( response =>{
        if(response.ok)return response.json();
        else{
            response.text()
            .then(text=>{
                const msg = JSON.parse(text).msg
                myError.message = msg;
                myError.err = true;
            })
            .catch(err=>err)
        }
    })
    .then(response=>{
        if(!myError.err){
            myError.message = response.msg;
            myError.color = 'green'
        }
        dispatch(showToast(myError))
    })
    .catch(err=>{
        dispatch(showToast(myError))
    })
}