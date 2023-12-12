import React from "react";
import {
  NFTCardWrapper,
  NFTImageWrapper,
  NFTTitleWrapper,
} from "./index.style";

export const NFTCardComponent: React.FC = () => {
  return (
    <NFTCardWrapper>
      <div>
        <NFTImageWrapper />
        <NFTTitleWrapper>Dorippa Panthera</NFTTitleWrapper>
      </div>
    </NFTCardWrapper>
  );
};
