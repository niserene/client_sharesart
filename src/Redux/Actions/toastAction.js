import ACTIONS from "./index"


export const showToast = (data = {message:'Welcome Here 😊',color:''}) =>(dispatch)=>{
    
    data ={
        show:true,
        ...data
    }
    dispatch( sToast(data))
}

export const hideToast = () => (dispatch)=>{
    dispatch(hToast());
}

export const sToast = (data)=>{
    return{
        type:ACTIONS.SHOW_TOAST,
        payload:{
            ...data
        }
    }
}
export const hToast = (data)=>{
    return{
        type:ACTIONS.HIDE_TOAST,
    }
}