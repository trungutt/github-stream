import * as types from './actionTypes';

export function beginAjaxRequest() {
    return {
        type: types.BEGIN_AJAX_REQUEST
    };
}
