import { getAccessToken } from './tokenAction'


export const InitialSetup = (data=false) =>(dispatch)=>{

    const isLogged = localStorage.getItem('isLogged') ? true : false
    if(isLogged||data)
    {
        alert('initia setup')
        dispatch(getAccessToken());
    }

}