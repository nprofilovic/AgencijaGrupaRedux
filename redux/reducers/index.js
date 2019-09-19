import { combineReducers } from 'redux';
import sliderReducer from '../reducers/sliderReducer';
import websiteReducer from '../reducers/websiteReducer';

export default combineReducers({
    sliders: sliderReducer,
    website: websiteReducer
})