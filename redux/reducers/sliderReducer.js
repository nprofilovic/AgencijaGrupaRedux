import { FETCH_SLIDER_REQUEST, FETCH_SLIDER_SUCCESS, FETCH_SLIDER_ERROR } from '../actions/types';

const initialState = {
    loading: false,
    page: 1,
    refreshing: false,
    errorMessage: '',
    sliderData: [],
}


const sliderReducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_SLIDER_REQUEST:
            return {...state, loading: true };
        case FETCH_SLIDER_ERROR:
            return {...state, loading: false, errorMessage: action.payload};
        case FETCH_SLIDER_SUCCESS:
            return {...state, loading: false, sliderData: action.payload};

        default:
            return state;
    }   
}

export default sliderReducer;
