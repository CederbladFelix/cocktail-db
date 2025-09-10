import { useLoaderData, useNavigation, useRevalidator } from "react-router";
import type { LoaderRandomCocktailData } from "../../types";
import { Card } from "../components/Card";
import { RandomCocktailButton } from "../components/LandingPage/RandomCocktailButton";
import { Spinner } from "../components/Spinner";

export const LandingPage = () => {
  const { cocktail } = useLoaderData() as LoaderRandomCocktailData;
  const navigation = useNavigation();
  const revalidator = useRevalidator();

  const isLoading =
    navigation.state === "loading" || revalidator.state === "loading";

  return (
    <div className="landing-page-container">
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          <Card
            name={cocktail.name}
            imageUrl={cocktail.thumbnail}
            id={cocktail.id}
          />
          <RandomCocktailButton />
        </>
      )}
    </div>
  );
};
