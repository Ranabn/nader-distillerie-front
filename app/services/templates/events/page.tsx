// @ts-nocheck
import React from 'react';
import {
    Box,
    Flex,
} from '@chakra-ui/react';
import {Navbar} from "@/app/components/navigation/navbar";
import {Footer} from "@/app/components/footer/Footer";
import {EventsTemplateContent} from "@/app/components/events-template/EventsTemplateContent";
import {sanityFetch} from "@/app/sanity/client";

const BRANDS_QUERY = `*[_type == "brands"] {
  brand_name,
  "slug": slug.current,
  "mainImage": mainImage.asset->url,
  "categories": categories[]->title
}`;
const EventTemplatePage = async () => {
    const brands = await sanityFetch({
        query: BRANDS_QUERY,
    }) || [];
    return (
        <Flex flexDir='column'>
            <Navbar/>
            <Box mt={28}>
                <EventsTemplateContent/>
            </Box>

            <Footer brands={brands}/>
        </Flex>
    );
};

export default EventTemplatePage;