import {
    FETCH_WEBSITE_SUCCESS,
    FETCH_WEBSITE_REQUEST,
    FETCH_WEBSITE_ERROR,
} from '../actions/types';

export const fetchWebsiteRequest = () => ({
    type: FETCH_WEBSITE_REQUEST    
});

export const fetchWebsiteSuccess = json => ({ 
   type: FETCH_WEBSITE_SUCCESS,
   payload: json
});

export const fetchWebsiteError = error => ({
   type: FETCH_WEBSITE_ERROR,
   payload: error
})

export const fetchWebsite = () => {
   return async dispatch => {
       dispatch(fetchWebsiteRequest());
       try {
           let response = await fetch('http://grupa.co.rs/wp-json/wp/v2/portfolio?per_page=5&project-type=20');
           let json = await response.json();
           dispatch(fetchWebsiteSuccess(json));
       } catch(error) {
           dispatch(fetchWebsiteError(error));
       } 
   }
}