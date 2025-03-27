// @ts-nocheck

import type {Metadata} from "next";
import {EB_Garamond} from "@next/font/google";
import {ChkraProvider} from "./providers";
import "./globals.css";
import {ColorModeProvider} from "@chakra-ui/react";
import Script from "next/script";

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
        <head>
            <Script strategy={'afterInteractive'} src={"https://www.googletagmanager.com/gtag/js?id=G-CQE1B1N7CL"}/>
            <Script id={'google-analytics'} strategy={'afterInteractive'}>
                {`window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-CQE1B1N7CL');`}
            </Script>
        </head>
        <body>
        <ChkraProvider>
            <ColorModeProvider forcedTheme="light">{children}</ColorModeProvider>
        </ChkraProvider>
        </body>
        </html>
    );
}
