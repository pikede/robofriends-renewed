import { CHANGE_SEARCH_FIELD } from './contants.js'

const initialState = {
    searchField : ''
}

// reducer example
export const searchRobots = (state = initialState, action = {}) => {
    switch(action.type) { // can use if instead of switch statement
        case CHANGE_SEARCH_FIELD: 
            return Object.assign({}, state, { searchField: action.payload }); // or {(...state, { searchField: action.payload })}
        default:
            return state;
    }
}