import { useState, type FormEvent, type ReactElement } from "react";
import { SubmitButton } from "./SubmitButton";
import { fetchCocktailsByName } from "../../../api";
import type { ICocktail } from "../../../types";
import { Loader } from "../Loader";
import { CocktailList } from "./CocktailList";

export const Form = (): ReactElement => {
  const [cocktails, setCocktails] = useState<ICocktail[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState<number>(0);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const name = formData.get("name-input") as string;

    try {
      setError(null);
      setLoading(true);
      const results = await fetchCocktailsByName(name);
      setCocktails(results);
      setPage(0);
    } catch (error) {
      setError((error as Error).message);
      setCocktails([]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <h2>Search for cocktail</h2>
      <div className="input-group">
        <input
          className="name-input"
          type="text"
          name="name-input"
          placeholder=" "
          autoComplete="off"
        />
        <label htmlFor="name-input" className="label">
          Name
        </label>
      </div>
      <SubmitButton />

      {error && <p>{error}</p>}
      {cocktails.length > 0 && <CocktailList cocktails={cocktails} page={page} setPage={setPage} />}
      {loading && <Loader />}
    </form>
  );
};
