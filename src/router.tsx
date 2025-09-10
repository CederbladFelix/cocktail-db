import { createBrowserRouter } from "react-router";
import { App } from "./components/App";
import { CocktailInfoPage } from "./views/CocktailInfoPage";
import { LandingPage } from "./views/LandingPage";
import { SearchPage } from "./views/SearchPage";

import {
  LoaderCocktailById,
  LoaderCocktailsByName,
  LoaderRandomCocktail,
} from "./loaders";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <LandingPage />, loader: LoaderRandomCocktail },
      {
        path: "cocktail/:id",
        element: <CocktailInfoPage />,
        loader: LoaderCocktailById,
      },
      {
        path: "search",
        element: <SearchPage />,
        loader: LoaderCocktailsByName,
      },
    ],
  },
]);
