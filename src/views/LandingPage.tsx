import { useEffect, useState } from "react";
import { fetchRandomCocktail } from "../../api";
import type { ICocktail } from "../../types";
import { Card } from "../components/LandingPage/Card";
import { RandomCocktailButton } from "../components/LandingPage/RandomCocktailButton";
import { Link } from "react-router";

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

  if (loading) return <p>Loading a random cocktail...</p>;
  if (!cocktail) return <p>No cocktail found</p>;

  return (
    <div className="landing-page-container">
      <Card name={cocktail.name} imageUrl={cocktail.thumbnail} />
      <RandomCocktailButton onClick={loadRandomCocktail} />
      <Link to={`/cocktail/${cocktail.id}`} className="see-more-link">See more</Link>
    </div>
  );
};
