import ACTIONS from '../Actions/index'

var initialState = {
    newsLetterList:[],
    contactsList:[],
    isLoading:false,
    err:false
}

const adminReducer = (state = initialState, action)=>{
    
    switch(action.type)
    {
        case ACTIONS.SET_NEWSLETTER_LIST:
            return{
                ...state,
                newsLetterList:action.payload
            }

        case ACTIONS.SET_CONTACTS_LIST:
            return{
                ...state,
                contactsList:action.payload
            }

        default: return state

    }
}

export default adminReducer