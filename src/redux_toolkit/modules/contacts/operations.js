import axios from 'axios';
import contactAction from './action';

axios.defaults.baseURL = 'http://localhost:2005';

const addContact = contact => dispatch => {
  dispatch(contactAction.addContactRequest());

  axios
    .post('/contacts', contact)
    .then(response => dispatch(contactAction.addContactSuccess(response.data)))
    .catch(error => dispatch(contactAction.addContactError(error)));
};

const fetchContacts = () => dispatch => {
  dispatch(contactAction.fetchContactRequest());

  axios
    .get('/contacts')
    // .then(response => console.log(response.data))
    .then(({ data }) => dispatch(contactAction.fetchContactSuccess(data)))
    .catch(error => dispatch(contactAction.fetchContactError(error)));
};

const removeTask = id => dispatch => {
  dispatch(contactAction.removeContactRequest());

  axios
    .delete(`/contacts/${id}`)
    .then(() => dispatch(contactAction.removeContactSuccess(id)))
    .catch(error => dispatch(contactAction.removeContactError(error)));
};

export default {
  addContact,
  fetchContacts,
  removeTask,
};
