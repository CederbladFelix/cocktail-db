import { useEffect, useState } from "react";
import { fetchRandomCocktail } from "../../api";
import type { ICocktail } from "../../types";
import { Card } from "../components/Card";
import { RandomCocktailButton } from "../components/LandingPage/RandomCocktailButton";

export const LandingPage = () => {
  const [cocktail, setCocktail] = useState<ICocktail | null>(null);
  const [loading, setLoading] = useState(true);

  const loadRandomCocktail = async () => {
    setLoading(true);
    try {
      const random = await fetchRandomCocktail();
      setCocktail(random);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadRandomCocktail();
  }, []);

  if (loading) return;
  if (!cocktail) return <p>No cocktail found</p>;

  return (
    <div className="landing-page-container">
      <Card
        name={cocktail.name}
        imageUrl={cocktail.thumbnail}
        id={cocktail.id}
      />
      <RandomCocktailButton onClick={loadRandomCocktail} />
    </div>
  );
};
