import { useState, type FormEvent, type ReactElement } from "react";
import { Link } from "react-router";
import { SubmitButton } from "./SubmitButton";
import { fetchCocktailsByName } from "../../../api";
import type { ICocktail } from "../../../types";
import { Loader } from "../Loader";

export const Form = (): ReactElement => {
  const [cocktails, setCocktails] = useState<ICocktail[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const name = formData.get("name-input") as string;

    try {
      setError(null);
      setLoading(true);
      const results = await fetchCocktailsByName(name);
      setCocktails(results);
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
        />
        <label htmlFor="name-input" className="label">
          Name
        </label>
      </div>
      <SubmitButton />

      {loading && <Loader />}
      {error && <p>{error}</p>}
      {cocktails.length > 0 && (
        <ul className="search-by-name-cocktail-list">
          {cocktails.map((cocktail) => (
            <li key={cocktail.id}>
              <Link to={`/cocktail/${cocktail.id}`} className="cocktail-link">
                {cocktail.name}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </form>
  );
};
