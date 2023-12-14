import React, { useState } from "react";
import {
  SidebarWrapper,
  CloseButton,
  InnerDivWrapper,
  SidebarHeaderWrapper,
  SidebarContentWrapper,
  GradientTextWrapper,
} from "./index.style";
import { ConnectButtonComponent } from "../ConnectButton";
import {
  Metamask,
  Portis,
  Torus,
  Walletlink,
} from "../../../../assets/images/svg";

type SidebarProps = {
  isOpen: boolean;
  toggleSidebar: () => void;
};

export const Sidebar: React.FC<SidebarProps> = (props) => {
  const { isOpen, toggleSidebar } = props;

  return (
    <>
      <SidebarWrapper isOpen={isOpen}>
        <InnerDivWrapper isOpen={isOpen}>
          <SidebarHeaderWrapper>
            Connect Wallet
            <CloseButton onClick={toggleSidebar}>&times;</CloseButton>
          </SidebarHeaderWrapper>
          <SidebarContentWrapper>
            <ConnectButtonComponent text="Connect Metamask">
              <Metamask />
            </ConnectButtonComponent>
            <ConnectButtonComponent text="Connect Portis">
              <Portis />
            </ConnectButtonComponent>
            <ConnectButtonComponent text="Connect Torus">
              <Portis />
            </ConnectButtonComponent>
            <ConnectButtonComponent text="Connect Walletlink">
              <Portis />
            </ConnectButtonComponent>
            <div style={{ display: "flex" }}>
              Dont have a wallet? &nbsp;
              <GradientTextWrapper>Learn more</GradientTextWrapper>
            </div>
          </SidebarContentWrapper>
        </InnerDivWrapper>
      </SidebarWrapper>
    </>
  );
};
