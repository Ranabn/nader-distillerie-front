// @ts-nocheck

import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    Textarea,
    Select,
    Text,
} from '@chakra-ui/react';
import {Navbar} from "@/app/components/navigation/navbar";
import {Footer} from "@/app/components/footer/Footer";
import {sanityFetch} from "@/app/sanity/client";
import {Btn} from "@/app/components/ui/Btn";
import React from "react";

const BRANDS_QUERY = `*[_type == "brands"] {
  brand_name,
  "slug": slug.current,
  "mainImage": mainImage.asset->url,
  "categories": categories[]->title
}`;
const ContactPage = async () => {
    const brands = await sanityFetch({
        query: BRANDS_QUERY,
    });

    return (
        <Flex direction="column">
            <Navbar brands={brands}/>
            <Flex mt={20} direction="column" justifyContent={'space-between'} p={8}>
                <Flex w={'100%'} gap={24}>
                    <Flex direction="column" w={'50%'}>
                        <Text fontSize="5xl" fontFamily="EB Garamond" fontWeight="800">Get in touch</Text>
                        <Text mb={8}>Explain your project, we will get back to you as soon as possible.</Text>

                        <Flex direction="column" gap={6}>
                            <FormControl id="reason">
                                <Select placeholder="Become a reseller" borderRadius={'none'} border={'1px'} size={'lg'}>
                                    <option value="reseller">Become a reseller</option>
                                    <option value="support">Support</option>
                                    <option value="other">Other</option>
                                </Select>
                            </FormControl>

                            <Flex gap={6}>
                                <FormControl id="name" w="50%">
                                    <FormLabel>Name</FormLabel>
                                    <Input size={'lg'} type="text" borderRadius={'none'} border={'1px'}/>
                                </FormControl>

                                <FormControl id="mail" w="50%">
                                    <FormLabel>Email</FormLabel>
                                    <Input size={'lg'} type="email" borderRadius={'none'} border={'1px'}/>
                                </FormControl>
                            </Flex>

                            <FormControl id="message">
                                <FormLabel>Message</FormLabel>
                                <Textarea size={'xl'} height={'30vh'} borderRadius={'none'} border={'1px'}/>
                            </FormControl>

                            <Flex justifyContent="flex-end">
                                <Btn size={'xs'} variant="primaryBlack" text="Send message"/>
                            </Flex>
                        </Flex>
                    </Flex>
                    <Flex flexDirection='column' mt={8} direction="row" w={'50%'}>
                        <Box>
                            <Text fontSize="xl">Addresses</Text>
                            <Text>Distillery: Mtein, Lebanon</Text>
                            <Text>Offices: 16, Street 44, Sector 4, Sin El Fil, Lebanon</Text>

                            <Text fontSize="xl" mt={4}>Opening hours</Text>
                            <Text>Monday - Friday, 8am - 5pm (GMT +2)</Text>
                            <Flex gap={10}>
                                <Box>
                                    <Text fontSize="xl" mt={4}>Phone</Text>
                                    <Text>+961 1 484 457</Text>
                                    <Text>+961 1 482 500</Text>
                                </Box>
                                <Box>
                                    <Text fontSize="xl" mt={4}>Mail</Text>
                                    <Text>contact@naderdistilleries.com</Text>
                                </Box>
                            </Flex>
                        </Box>

                        <Box width="100%" height="300px" mt={6}>
                            <iframe
                                width="100%"
                                height="100%"
                                frameBorder="0"
                                src="https://www.google.com/maps/embed/v1/place?key=YOUR_API_KEY&q=Sin+El+Fil,Lebanon"
                                allowFullScreen
                            ></iframe>
                        </Box>
                    </Flex>
                </Flex>
            </Flex>
            <Footer brands={brands}/>
        </Flex>
    );
}

export default ContactPage;
