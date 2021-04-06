import ACTIONS from '../Actions/index'

const initialState = {
    show : false,
    message:'Shares art ',
    color:'',
    time:''
}

const toastReducer = (state = initialState,action)=>{

    switch(action.type){

        case ACTIONS.SHOW_TOAST:
            let data = action.payload
            return{
                ...state,
                show:true,
                message : data.message,
                color : data.color,
            }
        
        case ACTIONS.HIDE_TOAST:
            return initialState
        
        default : return state
    }
}

export default toastReducer