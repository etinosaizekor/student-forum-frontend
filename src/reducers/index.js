import loggedReducer from './isLogged'
import { combineReducers } from '@reduxjs/toolkit'

const allReducers = combineReducers({
    loggedIn: loggedReducer
})

export default allReducers;