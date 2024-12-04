// @ts-nocheck

import React from 'react';
import {
    Box,
    Flex,
} from '@chakra-ui/react';
import {Navbar} from "@/app/components/navigation/navbar";
import {Footer} from "@/app/components/footer/Footer";
import {sanityFetch} from "@/app/sanity/client";
import {Gifts} from "@/app/components/services/Gifts";
const BRANDS_QUERY = `*[_type == "brands"] {
  brand_name,
  "slug": slug.current,
  "mainImage": mainImage.asset->url,
  "categories": categories[]->title
}`;
const ServiceTemplatePage = async () => {
    const brands = await sanityFetch({
        query: BRANDS_QUERY,
    }) || [];
    return (
        <Flex flexDir='column'>
            <Navbar brands={brands}/>
            <Box mt={28}>
                <Gifts/>
            </Box>
            <Footer brands={brands}/>
        </Flex>
    );
};

export default ServiceTemplatePage;