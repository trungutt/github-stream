import * as types from './actionTypes';
import eventsApi from '../api/eventsApi';

function loadEventsSuccess(events) {
    return {
        type: types.LOAD_EVENTS_SUCCESS,
        events: events.data
    };
}

function filterEvents(events) {
    return {
        type: types.FILTER_EVENTS,
        events
    };
}

export function loadEvents() {
    return function(dispatch) {
        return eventsApi.getAllEvents().then(events => {
            dispatch(loadEventsSuccess(events));
        }).catch(error => {
            throw(error);
        });
    };
}
