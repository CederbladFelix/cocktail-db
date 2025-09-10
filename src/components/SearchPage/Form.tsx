import { type FormEvent, type ReactElement } from "react";
import { useNavigate, useSearchParams } from "react-router";
import { SubmitButton } from "./SubmitButton";

export const Form = (): ReactElement => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const initialValue = searchParams.get("q") ?? "";

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = (formData.get("name-input") as string).trim();
    if (name) {
      navigate(`/search?q=${encodeURIComponent(name)}`);
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
          defaultValue={initialValue}
        />
        <label htmlFor="name-input" className="label">
          Name
        </label>
      </div>
      <SubmitButton />
    </form>
  );
};
