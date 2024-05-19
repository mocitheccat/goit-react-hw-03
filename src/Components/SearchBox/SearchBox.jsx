import css from "./SearchBox.module.css";

const SearchBox = ({ value, onFilter }) => {
  return (
    <div className={css.searchbox}>
      <p>
        Find contact by name <span className={css.searchIcon}>🔎</span>
      </p>
      <input
        className={css.searchInput}
        type="text"
        value={value}
        onChange={(e) => onFilter(e.target.value)}
      />
    </div>
  );
};

export default SearchBox;
