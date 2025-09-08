import { useEffect, useState } from "react";
import { fetchRandomCocktail } from "../../api";
import type { ICocktail } from "../../types";
import { Card } from "../components/Card";
import { RandomCocktailButton } from "../components/LandingPage/RandomCocktailButton";
import { Loader } from "../components/Loader";

export const LandingPage = () => {
  const [cocktail, setCocktail] = useState<ICocktail | null>(null);
  const [loading, setLoading] = useState(true);

  const loadRandomCocktail = async () => {
    setLoading(true);
    try {
      const randomCocktail = await fetchRandomCocktail();
      setCocktail(randomCocktail);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadRandomCocktail();
  }, []);

  return (
    <div className="landing-page-container">
      {loading && <Loader />}
      {!loading && cocktail && (
        <>
          <Card
            name={cocktail.name}
            imageUrl={cocktail.thumbnail}
            id={cocktail.id}
          />
          <RandomCocktailButton onClick={loadRandomCocktail} />
        </>
      )}
    </div>
  );
};
