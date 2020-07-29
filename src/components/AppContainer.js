import { connect } from 'react-redux';
import App from './App'
import taskOperations from '../redux_toolkit/modules/contacts/operations';
import contactsSelectors from '../redux_toolkit/modules/contacts/contactsSelectors';


const mapStateToProps = state => ({
  isLoadingContacts: contactsSelectors.getLoading(state),
});

const mapDispatchToProps = {
  onFetchContacts: taskOperations.fetchContacts,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
