import {combineReducers} from 'redux';
import posts from './posts';

export default combineReducers({posts,});

//a reducer is a function more specifically a fn that accepts the state and also the action, then based on the action type  we wanna do some logic. return action/state changed by the action.