import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { routerMiddleware } from 'connected-react-router';
import { createBrowserHistory } from 'history';
import rootReducer from 'reducers/root.reducer';
import { logger } from 'redux-logger';

export const history = createBrowserHistory();
const middlewares = [thunk, routerMiddleware(history)];

let devTool = null;

if (process.env.NODE_ENV === 'development') {
  devTool = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : null;
  middlewares.push(logger);
}
const composeEnhancers = devTool || compose;

export default createStore(
  rootReducer(history),
  composeEnhancers(applyMiddleware(...middlewares)),
);
