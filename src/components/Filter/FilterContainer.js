import { connect } from 'react-redux';
import Filter from './Filter'
import contactsSelectors from '../../redux_toolkit/modules/contacts/contactsSelectors';
import contactAction from '../../redux_toolkit/modules/contacts/action';

const mapStateToProps = state => ({
  contact: contactsSelectors.getFilter(state),
});
const mapDispatchToProps = { contactFilter: contactAction.contactFilter };

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
