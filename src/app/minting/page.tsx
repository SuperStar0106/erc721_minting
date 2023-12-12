"use client";

import React from "react";
import { LabelCardComponent, NFTCardComponent } from "../components";
import { NFTGridWrapper } from "./page.style";

const Minting: React.FC = () => {
  return (
    <>
      <LabelCardComponent
        title="Listing Owned NFTs"
        // description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sem tortor quis amet scelerisque vivamus egestas."
      />
      <NFTGridWrapper>
        <NFTCardComponent />
        <NFTCardComponent />
        <NFTCardComponent />
        <NFTCardComponent />
        <NFTCardComponent />
        <NFTCardComponent />
        <NFTCardComponent />
        <NFTCardComponent />
        <NFTCardComponent />
      </NFTGridWrapper>
    </>
  );
};

export default Minting;
