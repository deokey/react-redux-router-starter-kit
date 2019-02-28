import { connect } from 'react-redux';
import { resetPassword } from 'actions/auth';
import RestPassword from 'pages/auth/ResetPassword';

const mapStateToProps = ({ auth }) => ({
  httpError: auth.error ? auth.error.message : null,
  loading: auth.loading,
});

// internally, React-Redux calls bindActionCreators
// to bind the action creators to the dispatch of your store
// bindActionCreators(mapDispatchToProps, dispatch)
export default connect(
  mapStateToProps,
  { resetPassword },
)(RestPassword);
