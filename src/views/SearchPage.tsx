import { useLoaderData, useNavigation } from "react-router";
import type { LoaderCocktailsData } from "../../types";
import { Form } from "../components/SearchPage/Form";
import { CocktailList } from "../components/SearchPage/CocktailList";
import { Spinner } from "../components/Spinner";
import { useEffect, useState } from "react";

export const SearchPage = () => {
  const { cocktails, error } = useLoaderData() as LoaderCocktailsData;
  const navigation = useNavigation();
  const [page, setPage] = useState(0);

  const isLoading = navigation.state === "loading";

  useEffect(() => {
    setPage(0);
  }, [cocktails]);

  return (
    <div className="search-page-container">
      <Form />

      {isLoading && <Spinner />}

      {error && !isLoading && <p className="error-message">{error}</p>}

      {!error && cocktails.length > 0 && (
        <CocktailList cocktails={cocktails} page={page} setPage={setPage} />
      )}
    </div>
  );
};
