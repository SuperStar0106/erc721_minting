"use client";

import { useState } from "react";
import { ThemeProvider } from "styled-components";
import { Header, Footer, Sidebar } from "./components";
import { WalletContextProvider } from "./context";
import { Web3ReactProvider } from "@web3-react/core";
import Web3 from "web3";
import theme from "./styles/DarkTheme";
import { Inter } from "next/font/google";
import "./globals.css";

import {
  ChildrenWrapper,
  LayoutWrapper,
  BackCircleWrapper1,
  BackCircleWrapper2,
  BackCircleWrapper3,
  BackCircleWrapper4,
  BackCircleWrapper5,
  BackCircleWrapper6,
  BackCircleWrapper7,
} from "./layout.style";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  function getLibrary(provider: any) {
    return new Web3(provider);
  }

  return (
    <html lang="en">
      <body className={inter.className}>
        <Web3ReactProvider getLibrary={getLibrary}>
          <ThemeProvider theme={theme}>
            <WalletContextProvider>
              <BackCircleWrapper1 />
              <BackCircleWrapper2 />
              <BackCircleWrapper3 />
              <BackCircleWrapper4 />
              <BackCircleWrapper5 />
              <BackCircleWrapper6 />
              <BackCircleWrapper7 />

              <LayoutWrapper>
                <Header toggleSidebar={toggleSidebar} />
                <ChildrenWrapper>{children}</ChildrenWrapper>
              </LayoutWrapper>
              <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />
              <Footer />
            </WalletContextProvider>
          </ThemeProvider>
        </Web3ReactProvider>
      </body>
    </html>
  );
}
