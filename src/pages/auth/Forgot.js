import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { StyledAuth } from 'styles/mixins';
import { AUTH_BG } from 'styles/variables';

export default function Forgot(props) {
  const [email, setEmail] = useState('');
  const [error, setError] = useState(null);
  // const [message, setMessage] = useState(props.message);

  const onChangeEmail = ({ target: { value } }) => {
    setEmail(value);
  };

  const cleanErrorform = () => {
    if (error) setError(null);
  };

  return (
    <StyledAuth background={AUTH_BG}>
      FORGOT
    </StyledAuth>
  );
}

Forgot.propTypes = {
  forgot: PropTypes.func.isRequired,
  message: PropTypes.string,
  loading: PropTypes.bool,
};
