# NFT Minter
This is a Next.js application that allows users to mint their own NFTs. The application uses the following technologies:
- **Next.js**: A React framework for building JavaScript applications.
- **Moralis**: A backend infrastructure for dApps and blockchain apps. It provides a serverless platform to build decentralized applications.
- **Ethers.js**: A library for interacting with the Ethereum blockchain and its ecosystem.
- **IPFS**: A protocol and network designed to create a content-addressable, peer-to-peer method of storing and sharing hypermedia in a distributed file system.
- **Pinata**: A service for hosting files on IPFS.


## Getting Started
These instructions will get you a copy of the project up and running on your local machine for development purposes.

Clone the project
```bash
git clone https://github.com/SuperStar0106/erc721_minting.git
```

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Learn More

You can check out [the Next.js GitHub repository](https://github.com/SuperStar0106/erc721_minting.git) - your feedback and contributions are welcome!

### Connect wallet
Integrated with several wallets such as Metamask, Portis, Torus and Walletlink. Used `useWeb3React` provided by `@web3-react/core`.

example:<br>
`
export const injectedConnector = new InjectedConnector({ supportedChainIds: [1, 4, 5] });
await activate(connector);
`

### Mint NFTs
Used ether.js to mint the NFTs.
example:<br>
`
const tx = await contract721.mint(walletAddress, tokenURI);
const receipt = await tx.wait();
`

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
