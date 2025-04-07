import {
    Flex,
    Box,
    Text,
    Image
} from '@chakra-ui/react';
import {Navbar} from "@/app/components/navigation/navbar";
import {Footer} from "@/app/components/footer/Footer";
import {sanityFetch} from "@/app/sanity/client";
import React, {Fragment, Suspense} from "react";
import ContactForm from "@/app/components/contact/ContactForm";
import GoogleMapComponent from "@/app/components/contact/GoogleMapComponent";
import CustomBox from '../components/ui/CustomBox';
import Google from '../assets/images/google.png';

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

    const API_KEY = process.env.REACT_APP_GOOGLE_API_KEY;

    const center = {
        lat: 33.8767,
        lng: 35.5431
    };

    return (
        <Fragment>
            <CustomBox>
                <Suspense fallback={<div>Loading...</div>}>
                    <Navbar brands={brands}/>

                    <Flex direction="column">
                        <Flex mt={[12, 12, 28]} direction="column" justifyContent={'space-between'} p={8}>
                            <Flex
                                w={'100%'}
                                gap={'137px'}
                                flexDirection={["column", "row"]}
                                maxW="1512px"
                                mx="auto"
                            >
                                <Flex direction="column" w={["100%", '566px']} flex="0 0 566px">
                                    <Text fontSize={["28px", "5xl", "48px"]} fontFamily="EB Garamond" fontWeight="800">
                                        Get in touch
                                    </Text>
                                    <Text mb={[4, 8]} fontSize={["16px", "18px"]}>
                                        Tell us about your project, and we will respond promptly.
                                    </Text>
                                    <ContactForm/>
                                </Flex>

                                <Flex flexDirection='column' mt={[0, 8]} fontSize={["16px", "18px"]} w="100%">
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

                                    <Box width={'100%'} mt={[0, 6]} order={[0, 1]}>
                                        {/* <GoogleMapComponent apiKey={API_KEY} center={center} zoom={12}/> */}
                                        <Image src={Google.src} />
                                    </Box>
                                </Flex>
                            </Flex>
                        </Flex>
                    </Flex>
                </Suspense>
            </CustomBox>
            <Footer brands={brands}/>
        </Fragment>
    );
}

export default ContactPage;
