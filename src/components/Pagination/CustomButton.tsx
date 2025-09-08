import type { ReactElement, ReactNode } from "react";

interface ICustomButtonProps {
  children: ReactNode;
  disabled?: true;
  onClick: () => void;
}

export const CustomButton = ({
  children,
  disabled,
  onClick,
}: ICustomButtonProps): ReactElement => {
  return (
    <button className="custom-button" disabled={disabled} onClick={onClick}>
      {children}
    </button>
  );
};
