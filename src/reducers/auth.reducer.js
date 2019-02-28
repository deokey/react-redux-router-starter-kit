import { handleActions } from 'redux-actions';
import { authPending, authFailure, authSuccess } from 'actions/auth';
import { INITIAL_ASYNC_STATE } from 'utils/constants';

const defaultState = {
  login: INITIAL_ASYNC_STATE,
  logout: INITIAL_ASYNC_STATE,
  resetPassword: INITIAL_ASYNC_STATE,
  forgotPassword: INITIAL_ASYNC_STATE,
};

// https://redux-actions.js.org/

const AuthReducer = handleActions(
  {
    [authSuccess]: (state, { payload: { namespace, response } }) => {
      return {
        ...state,
        [namespace]: {
          ...state[namespace],
          loading: false,
          payload: response,
          message: response.message,
        },
      };
    },

    [authFailure]: (state, { payload: { namespace, error } }) => {
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

    [authPending]: (state, { payload: { namespace } }) => {
      return {
        ...state,
        [namespace]: {
          ...state[namespace],
          loading: true,
        },
      };
    },
  },
  defaultState,
);

export default AuthReducer;
