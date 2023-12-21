import React from "react";
import {
  NFTCardWrapper,
  NFTImageWrapper,
  NFTTitleWrapper,
} from "./index.style";
import Image from "next/image";

type NFTCardComponentProps = {
  showModal: (title: string, img: string, description: string) => void;
  title: string;
  img: string;
  description: string;
};

export const NFTCardComponent: React.FC<NFTCardComponentProps> = (props) => {
  const { showModal, title, img, description } = props;

  return (
    <NFTCardWrapper>
      <div>
        <NFTImageWrapper onClick={() => showModal(title, img, description)}>
          <Image
            alt="img"
            src={img}
            objectFit="cover"
            width={100}
            height={100}
          />
        </NFTImageWrapper>
        <NFTTitleWrapper>{title}</NFTTitleWrapper>
      </div>
    </NFTCardWrapper>
  );
};
