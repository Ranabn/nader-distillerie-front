import type { Metadata } from "next";
import { ChkraProvider } from "../providers";
import { ColorModeProvider } from "@chakra-ui/react";

export const metadata: Metadata = {
    title: "Nutrition Facts - Domaine des Princes",
    robots: {
        index: false,
        follow: false,
    },
};

export default function NutritionLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <ChkraProvider>
            <ColorModeProvider forcedTheme="light">
                {children}
            </ColorModeProvider>
        </ChkraProvider>
    );
}
