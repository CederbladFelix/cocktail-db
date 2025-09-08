import type { ReactElement } from "react";

interface ICustomIconProps {
  icon: string;
}

export const CustomIcon = ({ icon }: ICustomIconProps): ReactElement => {
  return <span className="custom-icon material-symbols-outlined">{icon}</span>;
};
