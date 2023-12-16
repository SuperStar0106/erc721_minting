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
import { pinFileToIPFS, uploadMetadata } from "../utils";
import { useForm } from "react-hook-form";

type FormValuesProps = {
  title: string;
  description: string;
  image: File;
};

const Minting: React.FC = () => {
  const { register, handleSubmit } = useForm<FormValuesProps>();

  const [file, setFile] = useState<File | null>(null);

  const onSubmit = (data: FormValuesProps) => {
    console.log(data);

    console.log(data.title);
    console.log(data.description);

    const file = data.image;
    const pinataApiKey = process.env.NEXT_PUBLIC_PINATA_API_KEY;
    const pinataSecretApiKey = process.env.NEXT_PUBLIC_PINATA_SECRET_API_KEY;
    if (data.image && pinataApiKey && pinataSecretApiKey) {
      pinFileToIPFS(file[0], pinataApiKey, pinataSecretApiKey)
        .then((data) => {
          console.log("image data: ", data);

          uploadMetadata(
            data.title,
            data.description,
            "https://localhost:3000/list",
            data.IpfsHash
          )
            .then((data) => {
              console.log(data);
            })
            .catch((error) => console.log(error));
        })
        .catch((error) => console.log(error));
    }
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
        <StyledInputWrapper {...register("title")} />
        <TextWrapper placeholder="Description" {...register("description")} />
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
