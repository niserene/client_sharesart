import { serverUrl } from './credentials';
import ACTIONS from './index'
import { showToast } from './toastAction';



export const getAllUsers = ()=> (dispatch)=>{

    dispatch(AllUsersLoading());
    const token = localStorage.getItem('token');

    const requestOptions = {
        method:'GET',
        headers:{
            'Content-Type':'application/json',
            'Authorization':token
        },
        credentials:'include',
        mode:'cors'
    };
    var myError={
        err:false,
        heading:'Internal Server Error',
        info:'Due to some Technical Issues/Internet connection this error may occur please try after some time'
    }
    return fetch(serverUrl+'user/all_info', requestOptions)
    .then(response=>{
        if(response.ok)return response.json();
        else{
            return response.text()
            .then(text=>{
                const msg = JSON.parse(text).msg
                myError.err = true;
                myError.heading = "Cannot be Accessed"
                myError.info = msg;
            })
            .catch(err=>{
                return err;
            })
        }
    },err=>{
        throw err
    })
    .then(response=>{

        // alert(JSON.stringify(response.msg));
        const users = response.msg;
        if(myError.err)
        {
            dispatch(AllUsersError(myError));
        }
        else{
            dispatch(AllUsersSuccess(users));
        }
    })
    .catch(error=>{
        alert("someintasd")
        dispatch(AllUsersError(myError));
    })
}

export const getAllNewsLetterRequests = (token)=>(dispatch)=>{

    token = token ? token : localStorage.getItem('token').toString()
    const requestOptions = {
        method:'GET',
        headers:{
            'Content-Type':'application/json',
            'Authorization':token
        },
        credentials:'include',
        mode:'cors'
    };
    
    var myError={
        err:false,
        message:'Weak Internet Connection, could not sent request , please try again',
        color:'red'
    }
    
    fetch(serverUrl+'newsletter/allSubscribers',requestOptions)
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
            myError.message = "Request Success 😀";
            myError.color = 'green'
            dispatch(setNewsLetterList(response.subscribers))
        }
        dispatch(showToast(myError))
    })
    .catch(err=>{
        dispatch(showToast(myError))
    })

}

export const getAllContactsRequests = (token)=>(dispatch)=>{

    token = token ? token : localStorage.getItem('token').toString()
    const requestOptions = {
        method:'GET',
        headers:{
            'Content-Type':'application/json',
            'Authorization':token
        },
        credentials:'include',
        mode:'cors'
    };
    
    var myError={
        err:false,
        message:'Weak Internet Connection, could not sent request , please try again',
        color:'red'
    }
    
    fetch(serverUrl+'contact_us/contact_requests',requestOptions)
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
            myError.message = 'Request made success 😀';
            myError.color = 'green'
            dispatch(setContactsList(response.result))
        }
        dispatch(showToast(myError))
    })
    .catch(err=>{
        dispatch(showToast(myError))
    })

}



export const setNewsLetterList = (data)=>{
    return{
        type:ACTIONS.SET_NEWSLETTER_LIST,
        payload:data
    }
}

export const setContactsList = (data)=>{
    return{
        type:ACTIONS.SET_CONTACTS_LIST,
        payload:data
    }
}

export const AllUsersLoading = ()=>{
    return{
        type:ACTIONS.ALLUSERS_LOADING
    }
}
export const AllUsersError = (data)=>{
    return{
        type:ACTIONS.ALLUSERS_ERROR,
        payload:data
    }
}
export const AllUsersSuccess = (data)=>{
    return{
        type:ACTIONS.ALLUSERS_SUCCESS,
        payload:data
    }
}

