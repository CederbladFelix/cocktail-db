export interface IIngredient {
  ingredient: string;
  measure: string | null;
}

export interface ICocktail {
  id: string;
  name: string;
  tags: string[];
  category: string;
  alcoholic: boolean;
  glass: string;
  instructions: string;
  thumbnail: string;
  ingredients: IIngredient[];
}

export interface LoaderCocktailsData {
  cocktails: ICocktail[];
  error: string | null;
}

export interface LoaderCocktailData {
  cocktail: ICocktail | null;
  error: string | null;
}
  
export interface LoaderRandomCocktailData {
  cocktail: ICocktail;
}