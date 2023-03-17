import { RESET_REDUX } from './actionTypes';

export const resetReduxState = (reducerKey, key, value) => ({
  type: RESET_REDUX,
  payload: { reducerKey, key, value },
});
