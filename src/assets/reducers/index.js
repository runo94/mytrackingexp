import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';

import workout from './workout'

export default combineReducers({
  routing: routerReducer,
  workout
})
