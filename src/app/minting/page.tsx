"use client";

import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";

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
import { pinFileToIPFS, mintNFT } from "../utils";
import { WalletContext } from "../context";

type FormValuesProps = {
  name: string;
  description: string;
  image: File;
};

const Minting: React.FC = () => {
  const { active, getAccount } = useContext(WalletContext);
  const { register, handleSubmit, reset } = useForm<FormValuesProps>();
  const [withList, setWithList] = useState<boolean>(false);
  const router = useRouter();

  const onSubmit = async (data: FormValuesProps) => {
    console.log(withList);
    if (!active) {
      console.log("You must connect your wallet.");
      return false;
    }

    const walletAddress = getAccount();

    const pinataFileResponse = await pinFileToIPFS(data.image[0]);
    if (!pinataFileResponse.success || !pinataFileResponse.pinataUrl) {
      console.log(pinataFileResponse.message);
      return false;
    }

    console.log("pinata file upload response: ", pinataFileResponse);

    const { success, status } = await mintNFT(
      pinataFileResponse.pinataUrl,
      data.name,
      data.description,
      walletAddress
    );

    if (success) {
      console.log("mint success: ", status);
      await reset();
      if (withList) router.push("/list");
    } else {
      console.log("mint status: ", status);
    }
  };

  return (
    <>
      <LabelCardComponent
        title="Mint New NFT"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sem tortor quis amet scelerisque vivamus egestas."
      />
      <MintingFormWrapper onSubmit={handleSubmit(onSubmit)}>
        <UploaderComponent register={register} fieldName="image" />
        <StyledInputWrapper {...register("name")} />
        <TextWrapper placeholder="Description" {...register("description")} />
        <div style={{ minWidth: "545px", display: "flex" }}>
          <ButtonDivWrapper>
            <ButtonComponent
              style={{
                width: "100%",
                height: "63px",
                background: "none",
                boxShadow: "none",
              }}
              type="submit"
              onClick={() => setWithList(false)}
            >
              Mint without listing
            </ButtonComponent>
          </ButtonDivWrapper>
          <ButtonDivWrapper>
            <ButtonComponent
              style={{ width: "100%", height: "63px" }}
              type="submit"
              name="mintAndList"
              onClick={() => setWithList(true)}
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
