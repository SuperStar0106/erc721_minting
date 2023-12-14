"use client";

import React from "react";
import {
  LabelCardComponent,
  UploaderComponent,
  ButtonComponent,
} from "../components";
import {
  MintingFormWrapper,
  StyledInputWrapper,
  TextWrapper,
  ButtonDivWrapper,
} from "./page.style";

const Minting: React.FC = () => {
  return (
    <>
      <LabelCardComponent
        title="Mint New NFT"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sem tortor quis amet scelerisque vivamus egestas."
      />
      <MintingFormWrapper>
        <UploaderComponent />
        <StyledInputWrapper />
        <TextWrapper placeholder="Description" />
        <div style={{ minWidth: "545px", display: "flex" }}>
          <ButtonDivWrapper>Mint without listing</ButtonDivWrapper>
          <ButtonDivWrapper>
            <ButtonComponent style={{ width: "100%", height: "63px" }}>
              Mint and list immediately
            </ButtonComponent>
          </ButtonDivWrapper>
        </div>
      </MintingFormWrapper>
    </>
  );
};

export default Minting;
