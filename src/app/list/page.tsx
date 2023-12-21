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
    img: string | null;
    description: string;
  }>({ title: "", img: null, description: "" });
  const [nfts, setNfts] = useState<NftMetadata[]>([]);

  const showModal = (title: string, img: string, description: string) => {
    setSelectedNFT({ title, img, description });
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
        {nfts.map((nft, index) => (
          <NFTCardComponent
            key={index}
            showModal={showModal}
            title={nft.name}
            img={nft.image}
            description={nft.description}
          />
        ))}
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
                width={100}
                height={100}
                priority={true}
              />
            )}
          </NFTImageWrapper>
          <div>
            <NFTTitleWrapper>{selectedNFT.title}</NFTTitleWrapper>
            <NFTDescWrapper>Description</NFTDescWrapper>
            <NFTDescriptionWrapper>
              {selectedNFT.description}
            </NFTDescriptionWrapper>
          </div>
        </div>
      </ModalComponent>
    </>
  );
};

export default List;
