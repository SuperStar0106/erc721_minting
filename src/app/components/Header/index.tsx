import Link from "next/link";
import {
  HeaderWrapper,
  WhiteLabelWrapper,
  GradientLabelWrapper,
} from "./index.style";
import { Wallet } from "@/app/assets/images/svg";

const Header = () => {
  return (
    <HeaderWrapper>
      <div style={{ display: "flex" }}>
        <WhiteLabelWrapper style={{ marginRight: "13px" }}>
          NFT
        </WhiteLabelWrapper>
        <GradientLabelWrapper>SEA</GradientLabelWrapper>
      </div>
      <div>
        <Wallet />
      </div>
    </HeaderWrapper>
  );
};

export default Header;
