import * as types from './actionTypes';
import eventsApi from '../api/eventsApi';
import {beginAjaxRequest} from './ajaxStatusActions';

function loadEventsSuccess(events) {
    return {
        type: types.LOAD_EVENTS_SUCCESS,
        events: events.data
    };
}

export function filterEvents(filter) {
    return {
        type: types.FILTER_EVENTS,
        filter
    };
}

export function loadEvents() {
    return function(dispatch) {

        dispatch(beginAjaxRequest());

        return eventsApi.getAllEvents().then(events => {
            dispatch(loadEventsSuccess(events));
            dispatch(filterEvents({
                filter: {}
            }));
        }).catch(error => {
            throw(error);
        });
    };
}
