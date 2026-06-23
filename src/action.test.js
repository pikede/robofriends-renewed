import { configure } from '@testing-library/dom';
import * as actions from './action.js';
import { CHANGE_SEARCH_FIELD,
    REQUEST_ROBOTS_PENDING,
    REQUEST_ROBOTS_SUCCESS,
    REQUEST_ROBOTS_FAILED

 } from './contants.js';
 import configureMockStore from 'redux-mock-store';
 import { thunk } from 'redux-thunk';

 const mockStore = configureMockStore([thunk]);

it('should create an action to search robots', () => {
    const text = 'wooo'
    const expectedAction = {
        type: CHANGE_SEARCH_FIELD,
        payload: text
    }

    expect(actions.setSearchField(text)).toEqual(expectedAction)
})

it('handles requesting robots API', () => {
    const store = mockStore()
    store.dispatch(actions.requestRobots())
    const action = store.getActions();

    const expectedAction = {
        type: REQUEST_ROBOTS_PENDING,
    }
    expect(action[0]).toEqual(expectedAction)
})