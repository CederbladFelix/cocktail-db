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

  if (isLoading) {
    return (
      <div className="landing-page-container">
        <Spinner />
      </div>
    );
  }

  const { name, thumbnail, id } = cocktail;

  return (
    <div className="landing-page-container">
      <Card name={name} imageUrl={thumbnail} id={id} />
      <RandomCocktailButton />
    </div>
  );
};
