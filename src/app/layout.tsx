"use client";

import { Inter } from "next/font/google";
import "./globals.css";

import { ThemeProvider } from "styled-components";
import Header from "./components/Header";
import Footer from "./components/Footer";
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
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider theme={theme}>
          {/* <div style={{ position: "absolute" }}> */}
          <BackCircleWrapper1 />
          <BackCircleWrapper2 />
          <BackCircleWrapper3 />
          <BackCircleWrapper4 />
          <BackCircleWrapper5 />
          <BackCircleWrapper6 />
          <BackCircleWrapper7 />
          <LayoutWrapper>
            <Header />
            <ChildrenWrapper>{children}</ChildrenWrapper>
          </LayoutWrapper>
          <Footer />
          {/* </div> */}
        </ThemeProvider>
      </body>
    </html>
  );
}
