import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StyledAuth } from 'styles/mixins';
import { AUTH_BG } from 'styles/variables';

export default class Login extends Component {
  static propTypes = {
    isAuthenticated: PropTypes.bool,
    goTo: PropTypes.func,
  };

  componentDidMount() {
    this.props.isAuthenticated && this.props.goTo('/');
  }

  render() {
    return <StyledAuth background={AUTH_BG}>LOGIN</StyledAuth>;
  }
}
