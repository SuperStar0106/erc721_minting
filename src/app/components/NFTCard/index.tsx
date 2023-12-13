import React from "react";
import {
  NFTCardWrapper,
  NFTImageWrapper,
  NFTTitleWrapper,
} from "./index.style";
import Image, { StaticImageData } from "next/image";

type NFTCardComponentProps = {
  showModal: (title: string, img: StaticImageData) => void;
  title: string;
  img: StaticImageData;
};

export const NFTCardComponent: React.FC<NFTCardComponentProps> = (props) => {
  const { showModal, title, img } = props;

  return (
    <NFTCardWrapper>
      <div>
        <NFTImageWrapper onClick={() => showModal(title, img)}>
          <Image alt="img" src={img} objectFit="cover" sizes="100px"></Image>
        </NFTImageWrapper>
        <NFTTitleWrapper>{title}</NFTTitleWrapper>
      </div>
    </NFTCardWrapper>
  );
};
