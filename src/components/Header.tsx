import type { ReactElement } from "react";
import { Link } from "react-router";

export const Header = (): ReactElement => {
  return (
    <header className="header">
      <h1>CocktailDB</h1>
      <nav>
        <Link to={`/`} className="header-link">
          Random Cocktail
        </Link>
        <Link to={`/search`} className="header-link">
          Search
        </Link>
      </nav>
    </header>
  );
};
