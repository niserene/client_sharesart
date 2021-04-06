import ACTIONS from '../Actions/index'

const initialState={
    access_token:''
}

const tokenReducer = (state = initialState, action) => {

    switch(action.type) {

        case ACTIONS.GET_TOKEN:
            return{
                ...state,
                access_token:action.payload.token
            }
        
        case ACTIONS.SET_TOKEN :
            localStorage.setItem('token',action.payload)
            return{
                ...state,
                access_token : action.payload
            }
        default : return initialState
    }
}

export default tokenReducer