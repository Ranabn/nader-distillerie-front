// @ts-nocheck

'use client';
import {Box, Flex, Text, VStack, HStack, Link, SimpleGrid, Icon} from "@chakra-ui/react";
import {FaInstagram, FaFacebook} from "react-icons/fa";
import {Btn} from "@/app/components/ui/Btn";
import React from "react";
import {LogoHorizontal} from "@/app/components/ui/LogoHorizontal";
import {FiChevronDown, FiChevronUp} from "react-icons/fi"; // Import the arrow up icon
// @ts-ignore
import {animateScroll as scroll} from 'react-scroll';

interface Brand {
    slug: string;
    brand_name: string;
}

interface FooterProps {
    brands: Brand[];
}

export const Footer = ({brands}: any) => {
    const scrollToTop = () => {
        scroll.scrollToTop({
            duration: 500,
            smooth: 'easeInOutQuint'
        });
    };

    return (
        <Box bg="#12191F" color="white" px={[4, 8, 8]}>
            <Flex display={['flex', 'none', 'none']} _hover={{cursor: 'pointer'}} gap={2} flexDir='column' mb={4}
                  alignItems='center'
                  aria-label="Scroll to top" onClick={scrollToTop}>
                <FiChevronUp size={32}/>
                <Text>Back to top</Text>
            </Flex>
            <Flex pt={1} gap={10} flexDirection={["flex", "column", "row"]} justifyContent="space-between"
                  alignItems={["center", "center", "start"]} mb={[8, 10]}>
                <Flex width={"33%"}>
                    <LogoHorizontal/>

                </Flex>

                <Flex width={"33%"} display={['none', 'flex', 'flex']} _hover={{cursor: 'pointer'}} flexDir='column'
                      alignItems='center'
                      aria-label="Scroll to top" onClick={scrollToTop} pt={1}>
                    <Icon
                        as={FiChevronUp as any}
                        w={6}
                        h={6}
                        animation="upDownFade 2s infinite"
                    />
                    <Text fontSize={['md', '18px']}>Back to top</Text>

                </Flex>
                <Flex width={"33%"}> </Flex>

                {/*<Flex flexDirection={["column", "row"]} alignItems="center" gap={[2, 4]} mt={4}>*/}
                {/*    <Text fontSize={'xs'} mb={[2, 0]} display={['none', 'flex']}>Follow us on social Media</Text>*/}
                {/*    <HStack spacing={4} fontSize={['4xl', 'md']}>*/}
                {/*        <Link href="#" aria-label="Instagram">*/}
                {/*            <FaInstagram/>*/}
                {/*        </Link>*/}
                {/*        <Link href="#" aria-label="Facebook">*/}
                {/*            <FaFacebook/>*/}
                {/*        </Link>*/}
                {/*    </HStack>*/}
                {/*</Flex>*/}
            </Flex>

            <SimpleGrid columns={[1, 2, 3, 5]} gap={34} mb={8}>
                <Flex w={['100%', '80%']}>
                    <Link href={'/contact'} _hover={{textDecoration: 'none'}} width={["100%", "30%"]} mb={4}
                          display={['flex', 'none']}>
                        <Btn size={'sm'} variant="primaryWhite" text="WORK TOGETHER"/>
                    </Link>
                    <Link href={'/contact'} _hover={{textDecoration: 'none'}} display={['none', 'flex']}>
                        <Btn size={'xs'} variant="primaryWhite" text="WORK TOGETHER"/>
                    </Link>
                </Flex>
                <Flex gap={[20, 10]}>
                    <Flex flexDirection={'column'} fontSize={"18px"} gap={4}>
                        <Text fontWeight="bold" fontSize={"20px"} mb={2}>Brands</Text>
                        {/*@ts-ignore*/}
                        {brands.map((brand) => (
                            <Link key={brand.slug} href={`/brands/${brand.slug}`}>
                                {brand.brand_name}
                            </Link>
                        ))}
                    </Flex>

                    <Flex align="flex-start" flexDirection={'column'}>
                        <Text fontWeight="bold" fontSize={"20px"} mb={2}>Products</Text>
                    </Flex>
                </Flex>
                <Flex gap={[20, 10]}>
                    <Flex align="flex-start" flexDirection={'column'} fontSize={"18px"} gap={4}>
                        <Text fontWeight="bold" fontSize={"20px"} mb={2}>Services</Text>
                        <Link href={"/services/label-drinks"}>Private Label</Link>
                        <Link href={"/services/ethanol"}>Raw Material</Link>
                        <Link  href={"/services/gift"}>Events</Link>
                    </Flex>

                    <Flex align="flex-start" flexDirection={'column'}>
                        <Text fontWeight="bold" fontSize={"20px"} mb={2}>Our story</Text>
                    </Flex>
                </Flex>
            </SimpleGrid>
            <Flex color={'gray.600'} flexDirection={["column", "row"]} justifyContent="space-between"
                  alignItems="center" mt={8}>
                <Text fontSize="xs" mb={[4, 0]} textAlign={["center", "left"]}>© Nader Distilleries 2024. All rights
                    reserved.</Text>
                <HStack spacing={4}>
                    <Link href="#" fontSize="xs">Privacy Policy</Link>
                    <Link href="#" fontSize="xs">Terms & Conditions</Link>
                </HStack>
            </Flex>
            <style jsx global>{`
                @keyframes upDownFade {
                    0% {
                        transform: translateY(0);
                        opacity: 1;
                    }
                    50% {
                        transform: translateY(-10px);
                        opacity: 0.5;
                    }
                    100% {
                        transform: translateY(0);
                        opacity: 1;
                    }
                }
            `}</style>
        </Box>
    );
};
