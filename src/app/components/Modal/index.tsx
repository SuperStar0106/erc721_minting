import React, { useState } from "react";
import {
  ModalWrapper,
  ModalHeader,
  ModalContent,
  CloseButton,
} from "./index.style";
import { NFTCardComponent } from "..";

type ModalComponentProps = {
  hideModal: () => void;
  children: React.ReactNode;
  isShowing: boolean;
};

export const ModalComponent: React.FC<ModalComponentProps> = (props) => {
  const { hideModal, children, isShowing } = props;

  return (
    <>
      <ModalWrapper show={isShowing}>
        <ModalContent>
          <ModalHeader>
            <CloseButton onClick={hideModal}>&times;</CloseButton>
          </ModalHeader>
          {children}
        </ModalContent>
      </ModalWrapper>
    </>
  );
};
