"use client";

import { Inter } from "next/font/google";
import "./globals.css";

import { ThemeProvider } from "styled-components";
import Header from "./components/Header";
import Footer from "./components/Footer";
import theme from "./styles/DarkTheme";

import { ChildrenWrapper, LayoutWrapper } from "./layout.style";

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
          <LayoutWrapper>
            <Header />
            <ChildrenWrapper>{children}</ChildrenWrapper>
          </LayoutWrapper>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
