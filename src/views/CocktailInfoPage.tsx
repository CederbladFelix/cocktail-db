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

  const { name, category, thumbnail, tags, ingredients, glass } = cocktail;
  return (
    <div id="cocktail-info-container">
      <h2>{name}</h2>
      <span className="img-container">
        <img src={thumbnail} alt="cocktail image" />
      </span>
      <h3>{category}</h3>
      <div className="tags-container">
        {tags.map((tag) => (
          <span key={tag} className="tag">
            {tag}
          </span>
        ))}
      </div>
      <div className="ingredient-container">
        {ingredients.map((ingredient) => (
          <div key={ingredient.ingredient} className="ingredient">
            <p>{ingredient.ingredient}</p>
            <p>{ingredient.measure}</p>
          </div>
        ))}
      </div>
      <p>Prefered glass: {glass}</p>
    </div>
  );
};
