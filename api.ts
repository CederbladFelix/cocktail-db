import { ICocktail } from "./types";
import { mapRawCocktailData } from "./mapRawCocktailData";

const BASE_URL = "https://www.thecocktaildb.com/api/json/v1/1";

export const fetchAllCocktails = async (): Promise<ICocktail[]> => {
  const response = await fetch(`${BASE_URL}/search.php?s=`);

  if (!response.ok) {
    throw new Error(`Failed to fetch cocktails: ${response.status}`);
  }

  const data = await response.json();

  return (data.drinks ?? []).map(mapRawCocktailData);
};
