import type { ReactElement } from "react";

export const SearchPage = (): ReactElement => {
  return (
    <div className="search-page-container">
      <form className="search-form">
        <h2>Search for cocktail</h2>
        <div className="input-group">
          <input
            className="name-input"
            type="text"
            name="name-input"
            placeholder=" "
          />
          <label htmlFor="name-input" className="label">
            Name
          </label>
        </div>
      </form>
    </div>
  );
};
