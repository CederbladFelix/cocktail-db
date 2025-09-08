import type { ICocktail } from "./types";
import { mapRawCocktailData } from "./mapRawCocktailData";

const BASE_URL = "https://www.thecocktaildb.com/api/json/v1/1";

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const fetchRandomCocktail = async (): Promise<ICocktail> => {
  await sleep(1000);
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

export const fetchCocktailById = async (id: string): Promise<ICocktail> => {
  await sleep(1000);
  const response = await fetch(`${BASE_URL}/lookup.php?i=${id}`);

  if (!response.ok) {
    throw new Error(
      `Failed to fetch cocktail with id ${id}: ${response.status}`
    );
  }

  const data = await response.json();

  if (!Array.isArray(data.drinks) || data.drinks.length === 0) {
    throw new Error(`No cocktail found with id ${id}`);
  }

  return mapRawCocktailData(data.drinks[0]);
};
