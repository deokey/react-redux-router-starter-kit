import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StyledAuth } from 'styles/mixins';
import { AUTH_BG } from 'styles/variables';

export default class ResetPassword extends Component {
  state = {
    password: '',
    passConfirm: '',
    error: null,
    message: '',
  };

  static propTypes = {
    resetPassword: PropTypes.func.isRequired,
    message: PropTypes.string,
    match: PropTypes.object.isRequired,
    loading: PropTypes.bool,
  };

  render() {
    return (
      <StyledAuth background={AUTH_BG}>
        RESET PASSWORD
      </StyledAuth>
    );
  }
}
