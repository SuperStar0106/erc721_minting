import React from "react";
import {
  NFTCardWrapper,
  NFTImageWrapper,
  NFTTitleWrapper,
} from "./index.style";
import Image from "next/image";
import fish from "./fish.png";

export const NFTCardComponent: React.FC = () => {
  return (
    <NFTCardWrapper>
      <div>
        <NFTImageWrapper>
          <Image
            alt="img"
            src={fish}
            // layout="fill"
            objectFit="cover"
            sizes="100px"
          ></Image>
        </NFTImageWrapper>
        <NFTTitleWrapper>Dorippa Panthera</NFTTitleWrapper>
      </div>
    </NFTCardWrapper>
  );
};
