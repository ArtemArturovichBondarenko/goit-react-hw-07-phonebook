import { connect } from 'react-redux';
import Contact from './Contact';
import contactOperation from '../../redux_toolkit/modules/contacts/operations';
import contactsSelectors from '../../redux_toolkit/modules/contacts/contactsSelectors';

const mapStateToProps = (state, ownProps) => {
  const contact = contactsSelectors.getContactsById(state, ownProps.id);

  return {
    ...contact,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  onDeleteContact: () => dispatch(contactOperation.removeTask(ownProps.id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Contact);