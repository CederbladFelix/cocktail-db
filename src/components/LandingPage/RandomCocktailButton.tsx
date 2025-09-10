import type { ReactElement } from "react";
import { useRevalidator } from "react-router";

export const RandomCocktailButton = (): ReactElement => {
  const revalidator = useRevalidator();

  return (
    <div className="random-cocktail-button-container">
      <button
        id="random-cocktail-button"
        onClick={() => revalidator.revalidate()}
      >
        Get new Cocktail
      </button>
    </div>
  );
};
