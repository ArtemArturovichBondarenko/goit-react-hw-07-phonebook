import { connect } from 'react-redux';
import ContactList from './ContactList';
import contactsSelectors from '../../redux_toolkit/modules/contacts/contactsSelectors';

const mapStateToProps = state => ({
  contacts: contactsSelectors.getVisibleContacts(state),
});

export default connect(mapStateToProps)(ContactList);
