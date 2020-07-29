import React, { useEffect } from 'react';
import ContactForm from './ContactForm/ContactFormContainer';
import ContactList from './ContactList/ContactListContainer';
import Filter from './Filter/FilterContainer';
import style from './App.module.css';

const App = ({ isLoadingContacts, onFetchContacts }) => {
  useEffect(() => {
    onFetchContacts();
  }, []);

  return (
    <div className={style.div}>
      <h1 className={style.h1}>Phonebook</h1>
      {isLoadingContacts && <h1>LOADING...</h1>}
      <ContactForm />
      <Filter />
      <ContactList />
    </div>
  );
};

export default App;
