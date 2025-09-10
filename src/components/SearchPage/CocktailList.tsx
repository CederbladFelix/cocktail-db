import { type ReactElement, type ReactNode } from "react";
import type { ICocktail } from "../../../types";
import { Link } from "react-router";
import { Pagination } from "./Pagination/Pagination";

interface CocktailListProps {
  cocktails: ICocktail[];
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
}

export const CocktailList = ({
  cocktails,
  page,
  setPage,
}: CocktailListProps): ReactElement => {
  const pageSize = 10;
  const pageCount: number = Math.ceil(cocktails.length / pageSize);

  const handleOnNext = () =>
    setPage((previous) => Math.min(previous + 1, pageCount - 1));
  const handleOnPrevious = () =>
    setPage((previous) => Math.max(previous - 1, 0));

  const renderCocktails = (): ReactNode => {
    const start = page * pageSize;
    const end = start + pageSize;
    return cocktails
      .map(({ id, name }) => (
        <li key={id}>
          <Link to={`/cocktail/${id}`} className="cocktail-link">
            {name}
          </Link>
        </li>
      ))
      .slice(start, end);
  };

  return (
    <ul className="search-by-name-cocktail-list">
      <Pagination
        currentPage={page + 1}
        next={handleOnNext}
        pageCount={pageCount}
        previous={handleOnPrevious}
      />
      {renderCocktails()}
    </ul>
  );
};
