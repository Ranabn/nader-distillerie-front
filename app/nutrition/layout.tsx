import type { Metadata } from "next";
import { ChkraProvider } from "../providers";

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
            {children}
        </ChkraProvider>
    );
}
