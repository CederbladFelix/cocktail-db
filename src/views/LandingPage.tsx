import { useLoaderData, useNavigation, useRevalidator } from "react-router";
import type { ICocktail } from "../../types";
import { Card } from "../components/Card";
import { RandomCocktailButton } from "../components/LandingPage/RandomCocktailButton";
import { Loader } from "../components/Loader";

export const LandingPage = () => {
  const { cocktail } = useLoaderData() as { cocktail: ICocktail };
  const navigation = useNavigation();
  const revalidator = useRevalidator();

  const isLoading =
    navigation.state === "loading" || revalidator.state === "loading";

  return (
    <div className="landing-page-container">
      {isLoading ? (
        <Loader />
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
