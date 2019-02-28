import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { StyledAuth } from 'styles/mixins';
import { AUTH_BG } from 'styles/variables';

export default class ResetPassword extends Component {
  state = {
    password: '',
    passConfirm: '',
    error: null,
    message: '',
  };

  static propTypes = {};

  render() {
    return <StyledAuth background={AUTH_BG}>RESET PASSWORD</StyledAuth>;
  }
}
