import type { ReactElement } from "react";
import { Form } from "../components/SearchPage/Form";

export const SearchPage = (): ReactElement => {
  return (
    <div className="search-page-container">
      <Form />
    </div>
  );
};
