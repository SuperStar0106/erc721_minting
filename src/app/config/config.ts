import {
  Metamask,
  Portis,
  Torus,
  Walletlink,
} from "../../../assets/images/svg";

export const connectors = [
  {
    title: 'Metamask',
    icon: Metamask,
    connectorId: 'metamask',
    priority: 1
  },
  {
    title: 'Portis',
    icon: Portis,
    connectorId: 'portis',
    priority: 2
  },
  {
    title: 'Torus',
    icon: Portis,
    connectorId: 'torus',
    priority: 3
  },
  {
    title: 'Walletlink',
    icon: Portis,
    connectorId: 'walletlink',
    priority: 4
  }
];