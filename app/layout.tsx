// @ts-nocheck

import type { Metadata } from "next";
import { EB_Garamond } from "@next/font/google";
import { ChkraProvider } from "./providers";
import "./globals.css";
import { ColorModeProvider } from "@chakra-ui/react";

const ebGaramond = EB_Garamond({
  subsets: ["latin"],
  display: "swap",
});
export const metadata: Metadata = {
  title: "Nader Distilleries",
  description: "Master distillers and fermenters for four generations",
  icons: {
    icon: "./favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={ebGaramond.className}>
      <body>
        <ChkraProvider>
          <ColorModeProvider forcedTheme="light">{children}</ColorModeProvider>
        </ChkraProvider>
      </body>
    </html>
  );
}
