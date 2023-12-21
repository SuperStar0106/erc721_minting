"use client";

import React, { useState, useEffect, useContext } from "react";
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
import Image from "next/image";
import { getMintedNFT } from "../utils";
import { NftMetadata } from "../types/metadata";
import { WalletContext } from "../context";

const List: React.FC = () => {
  const [isShowing, setIsShowing] = useState<boolean>(false);
  const [selectedNFT, setSelectedNFT] = useState<{
    title: string;
    img: string | null;
    description: string;
  }>({ title: "", img: null, description: "" });
  const [nfts, setNfts] = useState<NftMetadata[]>([]);
  const { active, getAccount, connect, disconnect } = useContext(WalletContext);

  const showModal = (title: string, img: string, description: string) => {
    setSelectedNFT({ title, img, description });
    setIsShowing(true);
  };

  const hideModal = () => {
    setIsShowing(false);
  };

  useEffect(() => {
    if (!active) {
      console.log("You must connect your wallet.");
      return;
    }
    const walletAddress = getAccount();

    const fetchNFTs = async () => {
      const response = await getMintedNFT(walletAddress);
      console.log(response);
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
