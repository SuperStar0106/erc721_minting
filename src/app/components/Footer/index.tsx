import { FooterWrapper } from "./index.style";
import { WhiteLabelWrapper, GradientLabelWrapper } from "./index.style";

const Footer = () => {
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

export default Footer;
