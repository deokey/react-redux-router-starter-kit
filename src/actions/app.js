import { push } from 'connected-react-router';

export const goTo = route => dispatch => {
  dispatch(push(route));
};

export function setToken(payload) {
  return {
    type: 'SET_TOKEN',
    payload,
  };
}

export const setLastRequest = url => dispatch => {
  dispatch({
    type: 'SET_LAST_REQUEST',
    payload: url,
  });
};
