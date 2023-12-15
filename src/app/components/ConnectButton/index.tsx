import React from "react";
import Image, { StaticImageData } from "next/image";
import { ConnectButtonWrapper } from "./index.style";

type ConnectButtonComponentProps = {
  text: string;
  children: React.ReactNode;
  active: boolean;
  onClick: () => void;
};

export const ConnectButtonComponent: React.FC<ConnectButtonComponentProps> = (
  props
) => {
  const { text, children, active, onClick } = props;

  return (
    <ConnectButtonWrapper onClick={onClick} active={active}>
      {children}
      {text}
    </ConnectButtonWrapper>
  );
};
