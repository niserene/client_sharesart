import ACTIONS from '../Actions/index'

const initialState = {
    allUsers:[],
    isLoading:false,
    err:false,
    data:{
        heading:'',
        info:''
    }
}

const usersReducer = (state = initialState,action)=>
{
    switch(action.type){

        case ACTIONS.ALLUSERS_LOADING:
            return{
                ...state,
                isLoading:true
            }

        case ACTIONS.ALLUSERS_ERROR:
            return{
                ...state,
                isLoading:false,
                err:true,
                data:action.payload
            }
        
        case ACTIONS.ALLUSERS_SUCCESS:
            return{
                ...state,
                isLoading:false,
                err:false,
                allUsers:action.payload
            }
        
        default: return initialState
    }
}

export default usersReducer;