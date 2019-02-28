import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Redirect, Route } from 'react-router-dom';
import { connect } from 'react-redux';

class PrivateRoute extends Component {
  static propTypes = {
    component: PropTypes.func.isRequired || PropTypes.element.isRequired,
  };

  routeRender = () => {
    const Component = this.props.component;
    return this.props.isAuthenticated ? (
      <Component {...this.props} />
    ) : (
      <Redirect to="/login" />
    );
  };

  render() {
    const routeProps = { ...this.props };
    delete routeProps.component;
    return <Route {...routeProps} render={() => this.routeRender()} />;
  }
}
const mapStateToProps = ({ user, app }) => ({
  isAuthenticated: !!app.token,
});
export default connect(mapStateToProps)(PrivateRoute);
