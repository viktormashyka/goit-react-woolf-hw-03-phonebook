import css from './Filter.module.css';

export const Filter = ({ filter, onChange }) => {
  return (
    <label className={css.label}>
      Find contact by name
      <input
        className={css.input}
        type="text"
        placeholder="Enter name"
        name="filter"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        value={filter}
        onChange={onChange}
      />
    </label>
  );
};
