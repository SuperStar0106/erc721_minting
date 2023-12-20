"use client";

import React, { useState } from "react";
import {
  LabelCardComponent,
  UploaderComponent,
  ButtonComponent,
} from "../components";
import {
  MintingFormWrapper,
  StyledInputWrapper,
  TextWrapper,
  ButtonDivWrapper,
} from "./page.style";
import { pinFileToIPFS, mintNFT, getMintedNFT } from "../utils";
import { useForm } from "react-hook-form";

type FormValuesProps = {
  name: string;
  description: string;
  image: File;
};

const Minting: React.FC = () => {
  const { register, handleSubmit } = useForm<FormValuesProps>();

  const [file, setFile] = useState<File | null>(null);
  // const [walletAddress, setWallet] = useState("");
  // const [status, setStatus] = useState("");

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [url, setURL] = useState("");

  const onSubmit = async (data: FormValuesProps) => {
    console.log("input data: ", data);
    const name = data.name;
    const description = data.description;

    const pinataFileResponse = await pinFileToIPFS(data.image[0]);
    if (!pinataFileResponse.success || !pinataFileResponse.pinataUrl) {
      console.log(pinataFileResponse.message);
      return;
    }

    pinataFileResponse.pinataUrl && setURL(pinataFileResponse.pinataUrl);
    console.log("pinata file upload response: ", pinataFileResponse);

    // const { success, status } = await mintNFT(
    //   pinataFileResponse.pinataUrl,
    //   data.name,
    //   data.description,
    //   "0x6b79b791b9eA07A08c7f5fc09c4a9576Ae0ba62c"
    // );

    // const { success, status } = await getMintedNFT(
    //   "0x6b79b791b9eA07A08c7f5fc09c4a9576Ae0ba62c"
    // );
    // console.log(status);

    await getMintedNFT("0x6b79b791b9eA07A08c7f5fc09c4a9576Ae0ba62c");

    // if (success) {
    //   setName("");
    //   setDescription("");
    //   setURL("");
    // } else {
    //   console.log("upload token status: ", status);
    // }
    // console.log("mint nft result: ", success);
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFile(event.target.files ? event.target.files[0] : null);
  };

  return (
    <>
      <LabelCardComponent
        title="Mint New NFT"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sem tortor quis amet scelerisque vivamus egestas."
      />
      <MintingFormWrapper onSubmit={handleSubmit(onSubmit)}>
        <UploaderComponent register={register} fieldName="image" />
        <StyledInputWrapper
          {...register("name")}
          // onChange={(event) => setName(event.target.value)}
        />
        <TextWrapper
          placeholder="Description"
          {...register("description")}
          // onChange={(event) => setDescription(event.target.value)}
        />
        <div style={{ minWidth: "545px", display: "flex" }}>
          <ButtonDivWrapper>Mint without listing</ButtonDivWrapper>
          <ButtonDivWrapper>
            <ButtonComponent
              style={{ width: "100%", height: "63px" }}
              type="submit"
            >
              Mint and list immediately
            </ButtonComponent>
          </ButtonDivWrapper>
        </div>
      </MintingFormWrapper>
    </>
  );
};

export default Minting;
