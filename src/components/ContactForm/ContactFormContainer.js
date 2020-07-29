import { connect } from 'react-redux';
import ContactForm from './ContactForm'
import contactOperations from '../../redux_toolkit/modules/contacts/operations'


const mapDispatchToProps = {
   addContact: contactOperations.addContact
};

export default connect(null, mapDispatchToProps)(ContactForm);
