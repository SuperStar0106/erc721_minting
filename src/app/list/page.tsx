"use client";

import React, { useState, useEffect } from "react";
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
import { getMintedNFT } from "../utils";
import { NftMetadata } from "../types/metadata";
import fish from "./fish.png";

const List: React.FC = () => {
  const [isShowing, setIsShowing] = useState<boolean>(false);
  const [selectedNFT, setSelectedNFT] = useState<{
    title: string;
    img: StaticImageData | null;
  }>({ title: "", img: null });
  const [nfts, setNfts] = useState<NftMetadata[]>([]);

  const showModal = (title: string, img: StaticImageData) => {
    setSelectedNFT({ title, img });
    setIsShowing(true);
  };

  const hideModal = () => {
    setIsShowing(false);
  };

  useEffect(() => {
    const fetchNFTs = async () => {
      const response = await getMintedNFT(
        "0x6b79b791b9eA07A08c7f5fc09c4a9576Ae0ba62c"
      );
      if (response.success) {
        setNfts(response.result);
      }
    };

    fetchNFTs();
  }, []);

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
                priority={true}
              />
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

export default List;
