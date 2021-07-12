import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import contactsActions from '../../redux/contacts/contacts-actions';

import './ContactsList.css';

const ContactsList = ({ contacts, onDeleteContact }) => (
  <ul className="contacts__list">
    {contacts.map(({ id, name, number }) => (
      <li className="contacts__list-item" key={id}>
        <p className="contacts__list-name">{name}</p>
        <p className="contacts__list-number">{number}</p>

        <button
          className="contacts__list-button"
          onClick={() => onDeleteContact(id)}
        >
          Delete
        </button>
      </li>
    ))}
  </ul>
);

ContactsList.propTypes = {
  contacts: PropTypes.array.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  contacts: state.contacts.items,
});

const mapDaspatchToProps = dispatch => ({
  onDeleteContact: id => dispatch(contactsActions.deleteContact(id)),
});

export default connect(mapStateToProps, mapDaspatchToProps)(ContactsList);
