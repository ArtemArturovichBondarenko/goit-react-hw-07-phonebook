import React from 'react';
import PropTypes from 'prop-types';
import Contact from '../Contact/ContactContainer';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import slideTransition from '../../transitions/slide_250ms.module.css';
import style from './ContactList.module.css';

const ContactList = ({ contacts }) => (
  <TransitionGroup component="ul">
    {contacts.map(contact => (
      <CSSTransition
        key={contact.id}
        timeout={250}
        unmountOnExit
        classNames={slideTransition}
      >
        <li key={contact.id} className={style.li}>
          <Contact key={contact.id} id={contact.id} />
        </li>
      </CSSTransition>
    ))}
  </TransitionGroup>
);

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
};

export default ContactList;
