import type { ReactElement } from "react";
import { useLoaderData } from "react-router";
import type { LoaderCocktailData } from "../../types";
import { Spinner } from "../components/Spinner";

export const CocktailInfoPage = (): ReactElement => {
  const { cocktail, error } = useLoaderData() as LoaderCocktailData;

  if (error) {
    return <p className="error-message">{error}</p>;
  }

  if (!cocktail) {
    return <Spinner />;
  }

  const { thumbnail, name, category, tags, ingredients, glass } = cocktail;

  return (
    <div id="cocktail-info-container">
      <span className="img-container">
        <img src={thumbnail} alt="cocktail image" />
      </span>
      <h2>{name}</h2>
      <h3>{category}</h3>
      <div className="tags-container">
        {tags.map((tag) => (
          <span key={tag} className="tag">
            {tag}
          </span>
        ))}
      </div>
      <div className="ingredient-container">
        {ingredients.map(({ ingredient, measure }) => (
          <div key={ingredient} className="ingredient">
            <p>{ingredient}</p>
            <p>{measure}</p>
          </div>
        ))}
      </div>
      <p>Preferred glass: {glass}</p>
    </div>
  );
};
