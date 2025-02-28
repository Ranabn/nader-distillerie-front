// @ts-nocheck
"use client";

import React, {useRef} from "react";
// Import Chakra UI components and hook for media query
import {Box, useMediaQuery} from "@chakra-ui/react";
import {Navbar} from "@/app/components/navigation/navbar";
// Import images for sections
import Spirits from "@/app/assets/images/products/spirit_big.jpg";
import Grape from "@/app/assets/images/products/wine_big.jpg";
import Vinegars from "@/app/assets/images/products/vinegars_1920.jpg";
import Eth from "@/app/assets/images/products/ethanol_1920.jpg";
// Import footer component
import {Footer} from "@/app/components/footer/Footer";
// Import the 3D section and CraftIdentity components
import {Product3DSection} from "@/app/components/product/3DSection";
import {CraftIdentity} from "@/app/components/product/CraftIdentity";
import CustomBox from "@/app/components/ui/CustomBox";

// Data for each product section.
// (You can move this data to a separate file if it grows larger)
const sections = [
    {
        id: 1,
        text: "Spirits",
        imageUrl: Spirits.src,
        description:
            "We meticulously craft a range of spirits, including vodka, gin, whisky, brandy, and arak. Our commitment to quality begins with the careful selection of raw materials, sourced from the finest locations globally. We prioritize locally sourced ingredients, leveraging the richness of the Mediterranean land and the diverse nature hosting us.",
        fontSize: "503px",
        mobileFontSize: "120px",
        discover: "Discover our spirits brands",
        backgroundSize: "auto",
        backgroundPosition: "bottom -1700px right 0px",
    },
    {
        id: 2,
        text: "Wines",
        imageUrl: Grape.src,
        description:
            "Our red, rosé, and white wines each weave a story that encapsulates the essence of the region's climate and soil. Our expertise lies in skillfully unveiling the unique expression of these terroirs in every wine we produce.",
        fontSize: "536.28px",
        mobileFontSize: "127.15px",
        discover: "Discover our wines brands",
        transform: "scaleX(-1)",
        mobileBackgroundPosition: "bottom right -75px",
    },
    {
        id: 3,
        text: "Vinegars",
        imageUrl: Vinegars.src,
        description:
            "We specialize in crafting natural apple cider and red wine vinegars, renowned for their tangy and fruity flavors. Aligned with our commitment to sustainability, we valorize apples that would typically go to waste due to aesthetic standards and use our own wines as base. This leads to products that minimize food waste and promote a circular economy, while boasting exceptional taste.",
        fontSize: "384.07px",
        mobileFontSize: "91.13px",
        discover: "Discover our vinegars brands",
    },
    {
        id: 4,
        text: "Ethanol",
        imageUrl: Eth.src,
        description:
            "Our food-grade ethanol is produced through the fractional distillation of a fermentation mash, imparting a high neutral profile and ensuring exceptional purity. We tailor our offerings to diverse applications, providing various qualities based on the intended use. ",
        description2:
            "We also offer grape ethanol, produced using the traditional method in a pot still. This process results in an ethanol that retains the imprints of the grapes along with desirable congeners, contributing to a distinguished flavor, aroma, and overall character of the final distilled spirit.",
        fontSize: "433px",
        mobileFontSize: "91.13px",
        discover: "Discover our medical brands",
        discover2: "Discover our raw material service",
        backgroundSize: "auto",
    },
];

// Optional: Server component for fetching brands data
export const BrandsData = async () => {
    const BRANDS_QUERY = `*[_type == "brands"] {
        brand_name,
        "slug": slug.current,
        "mainImage": mainImage.asset->url,
        "categories": categories[]->title
    }`;

    try {
        const brands = await sanityFetch({
            query: BRANDS_QUERY,
        });
        return brands || [];
    } catch (error) {
        console.error("Error fetching brands:", error);
        return [];
    }
};

const HomeProduct = ({brands = []}) => {
    // Use the useMediaQuery hook to check if the viewport width is 1140px or below
    const [isLessThan1140] = useMediaQuery("(max-width: 1140px)");
    const craftRef = useRef(null)

    return (
        <Box>
            {/* Navbar remains visible on all screen sizes */}
            <Navbar brands={brands}/>

            {isLessThan1140 ? (
                // For screen widths 1140px and below, display an alternative Box
                <>
                    <Product3DSection craftRef={craftRef} sections={sections} isResponsive={true} brands={brands}/>
                    <CraftIdentity craftRef={craftRef}/>
                    <Footer brands={brands}/>

                </>
            ) : (
                // For larger screens, display the Product3DSection and CraftIdentity components
                <>
                    <Product3DSection sections={sections} isResponsive={false} brands={brands}/>
                    <CraftIdentity/>
                    <Footer brands={brands}/>

                </>
            )}

            {/* Footer is displayed on all screen sizes */}
        </Box>
    );
};

export default HomeProduct;
