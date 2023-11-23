import { MouseEventHandler, ReactNode } from "react";

interface ButtonProps {
  className: string;
  children: ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  //  onClick?: MouseEventHandler;
}

export const Button = ({ children, className, onClick }: ButtonProps) => {
  return (
    <button onClick={onClick} className={className}>
      {children}
    </button>
  );
};
