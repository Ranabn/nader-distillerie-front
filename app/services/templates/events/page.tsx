import React from 'react';
import {
    Box,
    Flex,
    Text,
    Button,
    Image,
    VStack,
    HStack,
    Divider,
} from '@chakra-ui/react';
import {Navbar} from "@/app/components/navigation/navbar";
import {ServiceTemplateContent} from "@/app/components/services-template/ServiceTemplateContent";
import {Footer} from "@/app/components/footer/Footer";
import {EventsTemplateContent} from "@/app/components/events-template/EventsTemplateContent";

const ServiceTemplatePage = () => {
    return (
        <Flex flexDir='column'>
            <Navbar/>
            <Box mt={28}>
                <EventsTemplateContent/>
            </Box>


            <Footer/>
        </Flex>
    );
};

export default ServiceTemplatePage;