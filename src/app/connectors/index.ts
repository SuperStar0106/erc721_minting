import { InjectedConnector } from '@web3-react/injected-connector';
import { PortisConnector } from '@web3-react/portis-connector';
import { TorusConnector } from '@web3-react/torus-connector';
import { WalletConnectConnector } from '@web3-react/walletconnect-connector';

import { rpcURL } from '../config/mint-data';

export const injectedConnector = new InjectedConnector({ supportedChainIds: [1, 4, 5] });
export const portisConnector = new PortisConnector({ dAppId: 'YOUR_PORTIS_DAPP_ID', networks: [1, 4, 5] });
export const torusConnector = new TorusConnector({ chainId: 1 });
export const walletConnectConnector = new WalletConnectConnector({
  rpc: { 1: rpcURL },
  qrcode: true
});