import type { ReactElement } from "react";
import { Link } from "react-router";

interface cardProps {
  name: string;
  imageUrl: string;
  id: string;
}

export const Card = ({ name, imageUrl, id }: cardProps): ReactElement => {
  return (
    <div className="card-container">
      <span className="img-container">
        <img src={imageUrl} alt={`Image of ${name}`} className="image" />
      </span>
      <div className="card-text-container">
        <h2>{name}</h2>
        <Link to={`/cocktail/${id}`} className="see-more-link">
          See more &gt;
        </Link>
      </div>
    </div>
  );
};
