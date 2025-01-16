// @ts-nocheck

'use client';
import {Box, Flex, Text, VStack, HStack, Link, SimpleGrid, Icon, Image} from "@chakra-ui/react";
import {FaInstagram, FaFacebook} from "react-icons/fa";
import {Btn} from "@/app/components/ui/Btn";
import React from "react";
import {LogoHorizontal} from "@/app/components/ui/LogoHorizontal";
import {FiChevronDown, FiChevronUp} from "react-icons/fi"; // Import the arrow up icon
// @ts-ignore
import {animateScroll as scroll} from 'react-scroll';
import logoFooter from "@/app/assets/icons/logoFooter.png"

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
        <Box bg="#12191F" color="white" px={[4, 8, 8]} pt={4} pb={4}>
            <Flex display={['flex', 'none', 'none']} _hover={{cursor: 'pointer'}} gap={2} flexDir='column' mb={4}
                  alignItems='center'
                  aria-label="Scroll to top" onClick={scrollToTop}>
                <FiChevronUp size={32}/>
                <Text fontSize={'18px'}>Back to top</Text>
            </Flex>
            <Flex width={'100%'} pt={1} gap={10} flexDirection={["flex", "column", "row"]}
                  justifyContent="space-between"
                  alignItems={["center", "center", "start"]} mb={[4, 8, 10]}>
                <Flex width={["33%", "33%", "231px"]} mb={[4,0,0]}>
                    <Image src={logoFooter.src}/>
                </Flex>

                <Flex width={'33%'} display={['none', 'flex', 'flex']} _hover={{cursor: 'pointer'}} flexDir='column'
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
                <Flex width={'5%'}></Flex>

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
                        <Btn size={'md'} variant="primaryWhite" text="WORK TOGETHER"/>
                    </Link>
                    <Link href={'/contact'} _hover={{textDecoration: 'none'}} display={['none', 'flex']}>
                        <Btn size={'xs'} variant="primaryWhite" text="WORK TOGETHER"/>
                    </Link>
                </Flex>
                <Flex gap={[20, 10]}>
                    <Flex flexDirection={'column'} fontSize={"18px"} gap={4}>
                        <Link href={"/brands"}> <Text fontWeight="bold" fontSize={"20px"} mb={2}>Brands</Text>
                        </Link>
                        {/*@ts-ignore*/}
                        {brands.map((brand) => (
                            <Link key={brand.slug} href={`/brands/${brand.slug}`}>
                                {brand.brand_name}
                            </Link>
                        ))}
                    </Flex>

                    <Flex align="flex-start" flexDirection={'column'}>
                        <Link href={"/products"}>
                            <Text fontWeight="bold" fontSize={"20px"} mb={2}>Products</Text>
                        </Link>
                    </Flex>
                </Flex>
                <Flex gap={[20, 10]}>
                    <Flex align="flex-start" flexDirection={'column'} fontSize={"18px"} gap={4}>
                        <Link href={"/services"}>
                            <Text fontWeight="bold" fontSize={"20px"} mb={2}>Services</Text>
                        </Link>
                        <Link href={"/services/label-drinks"}>Private Label</Link>
                        <Link href={"/services/ethanol"}>Raw Material</Link>
                        <Link href={"/services/gift"}>Events</Link>
                    </Flex>

                    <Flex align="flex-start" flexDirection={'column'}>
                        <Link href={"/our-story"}>
                            <Text fontWeight="bold" fontSize={"20px"} mb={2}>Our story</Text>
                        </Link>
                    </Flex>
                </Flex>
            </SimpleGrid>
            <Flex mb={4}  color={'gray.600'} flexDirection={["column-reverse","column", "row"]} justifyContent={["space-between"]}
                  alignItems={["start", "center"]} mt={8} gap={[4,0]}>


                <Text fontSize="xs" textAlign={["center", "left"]}>© Nader Distilleries 2024. All rights
                    reserved.</Text>
                <HStack spacing={4} >
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
