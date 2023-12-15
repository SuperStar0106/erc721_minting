import React from "react";
import { FooterWrapper } from "./index.style";
import { WhiteLabelWrapper, GradientLabelWrapper } from "./index.style";

export const Footer: React.FC = () => {
  return (
    <FooterWrapper>
      <div style={{ display: "flex", position: "absolute", left: "150px" }}>
        <WhiteLabelWrapper style={{ marginRight: "13px" }}>
          NFT
        </WhiteLabelWrapper>
        <GradientLabelWrapper>SEA</GradientLabelWrapper>
      </div>
      <p>NFT Sea {new Date().getFullYear()} &copy; All right reserved</p>
    </FooterWrapper>
  );
};
