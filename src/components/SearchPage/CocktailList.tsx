import { useState, type ReactElement, type ReactNode } from "react";
import type { ICocktail } from "../../../types";
import { Link } from "react-router";
import { Pagination } from "../Pagination/Pagination";

interface CocktailListProps {
  cocktails: ICocktail[];
}

export const CocktailList = ({
  cocktails,
}: CocktailListProps): ReactElement => {
  const pageSize = 10;
  const [page, setPage] = useState<number>(0);
  const pageCount: number = Math.ceil(cocktails.length / pageSize);

  const handleOnNext = () =>
    setPage((previous) => Math.min(previous + 1, pageCount - 1));
  const handleOnPrevious = () =>
    setPage((previous) => Math.max(previous - 1, 0));

  const renderCocktails = (): ReactNode => {
    const start = page * pageSize;
    const end = start + pageSize;
    return cocktails
      .map((cocktail) => (
        <li key={cocktail.id}>
          <Link to={`/cocktail/${cocktail.id}`} className="cocktail-link">
            {cocktail.name}
          </Link>
        </li>
      ))
      .slice(start, end);
  };

  return (
    <ul className="search-by-name-cocktail-list">
      {renderCocktails()}{" "}
      <Pagination
        currentPage={page + 1}
        next={handleOnNext}
        pageCount={pageCount}
        previous={handleOnPrevious}
      />
    </ul>
  );
};
