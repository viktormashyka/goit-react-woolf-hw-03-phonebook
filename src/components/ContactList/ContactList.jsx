import { ContactListItem } from 'components/ContactListItem/ContactListItem';
import css from './ContactList.module.css';

export const ContactList = ({ filteredContacts, handleDelete }) => {
  return (
    <ul className={css.list}>
      {filteredContacts.map(contact => (
        <ContactListItem contact={contact} handleDelete={handleDelete} />
      ))}
    </ul>
  );
};
