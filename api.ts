import type { ICocktail } from "./types";
import { mapRawCocktailData } from "./mapRawCocktailData";

const BASE_URL = "https://www.thecocktaildb.com/api/json/v1/1";

export const fetchRandomCocktail = async (): Promise<ICocktail> => {
  const response = await fetch(`${BASE_URL}/random.php`);

  if (!response.ok) {
    throw new Error(`Failed to fetch random cocktail: ${response.status}`);
  }

  const data = await response.json();

  if (!Array.isArray(data.drinks)) {
    throw new Error("Unexpected API response");
  }

  return mapRawCocktailData(data.drinks[0]);
};
