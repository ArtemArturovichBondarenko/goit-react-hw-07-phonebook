import { createSelector } from '@reduxjs/toolkit';

const getContacts = state => state.contact.contacts;

const getLoading = state => state.contact.loading;

const getFilter = state => state.contact.filter;

const getVisibleContacts = createSelector(
  [getContacts, getFilter],
  (contacts, filter) => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase()),
    );
  },
);

const getContactsById = createSelector(
  [getContacts, (state, contactId) => contactId],
  (contacts, contactId) => contacts.find(contact => contact.id === contactId),
);

export default {
  getLoading,
  getFilter,
  getVisibleContacts,
  getContactsById,
};
