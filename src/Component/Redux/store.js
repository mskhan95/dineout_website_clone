import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import {reducer} from './reducer'

const AllReducer = combineReducers({
    Preducer:reducer
})

export  const myStore = createStore(AllReducer, applyMiddleware(thunk))