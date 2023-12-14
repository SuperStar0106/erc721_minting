import React from "react";
import Image, { StaticImageData } from "next/image";
import { ConnectButtonWrapper } from "./index.style";

type ConnectButtonComponentProps = {
  text: string;
  children: React.ReactNode;
};

export const ConnectButtonComponent: React.FC<ConnectButtonComponentProps> = (
  props
) => {
  const { text, children } = props;

  return (
    <ConnectButtonWrapper>
      {children}
      {text}
    </ConnectButtonWrapper>
  );
};
