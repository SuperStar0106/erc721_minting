import React from "react";
import { ButtonWrapper } from "./index.style";

interface ButtonComponentProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export const ButtonComponent: React.FC<ButtonComponentProps> = ({
  children,
  ...props
}) => {
  return <ButtonWrapper {...props}>{children}</ButtonWrapper>;
};
