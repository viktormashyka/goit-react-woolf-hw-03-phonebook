import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import css from './App.module.css';
import ContactForm from 'components/ContactForm/ContactForm';
import { Filter } from 'components/Filter/Filter';
import { ContactList } from 'components/ContactList/ContactList';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  changeFilter = evt => {
    this.setState({ filter: evt.currentTarget.value });
  };

  filterContacts = () => {
    return this.state.contacts.filter(contact =>
      contact.name
        .toLocaleLowerCase()
        .includes(this.state.filter.toLocaleLowerCase())
    );
  };

  handleDelete = id => {
    this.setState(prev => ({
      contacts: prev.contacts.filter(item => item.id !== id),
    }));
  };

  onAddContact = newContact => {
    if (newContact.name.trim() === '' || newContact.number.trim() === '') {
      alert('Please enter both name and number.');
      return;
    }
    if (
      this.state.contacts.some(
        contact =>
          contact.name.toLocaleLowerCase() ===
          newContact.name.toLocaleLowerCase()
      )
    ) {
      alert(`Contact "${newContact.name}" is already in contacts`);
      return;
    }

    this.setState(prevState => ({
      contacts: [...prevState.contacts, { ...newContact, id: nanoid() }],
    }));
  };

  render() {
    const { filter, contacts } = this.state;
    const filteredContacts = this.filterContacts();
    return (
      <div className={css.container}>
        <h1 className={css.title}>Phonebook</h1>
        <ContactForm contacts={contacts} onAddContact={this.onAddContact} />

        <h2 className={css.subtitle}>Contacts</h2>
        <Filter filter={filter} onChange={this.changeFilter} />
        <ContactList
          filteredContacts={filteredContacts}
          handleDelete={this.handleDelete}
        />
      </div>
    );
  }
}

export { App };
