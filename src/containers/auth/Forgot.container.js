import { connect } from 'react-redux';
import { forgot } from 'actions/auth';
import Forgot from 'pages/auth/Forgot';

const mapStateToProps = ({ auth }) => ({
  httpError: auth.error ? auth.error.message : null,
  loadingL: auth.loading,
});

// internally, React-Redux calls bindActionCreators
// to bind the action creators to the dispatch of your store
// bindActionCreators(mapDispatchToProps, dispatch)a
export default connect(
  mapStateToProps,
  { forgot },
)(Forgot);
