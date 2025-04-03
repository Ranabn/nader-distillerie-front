// @ts-nocheck

import { Flex, Box } from "@chakra-ui/react";
import { Navbar } from "@/app/components/navigation/navbar";
import { HeroBanner } from "@/app/components/landing/HeroBanner";
import { BrandsSection } from "@/app/components/landing/BrandsSection";
import { OurStorySection } from "@/app/components/landing/OurStorySection";
import { Footer } from "@/app/components/footer/Footer";
import { Test } from "@/app/components/Test";
import { sanityFetch } from "@/app/sanity/client";
import { urlFor } from "@/app/sanity/urlFor";
import CustomBox from "./components/ui/CustomBox";
import ClientRedirect from "@/app/components/ClientRedirect"; // Import the client wrapper

const BRANDS_QUERY = `*[_type == "brands"] {
  brand_name,
  "slug": slug.current,
  "mainImage": mainImage.asset->url,
  "categories": categories[]->title,
  brand_short_desc
}`;

export default async function Home() {
    const brands = await sanityFetch({ query: BRANDS_QUERY });

    const imageUrls = brands
        .map(brand => (brand.mainImage ? urlFor(brand.mainImage).url() : null))
        .filter(Boolean);

    return (
        <ClientRedirect> {/* Protect the page from unauthorized users */}
            <Flex direction="column" overflow="hidden" overflowX="hidden">
                <Navbar brands={brands} />
                <HeroBanner />
                <BrandsSection isLanding={true} brands={brands} imageUrls={imageUrls} />
                <Box>
                    <CustomBox>
                        <OurStorySection />
                    </CustomBox>
                </Box>
                <Box position="relative">
                    <CustomBox>
                        <Test brands={brands} />
                    </CustomBox>
                    <Footer brands={brands} />
                </Box>
            </Flex>
        </ClientRedirect>
    );
}
