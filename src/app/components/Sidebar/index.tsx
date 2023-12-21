import React, { useContext, useEffect, useState } from "react";

import {
  SidebarWrapper,
  CloseButton,
  InnerDivWrapper,
  SidebarHeaderWrapper,
  SidebarContentWrapper,
  GradientTextWrapper,
} from "./index.style";
import { ConnectButtonComponent } from "../ConnectButton";
import { WalletContext } from "@/app/context";
import { connectors } from "@/app/config/config";

type SidebarProps = {
  isOpen: boolean;
  toggleSidebar: () => void;
};

export const Sidebar: React.FC<SidebarProps> = (props) => {
  const { active, getAccount, connect, disconnect } = useContext(WalletContext);

  const { isOpen, toggleSidebar } = props;
  const [clickedButton, setClickedButton] = useState<{
    [key: number]: boolean;
  }>({});
  const [currentWallet, setCurrentWallet] = useState<string>("");

  const handleClick = async (index: number, connectId: string) => {
    console.log(connectId);
    if (!active) {
      await connect(connectId);
      setCurrentWallet(connectId);
    } else {
      await disconnect();
      setCurrentWallet("");
    }
    setClickedButton({ [index]: true });
  };

  useEffect(() => {
    const connected = sessionStorage.getItem("isConnected");
    if (connected === "connected") {
      if (!active) {
        connect(currentWallet);
      } else {
        disconnect();
      }
    }
  }, []);

  return (
    <>
      <SidebarWrapper isOpen={isOpen}>
        <InnerDivWrapper isOpen={isOpen}>
          <SidebarHeaderWrapper>
            Connect Wallet
            <CloseButton onClick={toggleSidebar}>&times;</CloseButton>
          </SidebarHeaderWrapper>
          <SidebarContentWrapper>
            {connectors.map((item: any, index: number) => (
              <ConnectButtonComponent
                key={`wallet-connector-${index}`}
                text={`${
                  active && clickedButton[index] ? getAccount() : item.title
                }`}
                active={active && clickedButton[index]}
                onClick={() => handleClick(index, item.connectorId)}
              >
                {<item.icon />}
              </ConnectButtonComponent>
            ))}
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
