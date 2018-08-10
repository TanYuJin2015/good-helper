import * as ActionTypes from './ActionTypes.js';

export const changePage = (index) => {
    return {
        type: ActionTypes.CHANGE_PAGE,
        index: index
    };
};