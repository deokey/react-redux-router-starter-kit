import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import AppReducer from './app.reducer';
import AuthReducer from './auth.reducer';
import UserReducer from './user.reducer';

export default history =>
  combineReducers({
    router: connectRouter(history),
    user: UserReducer,
    app: AppReducer,
    auth: AuthReducer,
  });
