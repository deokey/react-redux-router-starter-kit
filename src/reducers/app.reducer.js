import Storage from 'utils/storage';

const defaultState = {
  token: null,
  lastRequest: '',
};

const AppReducer = (state = defaultState, action) => {
  switch (action.type) {
    case '@@INIT': {
      return { ...state, token: Storage.getElement('token') };
    }

    case 'SET_TOKEN': {
      return { ...state, token: action.payload };
    }

    case 'SET_LAST_REQUEST': {
      return {
        ...state,
        lastRequest: action.payload,
      };
    }

    default: {
      return state;
    }
  }
};

export default AppReducer;
