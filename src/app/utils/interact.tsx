import Web3 from "web3";
import { ethers } from "ethers";
import Moralis from "moralis";
import { EvmChain } from "@moralisweb3/common-evm-utils";
import { pinJSONToIPFS } from "./pinata";
import dotenv from "dotenv";
import axios from "axios";
import { contract721ABI } from "../config/contract-abi";
import { campNFT721Address } from "../config/mint-data";

dotenv.config();

interface MintedNFTResponse {
  success: boolean;
  result: NftMetadata[];
}

Moralis.start({
  apiKey: process.env.NEXT_PUBLIC_MORALIS_API_KEY,
});

export const getMintedNFT = async (
  walletAddress: string
): Promise<MintedNFTResponse> => {
  try {
    const metadataList: NftMetadata[] = [];
    const chain = EvmChain.GOERLI;

    const response = await Moralis.EvmApi.nft.getWalletNFTs({
      address: walletAddress,
      chain,
    });

    for (const nft of response.result) {
      console.log(`Token ID: ${nft.tokenId}`);
      if (nft.tokenUri) {
        const metadata = await getNFTInfo(nft.tokenUri);
        metadataList.push(metadata);
      }
    }

    console.log("response: ", metadataList);
    return {
      success: true,
      result: metadataList,
    };
  } catch (err) {
    const error = err as Error;
    console.log("error: ", error.message);
    return {
      success: false,
      result: [],
    };
  }
};

interface NftMetadata {
  name: string;
  description: string;
  image: string;
}

export const getNFTInfo = async (tokenUri: string): Promise<NftMetadata> => {
  const response = await axios.get(tokenUri);
  const metadata: NftMetadata = response.data;
  return metadata;
};

interface MintNFTResponse {
  success: boolean;
  status: string;
}

export const mintNFT = async (
  url: string,
  name: string,
  description: string,
  walletAddress: string
): Promise<MintNFTResponse> => {
  if (url.trim() == "" || name.trim() == "" || description.trim() == "") {
    return {
      success: false,
      status: "❗Please make sure all fields are completed before minting.",
    };
  }

  //make metadata
  const metaHash = {
    name,
    image: process.env.NEXT_PUBLIC_IPFS_BASE_URI + url,
    description,
  };
  console.log("metaHash: ", metaHash);

  const pinataResponse = await pinJSONToIPFS(metaHash);
  if (!pinataResponse.success) {
    return {
      success: false,
      status: "😢 Something went wrong while uploading your tokenURI.",
    };
  }
  const tokenURI = pinataResponse.pinataUrl;

  try {
    await window.ethereum.request({ method: "eth_requestAccounts" });
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();

    const contract721 = new ethers.Contract(
      campNFT721Address,
      contract721ABI,
      signer
    );
    console.log("contract721: ", contract721);

    const tx = await contract721.mint(walletAddress, tokenURI);
    const receipt = await tx.wait();

    return {
      success: true,
      status: receipt,
    };
  } catch (err) {
    const error = err as Error;
    return {
      success: false,
      status: "😥 Something went wrong: " + error.message,
    };
  }
};
