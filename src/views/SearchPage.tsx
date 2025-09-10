import { useLoaderData, useNavigation } from "react-router";
import type { ICocktail } from "../../types";
import { Form } from "../components/SearchPage/Form";
import { CocktailList } from "../components/SearchPage/CocktailList";
import { Loader } from "../components/Loader";
import { useState } from "react";

interface LoaderData {
  cocktails: ICocktail[];
  error: string | null;
}

export const SearchPage = () => {
  const { cocktails, error } = useLoaderData() as LoaderData;
  const navigation = useNavigation();
  const [page, setPage] = useState(0);

  const isLoading = navigation.state === "loading";

  return (
    <div className="search-page-container">
      <Form />

      {isLoading && <Loader />}

      {error && !isLoading && <p className="error-message">{error}</p>}

      {!error && cocktails.length > 0 && (
        <CocktailList cocktails={cocktails} page={page} setPage={setPage} />
      )}
    </div>
  );
};
