import { combineReducers } from 'redux';
import sliderReducer from '../reducers/sliderReducer';


export default combineReducers({
    sliders: sliderReducer
})