import { combineReducers } from 'redux';
import { RESET_REDUX, EMPTY_STORE_STATE } from '../common/actionTypes';

const appReducer = combineReducers({});

const rootReducer = (state, action) => {
  if (action.type === EMPTY_STORE_STATE) {
    state = {};
  }
  if (action.type === RESET_REDUX) {
    if (action.payload.reducerKey && action.payload.key) {
      const { reducerKey, key, value } = action.payload;
      state = {
        ...state,
        [reducerKey]: { ...state[reducerKey], [key]: value },
      };
    }
  }
  return appReducer(state, action);
};

export default rootReducer;
