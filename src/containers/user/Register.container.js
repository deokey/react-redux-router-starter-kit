import { connect } from 'react-redux';
import { register } from 'actions/user';
import Register from 'pages/user/Register';

const mapStateToProps = ({ user }) => ({
  httpError: user.register.error ? user.register.error.message : null,
  loading: user.register.loading,
  successMessage: user.register.payload
    ? `User created with the email: ${user.register.payload.email}`
    : '',
});

// internally, React-Redux calls bindActionCreators
// to bind the action creators to the dispatch of your store
// bindActionCreators(mapDispatchToProps, dispatch)
export default connect(
  mapStateToProps,
  { register },
)(Register);
