import ACTIONS from '../Actions/index'

const initialState = {
    user : {},
    isLogged : false,
    isAdmin : false,
    isLoading:false,
    err: false,
    errData:{
        heading:'',
        info:''
    }
}

const authReducer = (state = initialState, action) => {

    switch(action.type) {

        case ACTIONS.INITIAL_AUTH_SETUP:
            return{
                ...initialState,
                isLogged : localStorage.getItem('isLogged') ? true:false
            }

        case ACTIONS.LOGIN_LOADING:
            return{
                ...initialState,
                isLoading:true,
            }
        
        case ACTIONS.LOGING_FAILED:
            return{
                ...initialState,
                isLoading:false,
                err :true
            }

        case ACTIONS.LOGIN_SUCCESS:
            return{
                ...state,
                isLoading:false,
                err:false,
                isLogged: true,
                isAdmin:false
            }
        
        case ACTIONS.SIGNUP_LOADING:
            return{
                ...state,
                isLoading:true,
                err:false
            }
        case ACTIONS.SIGNUP_FAILED:
            return{
                ...state,
                isLoading:false,
                err :true
            }

        case ACTIONS.SIGNUP_SUCCESS:
            return{
                ...state,
                isLoading:false,
                err:false
            }

        case ACTIONS.SET_USERINFO :
            const data = action.payload
            const user = {
                username:data.username,
                email : data.email,
                phone: data.phone
            }
            return{
                ...state,
                user:user,
                isAdmin:data.role===1?true:false
            }
        
        case ACTIONS.LOGOUT_USER:
            localStorage.removeItem('isLogged')
            localStorage.removeItem('token')
            return initialState
        
        default:
        return {
            ...state,
            isLogged:localStorage.getItem('isLogged')?true:false
        }
    }
}

export default authReducer;