import {Navbar} from "@/app/components/navigation/navbar";
import {BrandsSection} from "@/app/components/landing/BrandsSection";
import {Footer} from "@/app/components/footer/Footer";
import {Box, Flex} from "@chakra-ui/react";
import {ExternalBox} from "@/app/components/ui/ExternalBoxe";
import {sanityFetch} from "@/app/sanity/client";
import {urlFor} from "@/app/sanity/urlFor";
import SmoothScroll from "@/app/SmoothScroll";
import React, {Suspense} from "react";
import CustomBox from "@/app/components/ui/CustomBox";

interface Brand {
    brand_name: string;
    slug: string;
    mainImage: string;
    categories: string[];
    brand_short_desc: string;
}

const BRANDS_QUERY = `*[_type == "brands"] {
  brand_name,
  "slug": slug.current,
  "mainImage": mainImage.asset->url,
  "categories": categories[]->title,
  brand_short_desc
}`;

const BrandsPage = async () => {
    const brands = await sanityFetch<Brand[]>({
        query: BRANDS_QUERY,
    });

    // @ts-ignore
    const imageUrls = brands.map(brand =>
        brand.mainImage ? urlFor(brand.mainImage).url() : null
    ).filter(Boolean);

    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Flex flexDir='column'>
                <Navbar brands={brands}/>
                {/*<SmoothScroll>*/}
                <Box mt={28}>
                        <BrandsSection isLanding={false} brands={brands} imageUrls={imageUrls}/>
                </Box>
                <ExternalBox/>
                <Footer brands={brands}/>
                {/*</SmoothScroll>*/}
            </Flex>
        </Suspense>
    );
}

export default BrandsPage;
