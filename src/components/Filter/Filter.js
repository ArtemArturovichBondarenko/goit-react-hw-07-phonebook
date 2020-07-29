import React from 'react';
import PropTypes from 'prop-types';
import style from '../ContactForm/ContactForm.module.css';

const Filter = ({ filter, contactFilter }) => {
  return (
    <div className={style.form}>
      <p className={style.p}>Find contacts by name</p>
      <input
        type="text"
        className={style.input}
        value={filter}
        onChange={e => contactFilter(e.target.value)}
      ></input>
    </div>
  );
};

Filter.propTypes = {
  filter: PropTypes.string,
  contactFilter: PropTypes.func.isRequired,
};

export default Filter;
