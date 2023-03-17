import { createStore, applyMiddleware, compose } from 'redux';
import promiseMiddleware from 'redux-promise-middleware';
import thunk from 'redux-thunk';
import persistState from 'redux-localstorage';
import rootReducer from './combineReducers';

const composeEnhancers =
  (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      trace: true,
      traceLimit: 100,
    })) ||
  compose;

const createStoreWithMiddleware = composeEnhancers(
  applyMiddleware(thunk, promiseMiddleware),
  persistState('login'),
  window.REDUX_DEVTOOLS_EXTENSION ? window.devToolsExtension() : (f) => f
)(createStore);

const store = createStoreWithMiddleware(rootReducer);

export default store;
