import css from './ContactListItem.module.css';

export const ContactListItem = ({ contact, handleDelete }) => {
  return (
    <li className={css.item} key={contact.id}>
      <p className={css.text}>
        {contact.name}: {contact.number}
      </p>
      <button
        className={css.deleteButton}
        onClick={() => handleDelete(contact.id)}
      >
        Delete
      </button>
    </li>
  );
};
