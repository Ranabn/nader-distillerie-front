// @ts-nocheck

import React from 'react';
import {
    Box,
    Flex,
} from '@chakra-ui/react';
import {Navbar} from "@/app/components/navigation/navbar";
import {ServiceTemplateContent} from "@/app/components/services-template/ServiceTemplateContent";
import {Footer} from "@/app/components/footer/Footer";
import {sanityFetch} from "@/app/sanity/client";
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
            <Navbar/>
            <Box mt={28}>
                <ServiceTemplateContent/>
            </Box>
            <Footer brands={brands}/>
        </Flex>
    );
};

export default ServiceTemplatePage;