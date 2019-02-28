import { createActions } from 'redux-actions';
import Storage from 'utils/storage';
import Fetcher from 'utils/fetcher';
import { goTo, setToken } from './app';
import { errorNetwork } from 'utils/errorHandler';

export const { authPending, authFailure, authSuccess } = createActions({
  authPending: ({ namespace }) => ({ namespace }),
  authFailure: ({ namespace, error }) => ({ namespace, error }),
  authSuccess: ({ namespace, response }) => ({ namespace, response }),
});

export const login = userData => async dispatch => {
  try {
    dispatch(authPending({ namespace: 'login' }));
    const fetcher = new Fetcher();
    const resp = await fetcher.post(`URL_HERE/login`, userData);
    dispatch(authSuccess({ namespace: 'login' }));
    dispatch(setToken(resp));
    Storage.setElement('token', resp);
    dispatch(goTo('/'));
  } catch (err) {
    const error = errorNetwork(err);
    dispatch(authFailure({ namespace: 'login', error }));
  }
};

export const logout = () => async (dispatch, getState) => {
  try {
    dispatch(authPending({ namespace: 'logout' }));
    await Storage.removeElement('token');
    dispatch(authSuccess({ namespace: 'logout' }));
    dispatch(setToken(''));
    dispatch(goTo('/login'));
  } catch (err) {
    const error = errorNetwork(err);
    dispatch(authFailure({ namespace: 'logout', error }));
  }
};

export const forgot = mail => async dispatch => {
  try {
    dispatch(authPending({ namespace: 'forgotPassword' }));
    const fetcher = new Fetcher();
    const response = await fetcher.post(`URL_HERE/forgot_password`, {
      email: mail,
    });
    dispatch(authSuccess({ namespace: 'forgotPassword', response }));
  } catch (err) {
    const error = errorNetwork(err);
    dispatch(authFailure({ namespace: 'forgotPassword', error }));
  }
};

export const resetPassword = (request, token) => async dispatch => {
  try {
    dispatch(authPending({ namespace: 'resetPassword' }));
    const fetcher = new Fetcher();
    const response = await fetcher.post(`URL_HERE/forgot_password`, request);
    dispatch(authSuccess({ namespace: 'resetPassword', response }));
  } catch (err) {
    const error = errorNetwork(err);
    dispatch(authFailure({ namespace: 'resetPassword', error }));
  }
};
