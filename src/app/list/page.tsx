"use client";

import React, { useState } from "react";
import {
  LabelCardComponent,
  NFTCardComponent,
  ModalComponent,
} from "../components";
import {
  NFTGridWrapper,
  NFTImageWrapper,
  NFTTitleWrapper,
  NFTDescWrapper,
  NFTDescriptionWrapper,
} from "./page.style";
import Image, { StaticImageData } from "next/image";
import fish from "./fish.png";

const Minting: React.FC = () => {
  const [isShowing, setIsShowing] = useState<boolean>(false);
  const [selectedNFT, setSelectedNFT] = useState<{
    title: string;
    img: StaticImageData | null;
  }>({ title: "", img: null });

  const showModal = (title: string, img: StaticImageData) => {
    setSelectedNFT({ title, img });
    setIsShowing(true);
  };

  const hideModal = () => {
    setIsShowing(false);
  };

  return (
    <>
      <LabelCardComponent title="Listing Owned NFTs" />
      <NFTGridWrapper>
        <NFTCardComponent
          showModal={showModal}
          title="Dorippa Panthera1"
          img={fish}
        />
        <NFTCardComponent
          showModal={showModal}
          title="Dorippa Panthera2"
          img={fish}
        />
        <NFTCardComponent
          showModal={showModal}
          title="Dorippa Panthera3"
          img={fish}
        />
        <NFTCardComponent
          showModal={showModal}
          title="Dorippa Panthera4"
          img={fish}
        />
      </NFTGridWrapper>
      <ModalComponent hideModal={hideModal} isShowing={isShowing}>
        <div style={{ display: "flex", gap: "30px", marginBottom: "30px" }}>
          <NFTImageWrapper>
            {selectedNFT.img && (
              <Image
                alt="img"
                src={selectedNFT.img}
                objectFit="cover"
                style={{ width: "80%", height: "80%" }}
              ></Image>
            )}
          </NFTImageWrapper>
          <div>
            <NFTTitleWrapper>{selectedNFT.title}</NFTTitleWrapper>
            <NFTDescWrapper>Description</NFTDescWrapper>
            <NFTDescriptionWrapper>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet, a
              habitant a consequat elementum nisl. Phasellus facilisis urna
              facilisis aliquet enim congue. Libero amet proin phasellus
              pretium.
            </NFTDescriptionWrapper>
          </div>
        </div>
      </ModalComponent>
    </>
  );
};

export default Minting;
