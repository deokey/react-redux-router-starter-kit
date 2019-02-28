import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';

export class HomeContainer extends Component {
  static propTypes = {};

  render() {
    return <div>HOME</div>;
  }
}

const mapStateToProps = state => ({});

export default connect(
  mapStateToProps,
  {},
)(HomeContainer);
