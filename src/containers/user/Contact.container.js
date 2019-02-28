import { connect } from 'react-redux';
import { contact } from 'actions/user';
import Contact from 'pages/contact/Contact';

const mapStateToProps = ({ user: { contact } }) => ({
  httpError: contact.error ? contact.error.message : null,
  loading: contact.loading,
});

// internally, React-Redux calls bindActionCreators
// to bind the action creators to the dispatch of your store
// bindActionCreators(mapDispatchToProps, dispatch)a
export default connect(
  mapStateToProps,
  { contact },
)(Contact);
