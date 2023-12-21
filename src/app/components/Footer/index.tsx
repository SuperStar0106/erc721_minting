import React from "react";
import { useRouter } from "next/navigation";
import { FooterWrapper } from "./index.style";
import { WhiteLabelWrapper, GradientLabelWrapper } from "./index.style";
import { ButtonComponent } from "..";

export const Footer: React.FC = () => {
  const router = useRouter();

  return (
    <FooterWrapper>
      <div style={{ display: "flex", position: "absolute", left: "150px" }}>
        <WhiteLabelWrapper style={{ marginRight: "13px" }}>
          NFT
        </WhiteLabelWrapper>
        <GradientLabelWrapper>SEA</GradientLabelWrapper>
      </div>
      <p>NFT Sea {new Date().getFullYear()} &copy; All right reserved</p>
      <div
        style={{
          display: "flex",
          position: "absolute",
          right: "150px",
          gap: "10px",
        }}
      >
        <ButtonComponent
          style={{
            width: "100%",
            height: "50px",
            paddingLeft: "10px",
            paddingRight: "10px",
          }}
          type="submit"
          name="mintAndList"
          onClick={() => router.push("/minting")}
        >
          Minting
        </ButtonComponent>
        <ButtonComponent
          style={{
            width: "100%",
            height: "50px",
            paddingLeft: "10px",
            paddingRight: "10px",
          }}
          type="submit"
          name="mintAndList"
          onClick={() => router.push("/list")}
        >
          Listing NFTs
        </ButtonComponent>
      </div>
    </FooterWrapper>
  );
};
