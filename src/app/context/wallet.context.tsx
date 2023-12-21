import React, { createContext } from "react";
import { useWeb3React } from "@web3-react/core";
import {
  injectedConnector,
  portisConnector,
  torusConnector,
  walletConnectConnector,
} from "../connectors";

type IWalletContextProps = {
  account: string;
  active: boolean;
  connect: (walletType: string) => Promise<void>;
  disconnect: () => void;
  getAccount: () => string;
};

export const WalletContext = createContext<IWalletContextProps>({
  account: "",
  active: false,
  connect: () => Promise.resolve(),
  disconnect: () => {},
  getAccount: () => "",
});

type WalletContextProviderProps = {
  children?: React.ReactNode;
};

export const WalletContextProvider: React.FC<WalletContextProviderProps> = (
  props
) => {
  const { children } = props;

  const { account, active, activate, deactivate } = useWeb3React();

  const handleConnect = async (walletType: string) => {
    let connector;
    switch (walletType) {
      case "metamask":
        connector = injectedConnector;
        break;
      case "portis":
        connector = portisConnector;
      case "torus":
        connector = torusConnector;
      case "walletConnect":
        connector = walletConnectConnector;
      default:
        console.error("Unsupported wallet");
        break;
    }
    try {
      if (connector) await activate(connector);
      sessionStorage.setItem("isConnected", "connected");
    } catch (error) {
      console.error(error);
    }
  };

  const handleDisconnect = () => {
    try {
      if (window.ethereum !== undefined) {
        deactivate();
        sessionStorage.removeItem("isConnected");
      } else {
        alert("Please install Metamask wallet in your browser.");
      }
    } catch (error: unknown) {
      console.error(error);
    }
  };

  const getAccount = () => account ?? "";

  return (
    <WalletContext.Provider
      value={{
        account: "",
        active: active,
        connect: (walletType: string) => handleConnect(walletType),
        disconnect: handleDisconnect,
        getAccount: getAccount,
      }}
    >
      {children}
    </WalletContext.Provider>
  );
};
