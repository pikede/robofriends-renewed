import { CHANGE_SEARCH_FIELD } from './contants.js'

// action example
export const setSearchField = (text) => {
    return {
        type: CHANGE_SEARCH_FIELD, //name of action, constant
        payload: text // payload value of user entered text
    }
}