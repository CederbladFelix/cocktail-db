import { createBrowserRouter } from "react-router";
import { App } from "./components/App";
import { CocktailInfoPage } from "./views/CocktailInfoPage";
import { LandingPage } from "./views/LandingPage";
import { SearchPage } from "./views/SearchPage";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <LandingPage /> },
      { path: "cocktail/:id", element: <CocktailInfoPage /> },
      { path: "search", element: <SearchPage /> },
    ],
  },
]);
