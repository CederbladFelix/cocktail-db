import { useEffect, useState, type ReactElement } from "react";
import type { ICocktail } from "../../types";
import { useParams } from "react-router";
import { fetchCocktailById } from "../../api";
import { Loader } from "../components/Loader";

export const CocktailInfoPage = (): ReactElement => {
  const { id } = useParams();
  const [cocktail, setCocktail] = useState<ICocktail | null>(null);
  const [loading, setLoading] = useState(true);

  const loadCocktailById = async () => {
    if (!id) return;
    setLoading(true);
    fetchCocktailById(id)
      .then((cocktail) => setCocktail(cocktail))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    loadCocktailById();
  }, [id]);

  return (
    <div id="cocktail-info-container">
      {loading && <Loader />}
      {!loading && cocktail && (
        <>
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
        </>
      )}
    </div>
  );
};
