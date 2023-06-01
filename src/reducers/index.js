import loggedReducer from './isLogged'
import userDetailsReducer from './userDetailsReducer';
import { combineReducers } from '@reduxjs/toolkit'
import userQuestionsReducer from './userQuestion';

const allReducers = combineReducers({
    isLogged: loggedReducer,
    userDetails: userDetailsReducer,
    userQuestions: userQuestionsReducer
})

export default allReducers;