import { createActions } from 'redux-actions';
import Fetcher from 'utils/fetcher';
import { userUrl } from 'utils/constants';
import { errorNetwork } from 'utils/errorHandler';

export const { userPending, userFailure, userSuccess } = createActions({
  userPending: ({ namespace }) => ({ namespace }),
  userSuccess: ({ namespace, response }) => ({ namespace, response }),
  userFailure: ({ namespace, error }) => ({ namespace, error }),
});

export const register = userData => async dispatch => {
  const namespace = 'register';
  try {
    dispatch(userPending({ namespace }));
    const fetcher = new Fetcher();
    const response = await fetcher.post(userUrl, userData);
    dispatch(userSuccess({ namespace, response }));
  } catch (err) {
    const error = errorNetwork(err);
    dispatch(userFailure({ namespace, error }));
  }
};

export const getAll = () => async dispatch => {
  const namespace = 'all';
  try {
    dispatch(userPending({ namespace }));
    const fetcher = new Fetcher();
    const { rows } = await fetcher.get(userUrl);
    dispatch(userSuccess({ namespace, response: rows }));
    return rows;
  } catch (err) {
    const error = errorNetwork(err);
    dispatch(userFailure({ namespace, error }));
  }
};

export const deleteUser = id => async (dispatch, getState) => {
  const namespace = 'delete';
  try {
    dispatch(userPending({ namespace }));
    const fetcher = new Fetcher();
    const response = await fetcher.remove(`${userUrl}/${id}`);
    dispatch(userSuccess({ namespace, response }));
    dispatch(getAll());
  } catch (err) {
    const error = errorNetwork(err);
    dispatch(userFailure({ namespace, error }));
  }
};

export const getMe = () => async dispatch => {
  const namespace = 'me';
  try {
    dispatch(userPending({ namespace }));
    const fetcher = new Fetcher();
    const response = await fetcher.get(`${userUrl}/me`);
    dispatch(userSuccess({ namespace, response }));
  } catch (err) {
    const error = errorNetwork(err);
    dispatch(userFailure({ namespace, error }));
  }
};

export const contact = userContact => async dispatch => {
  const namespace = 'contact';
  try {
    dispatch(userPending({ namespace }));
    const fetcher = new Fetcher();
    const response = await fetcher.post(`${userUrl}/contact`, userContact);
    dispatch(userSuccess({ namespace, response }));
  } catch (err) {
    const error = errorNetwork(err);
    dispatch(userFailure({ namespace, error }));
  }
};
