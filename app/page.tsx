// @ts-nocheck

import { Flex, Box } from "@chakra-ui/react";
import { Navbar } from "@/app/components/navigation/navbar";
import { HeroBanner } from "@/app/components/landing/HeroBanner";
import { BrandsSection } from "@/app/components/landing/BrandsSection";
import { OurStorySection } from "@/app/components/landing/OurStorySection";
import { Footer } from "@/app/components/footer/Footer";
import { Test } from "@/app/components/Test";
import React, { Suspense } from "react";
import { sanityFetch } from '@/app/sanity/client';
import { urlFor } from "@/app/sanity/urlFor";

const BRANDS_QUERY = `*[_type == "brands"] {
  brand_name,
  "slug": slug.current,
  "mainImage": mainImage.asset->url,
  "categories": categories[]->title,
  brand_short_desc
}`;

export default async function Home() {
    const brands = await sanityFetch({
        query: BRANDS_QUERY,
    });

    const imageUrls = brands.map(brand =>
        brand.mainImage ? urlFor(brand.mainImage).url() : null
    ).filter(Boolean);

    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Flex direction="column" overflow={'hidden'}>
                <Navbar brands={brands}/>
                {/*<SmoothScroll>*/}
                <HeroBanner />
                {/*<BrandsSection isLanding={true} brands={brands} imageUrls={imageUrls} />*/}
                <OurStorySection />
                <Box position="relative">
                    <Test brands={brands} />
                    <Footer brands={brands} />
                </Box>
                {/*</SmoothScroll>*/}
            </Flex>
        </Suspense>
    );
}
