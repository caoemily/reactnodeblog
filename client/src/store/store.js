import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { reducer } from 'redux-form';
import thunk from 'redux-thunk';
import postReducer from '../reducers/postReducer';
import authReducer from '../reducers/authReducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  combineReducers({
    postList: postReducer,
    auth: authReducer,
    form: reducer
  }),
  composeEnhancers (applyMiddleware(
    thunk
  ))
);

export default store;