'use client';

import React, {useEffect, useRef} from 'react';
import {Box, Flex, Text, Image, Heading, Link, useMediaQuery} from '@chakra-ui/react';
import OurStory from '@/app/assets/images/our-story-landing.png';
import OurStory2 from '@/app/assets/images/our-story-landing-2.png';
import OurStory3 from '@/app/assets/images/our-story-landing-3.png';
import {Btn} from '@/app/components/ui/Btn';
import craft from "@/app/assets/images/craft-identity.png";
import CustomBox from "@/app/components/ui/CustomBox";

export const CraftIdentity = ({storyImg, craftRef}: any) => {


    return (
        <CustomBox>
            <Box p={[4, 8, 8]} mt={[10, 20]} mb={[10, 10, 10]} bg="white" ref={craftRef}>
                <Image
                    display={["flex", "none", "none"]}
                    src={craft.src}
                    alt="Our Story"
                    objectFit="cover"
                    width={["100%", "800px", "800px"]}
                    height={["200px", "800px", "800px"]}
                />
                <Flex
                    justifyContent="space-between"
                    alignItems="center"
                    width={["100%"]}
                    mt={4}
                    gap={4}
                >

                    {/* Left Section: Pinned Text */}
                    <Flex
                        flexDirection="column"
                        gap={[4, 10, 10]}
                        fontSize="18px"
                        alignSelf="center"
                        width={["460px"]}
                        height={'305px'}

                    >
                        <Flex flexDirection="column" gap={"56px"}>
                            <Flex flexDirection="column" gap={'0px'}>
                                <Text fontSize={["20px", "24px", '24px']} color={'#12191F'}>Private Label</Text>
                                <Heading
                                    lineHeight={0.9}
                                    fontSize={['28px', '48px', '48px']}
                                    fontWeight="bold"

                                    fontFamily="EB Garamond, serif"
                                >
                                    Craft your identity
                                </Heading>
                            </Flex>

                        </Flex>
                        <Text mb={[6, 2, 2]} fontSize={['16px', '16px', '16px']} lineHeight={['25px', '28px']}>
                            Craft your unique identity with our private label offerings. We excel at tailoring products,
                            whether premium or entry-level, to meet the distinctive needs of our clients. Together we
                            can
                            shape your brand.
                        </Text>
                        <Box w={['100%', '40%', '40%']} mt={4}>
                            <Link _hover={{textDecoration: 'none'}} href={'/services/label-drinks'}>
                                <Btn size="md" variant="secondary" text="Build your brand"/>
                            </Link>
                        </Box>
                    </Flex>
                    <Image
                        display={["none", "flex", "flex"]}
                        src={craft.src}
                        alt="Our Story"
                        objectFit="cover"
                        width={["325px", "200px","400px","600px", "800px"]}
                        height={["325px", "200px","400px","600px", "800px"]}
                    />
                </Flex>
            </Box>
        </CustomBox>
    );
};
