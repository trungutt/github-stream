import moment from 'moment';

const EVENT_DATE_FORMAT = 'ddd, MMM Do YYYY, h:mm:ss a';
export const formatDate = (text) => moment(text).format(EVENT_DATE_FORMAT);

const FILTER_DATE_FORMAT = 'YYYY-MM-DD HH:mm:ss';
export const getEventsBetweenTwoDates = (events, start = '', end = '') => {
    const startMoment = moment(start, FILTER_DATE_FORMAT);
    const endMoment = moment(end, FILTER_DATE_FORMAT);
    let filteredEvent = events;

    if (events && startMoment.isValid()) {
        filteredEvent = events.filter(event => moment(event.created_at).isAfter(startMoment));
    }
    if (events && endMoment.isValid()) {
        filteredEvent = filteredEvent.filter(event => moment(event.created_at).isBefore(endMoment));
    }

    return filteredEvent;
};
