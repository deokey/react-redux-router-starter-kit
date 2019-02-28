import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import PrivateRoute from './routes/PrivateRoute';
import LoginContainer from './containers/auth/Login.container';
import ForgotContainer from './containers/auth/Forgot.container';
import ResetPasswordContainer from './containers/auth/ResetPassword.container';
import RegisterContainer from './containers/user/Register.container';
import OverviewContainer from 'containers/overview/Overview.container';
import store, { history } from './store';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <React.Fragment>
            <Switch>
              <Route exact path="/login" component={LoginContainer} />
              <Route
                exact
                path="/auth/recovery/:token"
                component={ResetPasswordContainer}
              />
              <Route exact path="/forgot" component={ForgotContainer} />
              <PrivateRoute exact path="/" component={OverviewContainer} />
              <PrivateRoute path="/register" component={RegisterContainer} />
              <PrivateRoute path="*" render={ ( ) => <div> NOT FOUND PAGE</div>} />
            </Switch>
          </React.Fragment>
        </ConnectedRouter>
      </Provider>
    );
  }
}

export default App;
