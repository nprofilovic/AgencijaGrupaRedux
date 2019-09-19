import {
    FETCH_WEBSITE_SUCCESS,
    FETCH_WEBSITE_REQUEST,
    FETCH_WEBSITE_ERROR,
} from '../actions/types';

const initialState = {
    loading: false,
    page: 1,
    refreshing: false,
    errorMessage: '',
    websiteData: [],
}

const websiteReducer = (state = initialState, action) => {
    switch(action.type){
        case FETCH_WEBSITE_REQUEST:
            return{...state, loading: true};
        case FETCH_WEBSITE_ERROR:
            return{...state, loading: false, errorMessage: action.payload};
        case FETCH_WEBSITE_SUCCESS:
            return{...state, loading: false, websiteData: action.payload};

        default:
            return state;
    }
}

export default websiteReducer;