import ACTIONS from '../Actions/index'

const initialState = {
    reset:{
        isLoading:false,
        err:false,
        isDone:false,
        data:{
            heading:'',
            info:''
        }
    },
    forgot:{
        err:false,
        isLoading:false,
        show:true,
        reshow:false,
        data:{
            heading:'Forgot Password',
            info:'No issue!! Enter you registered email here, we will send you a mail with instructions to reset you password',
            email:''
        }
    }
}


const passwordReduer = (state = initialState, action)=>{
    
    switch(action.type){

        case ACTIONS.FORGOT_LOADING:
            return{
                ...initialState,
                forgot:{
                    ...(initialState.forgot),
                    isLoading:true
                }
            }

        case ACTIONS.FORGOT_SUCCESS:
            return{
                ...state,
                forgot:{
                    ...(initialState.forgot),
                    isLoading:false,err:false,show:false,reshow:true,
                    data:{
                        heading:'Forgot password',
                        info:'An email has been sent to the given mail, do check you mailbox',
                        email:action.payload
                    }
                }
            }
        
        case ACTIONS.FORGOT_ERROR:
            return initialState

        case ACTIONS.RESET_LOADING:{
            return{
                ...initialState,
                reset:{
                    ...(initialState.reset),
                    isLoading:true
                }
            }
        }

        case ACTIONS.RESET_ERROR:{
            return{
                ...initialState,
                reset:{
                    ...(initialState.reset),
                    isDone:true,
                    err:true,
                    data:{
                        heading:action.payload.heading,
                        info:action.payload.info
                    }
                }
            }
        }

        case ACTIONS.RESET_SUCCESS:
            return{
                ...initialState,
                reset:{
                    ...(initialState.reset),
                    isDone:true,
                    data:{
                        heading:'Reset Password',
                        info:'Password change successfully done:)'
                    }
                }
            }

        default: return initialState


    }
}

export default passwordReduer;