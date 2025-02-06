// @ts-nocheck

import React from 'react';
import {
    Box,
    Flex,
} from '@chakra-ui/react';
import {Navbar} from "@/app/components/navigation/navbar";
import {LabelDrinks} from "@/app/components/services/LabelDrinks";
import {Footer} from "@/app/components/footer/Footer";
import {sanityFetch} from "@/app/sanity/client";
import CustomBox from '@/app/components/ui/CustomBox';

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
            <CustomBox>
                <Box mt={[20, 0, 28]}>
                    <LabelDrinks/>
                </Box>
            </CustomBox>
            <Footer brands={brands}/>
        </Flex>
    );
};

export default ServiceTemplatePage;