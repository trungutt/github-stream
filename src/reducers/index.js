import {combineReducers} from 'redux';
import data from './eventsReducers';
import pendingAjaxRequest from './ajaxStatusReducer';

const rootReducer = combineReducers({
    data,
    pendingAjaxRequest
});

export default rootReducer;
