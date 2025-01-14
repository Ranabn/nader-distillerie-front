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
    Image
} from '@chakra-ui/react';
import {Navbar} from "@/app/components/navigation/navbar";
import {Footer} from "@/app/components/footer/Footer";
import {sanityFetch} from "@/app/sanity/client";
import {Btn} from "@/app/components/ui/Btn";
import React from "react";
import googleimg from "@/app/assets/images/googleimg.png"
import {usePathname} from "next/navigation";

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
    console.log(usePathname())
    return (
        <Flex direction="column">
            <Navbar brands={brands}/>
            <Flex mt={20} direction="column" justifyContent={'space-between'} p={8}>
                <Flex w={'100%'} gap={24} flexDirection={["column", "row"]}>
                    <Flex direction="column" w={["100%", '566px']}>
                        <Text fontSize={["28px", "5xl", "48px"]} fontFamily="EB Garamond" fontWeight="800">Get in
                            touch</Text>
                        <Text mb={[4, 8]} fontSize={["16px", "18px"]}>Explain your project, we will get back to you as
                            soon
                            as
                            possible.</Text>

                        <Flex direction="column" gap={6} fontSize={"18px"}>
                            <FormControl id="reason">
                                <Select placeholder=" " borderRadius={'none'} border={'1px'}
                                        size={'lg'}>
                                    <option value="reseller">Become a reseller</option>
                                    <option value="support">Support</option>
                                    <option value="other">Other</option>
                                </Select>
                            </FormControl>

                            <Flex gap={6} fontSize={"16px"} flexDirection={["column", "row"]}>
                                <FormControl id="name" w={["100%", "50%"]}>
                                    <FormLabel>Name</FormLabel>
                                    <Input size={'lg'} type="text" borderRadius={'none'} border={'1px'}/>
                                </FormControl>

                                <FormControl id="mail" w={["100%", "50%"]}>
                                    <FormLabel>Email</FormLabel>
                                    <Input size={'lg'} type="email" borderRadius={'none'} border={'1px'}/>
                                </FormControl>
                            </Flex>

                            <FormControl id="message">
                                <FormLabel>Message</FormLabel>
                                <Textarea size={'xl'} height={'349px'} width={["100%", "566px"]} borderRadius={'none'}
                                          border={'1px'}/>
                            </FormControl>

                            <Flex justifyContent="flex-end">
                                <Btn size={'md'} variant="primaryBlack" text="Send message"/>
                            </Flex>
                        </Flex>
                    </Flex>
                    <Flex flexDirection='column' mt={[0, 8]} fontSize={["16px", "18px"]} direction="row"
                          w={["100%", '50%']}
                    >
                        <Box order={[1, 0]} mt={[8, 0]}>
                            <Text fontSize={["24px"]}>Addresses</Text>
                            <Text>Distillery: Mtein, Lebanon</Text>
                            <Text>Offices: 16, Street 44, Sector 4, Sin El Fil, Lebanon</Text>

                            <Text fontSize={["24px"]} mt={4}>Opening hours</Text>
                            <Text>Monday - Friday, 8am - 5pm (GMT +2)</Text>
                            <Flex gap={[4, 10]} flexDirection={["column", "row"]}>
                                <Box>
                                    <Text fontSize={["24px"]} mt={4}>Phone</Text>
                                    <Text>+961 1 484 457</Text>
                                    <Text>+961 1 482 500</Text>
                                </Box>
                                <Box>
                                    <Text fontSize={["24px"]} mt={[0, 4]}>Mail</Text>
                                    <Text>contact@naderdistilleries.com</Text>
                                </Box>
                            </Flex>
                        </Box>

                        <Box width="100%" height={["auto", "300px"]} mt={[0, 6]} order={[0, 1]}>
                            <Image src={googleimg.src}/>
                            {/*<iframe*/}
                            {/*    width="100%"*/}
                            {/*    height="100%"*/}
                            {/*    frameBorder="0"*/}
                            {/*    src="https://www.google.com/maps/embed/v1/place?key=YOUR_API_KEY&q=Sin+El+Fil,Lebanon"*/}
                            {/*    allowFullScreen*/}
                            {/*></iframe>*/}
                        </Box>
                    </Flex>
                </Flex>
            </Flex>
            <Footer brands={brands}/>
        </Flex>
    );
}

export default ContactPage;
