import React from 'react'
import {createStore, applyMiddleware} from 'redux'
import rootReducer from './Reducers/index'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'

export const store = createStore(rootReducer,
    applyMiddleware(thunk, logger)
)

export const DataProvider = ({children}) => {
    return (
        <Provider store={store}>
            
            {children}
        
        </Provider>
    )
}
