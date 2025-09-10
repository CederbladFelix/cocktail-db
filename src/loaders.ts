import type { LoaderFunctionArgs } from "react-router";
import {
  fetchCocktailById,
  fetchCocktailsByName,
  fetchRandomCocktail,
} from "../api";
import type { ICocktail } from "../types";

export const LoaderRandomCocktail = async (): Promise<{
  cocktail: ICocktail;
}> => {
  const cocktail = await fetchRandomCocktail();
  return { cocktail };
};

export const LoaderCocktailById = async ({
  params,
}: LoaderFunctionArgs): Promise<{ cocktail: ICocktail }> => {
  if (!params.id) {
    throw new Error("Cocktail ID is required");
  }
  const cocktail = await fetchCocktailById(params.id);
  return { cocktail };
};

export const LoaderCocktailByName = async ({ request }: LoaderFunctionArgs) => {
  const url = new URL(request.url);
  const name = url.searchParams.get("q");

  if (!name) {
    return { cocktails: [], error: null };
  }

  try {
    const cocktails = await fetchCocktailsByName(name);
    return { cocktails, error: null };
  } catch (error) {
    return { cocktails: [], error: (error as Error).message };
  }
};
