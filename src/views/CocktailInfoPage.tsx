import { useEffect, useState, type ReactElement } from "react";
import type { ICocktail } from "../../types";
import { useParams } from "react-router";
import { fetchCocktailById } from "../../api";

export const CocktailInfoPage = (): ReactElement => {
  const { id } = useParams();
  const [cocktail, setCocktail] = useState<ICocktail | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;
    setLoading(true);
    fetchCocktailById(id)
      .then((data) => setCocktail(data))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) return <p>Loading cocktail...</p>;
  if (!cocktail) return <p>No cocktail found</p>;

  const { category, thumbnail, tags, ingredients, glass } = cocktail;
  return (
    <div id="cocktail-info-container">
      <p>{category}</p>
      <img src={thumbnail} alt="cocktail image" />
      <div className="tags-container">
        {tags.map((tag) => (
          <span key={tag} className="tag">
            {tag}
          </span>
        ))}
      </div>
      <div className="ingredient-container">
        {ingredients.map((ingredient) => (
          <span key={ingredient.ingredient} className="ingredient">
            {ingredient.ingredient}
            {ingredient.measure}
          </span>
        ))}
      </div>
      <p>{glass}</p>
    </div>
  );
};
