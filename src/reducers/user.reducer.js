import { handleActions } from 'redux-actions';
import { INITIAL_ASYNC_STATE } from 'utils/constants';
import { userFailure, userPending, userSuccess } from 'actions/user';

const defaultState = {
  me: INITIAL_ASYNC_STATE,
  contact: INITIAL_ASYNC_STATE,
  register: INITIAL_ASYNC_STATE,
  delete: INITIAL_ASYNC_STATE,
  all: { ...INITIAL_ASYNC_STATE, payload: [] },
};

// https://redux-actions.js.org/

const UserReducer = handleActions(
  {
    [userSuccess]: (state, { payload: { namespace, response } }) => {
      return {
        ...state,
        [namespace]: {
          ...state[namespace],
          payload: response,
          message: response.message,
          loading: false,
        },
      };
    },

    [userFailure]: (state, { payload: { namespace, error } }) => {
      return {
        ...state,
        [namespace]: {
          ...state[namespace],
          error,
          message: error.message,
          loading: false,
        },
      };
    },

    [userPending]: (state, { payload: { namespace } }) => {
      return {
        ...state,
        [namespace]: {
          ...state[namespace],
          error: null,
          loading: true,
          message: '',
        },
      };
    },
  },
  defaultState,
);

export default UserReducer;
