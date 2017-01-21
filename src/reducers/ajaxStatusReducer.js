import * as types from '../actions/actionTypes';
import initialState from './initialState';

function ajaxSuccess(type) {
    return type.substring(type.length - 8) == '_SUCCESS';
}

export default function ajaxStatusReducer(state = initialState.numberPendingAjaxRequest, action) {
    if (action.type == types.BEGIN_AJAX_REQUEST) {
        return state + 1;
    } else if (ajaxSuccess(action.type)) {
        return state - 1;
    }
    return state;
}
