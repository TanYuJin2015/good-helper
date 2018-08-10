import * as ActionTypes from '../../actions/Index/ActionTypes.js';

export default (state, action) => {
    const { index } = action;

    switch (action.type) {
        case ActionTypes.CHANGE_PAGE:
            return {"currPageIndex": index};
        default:
            return state;
    }
}

