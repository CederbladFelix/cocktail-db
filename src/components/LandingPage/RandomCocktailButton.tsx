import type { ReactElement } from "react";

interface RandomCocktailButtonProps {
  onClick: () => void;
}

export const RandomCocktailButton = ({
  onClick,
}: RandomCocktailButtonProps): ReactElement => {
  return (
    <button id="random-cocktail-button" onClick={onClick}>
      Get new Cocktail
    </button>
  );
};
