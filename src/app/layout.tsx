"use client";

import { useState } from "react";

import { Inter } from "next/font/google";
import "./globals.css";

import { ThemeProvider } from "styled-components";
import { Header, Footer, Sidebar } from "./components";
import theme from "./styles/DarkTheme";

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

  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider theme={theme}>
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
        </ThemeProvider>
      </body>
    </html>
  );
}
