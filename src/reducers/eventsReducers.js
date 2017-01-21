import * as types from '../actions/actionTypes';
import initialState from './initialState';
import { getEventsBetweenTwoDates } from '../utils/utils';

export default function eventsReducer(state = initialState, action) {
    switch (action.type) {
        case types.LOAD_EVENTS_SUCCESS:
            return Object.assign({}, state, {
                events: action.events
            });
        case types.FILTER_EVENTS:
            return Object.assign({}, state, {
                filtered: getEventsBetweenTwoDates(state.events, action.filter.start, action.filter.end)
            });
        default:
            return state;
    }
}
