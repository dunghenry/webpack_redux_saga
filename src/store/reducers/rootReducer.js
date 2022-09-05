import { combineReducers } from '@reduxjs/toolkit';
import todoReducer from './todoSlice';

const rootReducer = combineReducers({
    todoReducer,
});

export default rootReducer;
