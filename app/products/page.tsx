// @ts-nocheck
import {Box} from "@chakra-ui/react";
import {Navbar} from "@/app/components/navigation/navbar";
import Spirits from "@/app/assets/images/Spirits.png";
import Grape from "@/app/assets/images/wines.png";
import Vinegars from "@/app/assets/images/vinegars.png";
import Eth from "../assets/images/ethanol.png";

import {Footer} from "@/app/components/footer/Footer";
import {OurStorySection} from "@/app/components/landing/OurStorySection";
import {sanityFetch} from "@/app/sanity/client";
import {Product3DSection} from "@/app/components/product/3DSection";
import SmoothScroll from "@/app/SmoothScroll";

const BRANDS_QUERY = `*[_type == "brands"] {
  brand_name,
  "slug": slug.current,
  "mainImage": mainImage.asset->url,
  "categories": categories[]->title
}`;

export default async function HomeProduct() {
    const brands = await sanityFetch({
        query: BRANDS_QUERY,
    }) || [];

    const sections = [
        {
            id: 1,
            text: "Spirits",
            imageUrl: Spirits.src,
            description: "We meticulously craft a range of spirits, including vodka, gin, whisky, brandy, and arak. Our commitment to quality begins with the careful selection of raw materials, sourced from the finest locations globally. We prioritize locally sourced ingredients, leveraging the richness of the Mediterranean land and the diverse nature hosting us.",
            fontSize: "503px",
            discover: "Discover our spirits brands"
        },
        {
            id: 2,
            text: "Wines",
            imageUrl: Grape.src,
            description: "Our red, rosé, and white wines each weave a story that encapsulates the essence of the region's climate and soil. Our expertise lies in skillfully unveiling the unique expression of these terroirs in every wine we produce.",
            fontSize: "536.28px",
            discover: "Discover our wines brands"
        },
        {
            id: 3,
            text: "Vinegars",
            imageUrl: Vinegars.src,
            description: "We specialize in crafting natural apple cider and red wine vinegars, renowned for their tangy and fruity flavors. Aligned with our commitment to sustainability, we valorize apples that would typically go to waste due to aesthetic standards and use our own wines as base. This leads to products that minimize food waste and promote a circular economy, while boasting exceptional taste.",
            fontSize: "384.07px",
            discover: "Discover our vinegars brands"
        },
        {
            id: 4,
            text: "Ethanol",
            imageUrl: Eth.src,
            description: "Our food-grade ethanol is produced through the fractional distillation of a fermentation mash, imparting a high neutral profile and ensuring exceptional purity. We tailor our offerings to diverse applications, providing various qualities based on the intended use. ",
            description2: "We also offer grape ethanol, produced using the traditional method in a pot still. This process results in an ethanol that retains the imprints of the grapes along with desirable congeners, contributing to a distinguished flavor, aroma, and overall character of the final distilled spirit.",
            fontSize: "433px",
            discover: "Discover our medical brands",
            discover2: "Discover our raw material service"
        },
    ];

    return (
        <Box>
            <Navbar brands={brands}/>
            {/*<SmoothScroll>*/}
                <Product3DSection sections={sections}/>
                {/*<Box*/}
                {/*    position="relative"*/}
                {/*    zIndex={10}*/}
                {/*    bg="white"*/}
                {/*    top="100vh"*/}
                {/*>*/}
                <OurStorySection/>
                <Footer brands={brands}/>
                {/*</Box>*/}
            {/*</SmoothScroll>*/}
        </Box>
    );
}