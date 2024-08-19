// @ts-nocheck
// pages/index.js or wherever your Home component is
import {Flex, Box, Text} from "@chakra-ui/react";
import {Navbar} from "@/app/components/navigation/navbar";
import {HeroBanner} from "@/app/components/landing/HeroBanner";
import {BrandsSection} from "@/app/components/landing/BrandsSection";
import {OurStorySection} from "@/app/components/landing/OurStorySection";
import {Footer} from "@/app/components/footer/Footer";
import SmoothScroll from "@/app/SmoothScroll";
import {sanityFetch} from '@/app/sanity/client';
import {urlFor} from "@/app/sanity/urlFor";
import {Test} from "@/app/components/Test";


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
        <>
            <Flex direction="column" overflow={'hidden'}>
                <Navbar brands={brands}/>
                <SmoothScroll>
                    <HeroBanner/>
                    <BrandsSection isLanding={true} brands={brands} imageUrls={imageUrls}/>
                    <OurStorySection/>
                    <Box position="relative">
                        <Test brands={brands}/>
                        <Box position="relative" mt={["-90vh", "-120vh", "-60vh"]} pt={40}>
                            <Footer brands={brands}/>
                        </Box>
                    </Box>
                </SmoothScroll>
            </Flex>

        </>
    );
}