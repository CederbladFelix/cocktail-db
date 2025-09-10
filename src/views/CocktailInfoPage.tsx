import type { ReactElement } from "react";
import { useLoaderData } from "react-router";
import type { LoaderCocktailData } from "../../types";
import { Spinner } from "../components/Spinner";

export const CocktailInfoPage = (): ReactElement => {
  const { cocktail, error } = useLoaderData() as LoaderCocktailData;
  return error ? (
    <p className="error-message">{error}</p>
  ) : cocktail ? (
    <div id="cocktail-info-container">
      <span className="img-container">
        <img src={cocktail.thumbnail} alt="cocktail image" />
      </span>
      <h2>{cocktail.name}</h2>
      <h3>{cocktail.category}</h3>
      <div className="tags-container">
        {cocktail.tags.map((tag) => (
          <span key={tag} className="tag">
            {tag}
          </span>
        ))}
      </div>
      <div className="ingredient-container">
        {cocktail.ingredients.map((ingredient) => (
          <div key={ingredient.ingredient} className="ingredient">
            <p>{ingredient.ingredient}</p>
            <p>{ingredient.measure}</p>
          </div>
        ))}
      </div>
      <p>Preferred glass: {cocktail.glass}</p>
    </div>
  ) : (
    <Spinner />
  );
};
