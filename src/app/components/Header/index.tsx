import React from "react";
import {
  HeaderWrapper,
  WhiteLabelWrapper,
  GradientLabelWrapper,
} from "./index.style";
import { Wallet } from "../../../../assets/images/svg";

type HeaderProps = {
  toggleSidebar: () => void;
};

export const Header: React.FC<HeaderProps> = (props) => {
  const { toggleSidebar } = props;

  return (
    <HeaderWrapper>
      <div style={{ display: "flex" }}>
        <WhiteLabelWrapper style={{ marginRight: "13px" }}>
          NFT
        </WhiteLabelWrapper>
        <GradientLabelWrapper>SEA</GradientLabelWrapper>
      </div>
      <div onClick={toggleSidebar} style={{ cursor: "pointer" }}>
        <Wallet />
      </div>
    </HeaderWrapper>
  );
};
