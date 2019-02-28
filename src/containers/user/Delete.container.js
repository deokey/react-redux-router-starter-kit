import { connect } from 'react-redux';
import { deleteUser, getAll, getMe } from 'actions/user';
import Delete from 'pages/user/Delete/Delete';

const mapStateToProps = ({ user }) => ({
  httpError: user.all.error ? user.all.error.message : null,
  loadingUsers: user.all.loading,
  loading: user.all.loading,
  users: user.all.payload,
  me: user.me.payload,
  message: user.delete.message,
});

// internally, React-Redux calls bindActionCreators
// to bind the action creators to the dispatch of your store
// bindActionCreators(mapDispatchToProps, dispatch)
export default connect(
  mapStateToProps,
  { deleteUser, getAllUsers: getAll, getMe },
)(Delete);
