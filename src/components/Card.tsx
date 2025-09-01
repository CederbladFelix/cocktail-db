import type { ReactElement } from "react";

interface cardProps {
  name: string;
  imageUrl: string;
}

export const Card = ({ name, imageUrl }: cardProps): ReactElement => {
  return (
    <div className="card-container">
      <h2>{name}</h2>
      <img src={imageUrl} alt={`Image of ${name}`} className="image" />
    </div>
  );
};
