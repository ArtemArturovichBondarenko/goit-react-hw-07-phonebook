import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from '@reduxjs/toolkit';
import contactAction from './action';

const addContact = (state, action) => {
  // if (state.some(({ name }) => name === action.payload.name)) {
  //   alert(`is already exist`);
  //   return [...state];
  // }
  return [...state, action.payload];
};

const deleteContact = (state, { payload: id }) => {
  return state.filter(contact => contact.id !== id);
};

const contacts = createReducer([], {
  [contactAction.fetchContactSuccess]: (state, action) => action.payload,
  [contactAction.addContactSuccess]: addContact,
  [contactAction.removeContactSuccess]: deleteContact,
});

const filter = createReducer('', {
  [contactAction.contactFilter]: (_, { payload: filter }) => filter,
});

const loading = createReducer(false, {
  [contactAction.addContactRequest]: () => true,
  [contactAction.addContactSuccess]: () => false,
  [contactAction.addContactError]: () => false,
  [contactAction.fetchContactRequest]: () => true,
  [contactAction.fetchContactSuccess]: () => false,
  [contactAction.fetchContactError]: () => false,
  [contactAction.removeContactRequest]: () => true,
  [contactAction.removeContactSuccess]: () => false,
  [contactAction.removeContactError]: () => false,
});

export default combineReducers({
  contacts,
  filter,
  loading,
});
