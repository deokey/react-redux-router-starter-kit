import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StyledAuth } from 'styles/mixins';
import { AUTH_BG } from 'styles/variables';

export default class Register extends Component {
  state = {
    email: '',
    password: '',
    passConfirm: '',
    admin: false,
    error: null,
  };

  static propTypes = {
    register: PropTypes.func.isRequired,
    httpError: PropTypes.string,
    loading: PropTypes.bool,
    message: PropTypes.string,
  };

  render() {
    return (
      <StyledAuth background={AUTH_BG}>
        REGISTER
      </StyledAuth>
    );
  }
}
