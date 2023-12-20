import Web3 from "web3";
import { ethers } from "ethers";
import Moralis from "moralis";
import { EvmChain } from "@moralisweb3/common-evm-utils";
import { pinJSONToIPFS } from "./pinata";
import dotenv from "dotenv";
import axios from "axios";

import {
  Alchemy,
  AlchemySubscription,
  Network,
  NftMetadata,
} from "alchemy-sdk";

dotenv.config();
const alchemyKey =
  "https://eth-mainnet.alchemyapi.io/v2/IBpIkwZ8PYa6_9AfDtFu9xLCzhRA2ztk";
import { contract721ABI } from "../config/contract-abi";
const contractAddress = "0x3D216932E996c025E1d417c0396b1105a68963c6";
const web3 = new Web3(alchemyKey);
const Provider = require("@truffle/hdwallet-provider");
import {
  ownerPrivateKey,
  rpcURL,
  campNFT721Address,
  ownerAddress,
} from "../config/mint-data";

interface WalletResponse {
  address: string;
  status: string | JSX.Element;
}

export const connectWallet = async (): Promise<WalletResponse> => {
  if (window.ethereum) {
    try {
      const addressArray = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      const obj = {
        status: "👆🏽 Write a message in the text-field above.",
        address: addressArray[0],
      };
      return obj;
    } catch (err) {
      const error = err as Error;
      return {
        address: "",
        status: "😥 " + error.message,
      };
    }
  } else {
    return {
      address: "",
      status: (
        <span>
          <p>
            {" "}
            🦊{" "}
            <a target="_blank" href={`https://metamask.io/download.html`}>
              You must install Metamask, a virtual Ethereum wallet, in your
              browser.
            </a>
          </p>
        </span>
      ),
    };
  }
};

export const getCurrentWalletConnected = async (): Promise<WalletResponse> => {
  if (window.ethereum) {
    try {
      const addressArray = await window.ethereum.request({
        method: "eth_accounts",
      });
      if (addressArray.length > 0) {
        return {
          address: addressArray[0],
          status: "👆🏽 Write a message in the text-field above.",
        };
      } else {
        return {
          address: "",
          status: "🦊 Connect to Metamask using the top right button.",
        };
      }
    } catch (err) {
      const error = err as Error;
      return {
        address: "",
        status: "😥 " + error.message,
      };
    }
  } else {
    return {
      address: "",
      status: (
        <span>
          <p>
            {" "}
            🦊{" "}
            <a target="_blank" href={`https://metamask.io/download.html`}>
              You must install Metamask, a virtual Ethereum wallet, in your
              browser.
            </a>
          </p>
        </span>
      ),
    };
  }
};

type ContractInstance = InstanceType<typeof web3.eth.Contract>;

async function loadContract(): Promise<ContractInstance> {
  return new web3.eth.Contract(contract721ABI as any, contractAddress);
}

interface MintedNFTResponse {
  success: boolean;
  result: NftMetadata[];
}

export const getMintedNFT = async (
  walletAddress: string
): Promise<MintedNFTResponse> => {
  try {
    await Moralis.start({
      apiKey:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJub25jZSI6IjNmZTEwOGI4LTU3ZjMtNDdmOC1hODYwLWFjZDQ2YzdjMjJiOCIsIm9yZ0lkIjoiMzY4MjM0IiwidXNlcklkIjoiMzc4NDUzIiwidHlwZUlkIjoiYmE1MjA0NDUtZGUzYS00ZWIzLTk1MmUtZGEzMWE4ZTUzZGZkIiwidHlwZSI6IlBST0pFQ1QiLCJpYXQiOjE3MDI1ODU2ODQsImV4cCI6NDg1ODM0NTY4NH0.kz1RO9E9bvioVJp7UJGEFmsP_p9yHaOH8dAw3ibSzq4",
    });

    const chain = EvmChain.GOERLI;

    const response = await Moralis.EvmApi.nft.getWalletNFTs({
      address: walletAddress,
      chain,
    });

    const metadataList: NftMetadata[] = [];

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

    // get list owned nfts
    console.log("result: ", contract721.baseURI());
    let balance = await contract721.balanceOf(walletAddress);
    balance += 1;
    console.log("balance: ", balance);
    for (let i = 0; i < balance; i++) {
      const tokenId = await contract721.tokenOfOwnerByIndex(walletAddress, i);
      console.log(`Token ID: ${tokenId}`);
    }

    // const tx = await contract721.mint(walletAddress, tokenURI);
    // const receipt = await tx.wait();

    return {
      success: true,
      // status: receipt,
      status: "ok",
    };
  } catch (err) {
    const error = err as Error;
    return {
      success: false,
      status: "😥 Something went wrong: " + error.message,
    };
  }
};
