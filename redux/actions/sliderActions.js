import { FETCH_SLIDER_REQUEST, FETCH_SLIDER_SUCCESS, FETCH_SLIDER_ERROR } from '../actions/types';

export const fetchSliderRequest = () => ({
     type: FETCH_SLIDER_REQUEST    
});

export const fetchSliderSuccess = json => ({ 
    type: FETCH_SLIDER_SUCCESS,
    payload: json
});

export const fetchSliderError = error => ({
    type: FETCH_SLIDER_ERROR,
    payload: error
})

export const fetchSlider = () => {
    return async dispatch => {
        dispatch(fetchSliderRequest());
        try {
            let response = await fetch('http://grupa.co.rs/wp-json/wp/v2/nectar_slider');
            let json = await response.json();
            dispatch(fetchSliderSuccess(json));
        } catch(error) {
            dispatch(fetchSliderError(error));
        }
    }
}