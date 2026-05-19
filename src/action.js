import { type } from '@testing-library/user-event/dist/type/index.js';
import { CHANGE_SEARCH_FIELD,
    REQUEST_ROBOTS_PENDING,
    REQUEST_ROBOTS_SUCCESS,
    REQUEST_ROBOTS_FAILED

 } from './contants.js'

// action example
export const setSearchField = (text) => {
    return {
        type: CHANGE_SEARCH_FIELD, //name of action, constant
        payload: text // payload value of user entered text
    }
}

export const requestRobots = () => (dispatch) => { // higher order function
    dispatch({type: REQUEST_ROBOTS_PENDING});
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => dispatch({type: REQUEST_ROBOTS_SUCCESS, payload: data}))
        .catch(error => dispatch({type: REQUEST_ROBOTS_FAILED, payload: error}))
}