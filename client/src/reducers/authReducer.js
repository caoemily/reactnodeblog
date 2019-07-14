import constants from '../constants/actionTypes';

var initialState = {
     userID: '',
     isSignedIn: null
};

export default (state=initialState, action) => {

    switch(action.type) {
        case constants.SIGN_IN: 
            return {...state, isSignedIn:true, userID:action.payload};
        case constants.SIGN_OUT:
            return {...state, isSignedIn:false, userID:''};
        default:
            return state;
    }
};
