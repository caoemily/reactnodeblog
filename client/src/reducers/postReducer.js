import constants from '../constants/actionTypes';

var initialState = {
    posts: [],
    postItem: {}
};

export default (state=initialState, action) => {

    switch(action.type) {
        case constants.POSTITEM_RECEIVED: 
            return {...state, posts:action.payload};
        case constants.POSTS_RECEIVED:
            return {...state, postItem:action.payload};
        default:
            return state;
    }
};
