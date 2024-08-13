'use client';
import {Box, Flex, Text, VStack, HStack, Link, SimpleGrid} from "@chakra-ui/react";
import {FaInstagram, FaFacebook} from "react-icons/fa";
import {Btn} from "@/app/components/ui/Btn";
import React from "react";
import {LogoHorizontal} from "@/app/components/ui/LogoHorizontal";
import {FiChevronUp} from "react-icons/fi"; // Import the arrow up icon
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
                <FiChevronUp size={24}/>
                <Text>Back to top</Text>
            </Flex>
            <Flex gap={10} flexDirection={["column", "column", "row"]} justifyContent="space-between"
                  alignItems={["center", "center", "start"]} p={4} mb={[8, 10]}>
                <LogoHorizontal/>

                <Flex display={['none', 'flex', 'flex']} _hover={{cursor: 'pointer'}} flexDir='column'
                      alignItems='center'
                      aria-label="Scroll to top" onClick={scrollToTop}>
                    <FiChevronUp size={16}/>
                    <Text fontSize={'xs'}>Back to top</Text>
                </Flex>

                <Flex flexDirection={["column", "row"]} alignItems="center" gap={[2, 4]}>
                    <Text fontSize={'xs'} mb={[2, 0]} display={['none', 'flex']}>Follow us on social Media</Text>
                    <HStack spacing={4} fontSize={['4xl', 'md']}>
                        <Link href="#" aria-label="Instagram">
                            <FaInstagram/>
                        </Link>
                        <Link href="#" aria-label="Facebook">
                            <FaFacebook/>
                        </Link>
                    </HStack>
                </Flex>
            </Flex>

            <SimpleGrid columns={[1, 2, 3, 5]} spacing={[8]} mb={8}>
                <Flex w={['100%', '80%']}>
                    <Link href={'/contact'} _hover={{textDecoration: 'none'}}>
                        <Btn size={'xs'} variant="primaryWhite" text="WORK TOGETHER"/>
                    </Link>
                </Flex>

                <VStack align="flex-start">
                    <Text fontWeight="bold" mb={2}>Brands</Text>
                    {/*@ts-ignore*/}
                    {brands.map((brand) => (
                        <Link key={brand.slug} href={`/brands/${brand.slug}`}>
                            {brand.brand_name}
                        </Link>
                    ))}
                </VStack>

                <VStack align="flex-start">
                    <Text fontWeight="bold" mb={2}>Products</Text>
                </VStack>

                <VStack align="flex-start">
                    <Text fontWeight="bold" mb={2}>Services</Text>
                    <Link>Private Label</Link>
                    <Link>Raw Material</Link>
                    <Link>Events</Link>
                </VStack>

                <VStack align="flex-start">
                    <Text fontWeight="bold" mb={2}>Our story</Text>
                </VStack>
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
        </Box>
    );
};
