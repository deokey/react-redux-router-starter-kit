import { connect } from 'react-redux';
import { login } from 'actions/auth';
import { goTo } from 'actions/app';
import Login from 'pages/auth/Login';

const mapStateToProps = ({ auth, app }) => ({
  httpError: auth.login.error ? auth.login.error.message : null,
  isAuthenticated: !!app.token,
  loading: auth.login.loading,
});

// internally, React-Redux calls bindActionCreators
// to bind the action creators to the dispatch of your store
// bindActionCreators(mapDispatchToProps, dispatch)
export default connect(
  mapStateToProps,
  { login, goTo },
)(Login);
