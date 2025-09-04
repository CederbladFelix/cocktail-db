import type { ReactElement } from "react";

interface RandomCocktailButtonProps {
  onClick: () => void;
}

export const RandomCocktailButton = ({
  onClick,
}: RandomCocktailButtonProps): ReactElement => {
  return (
    <div className="random-cocktail-button-container">
      <button id="random-cocktail-button" onClick={onClick}>
        Get new Cocktail
      </button>
    </div>
  );
};
