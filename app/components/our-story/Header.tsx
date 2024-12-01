// @ts-nocheck

'use client'

import {Box, Flex, Heading, Icon, Image, Text} from "@chakra-ui/react";
import {Btn} from "@/app/components/ui/Btn";
import React from "react";
import {FiChevronDown} from "react-icons/fi";

export const OurStoryHeader = ({header, imageUrlHeader}) => {
    return (
        <Flex
            justify="center"
            align="center"
            width="100vw"
            height={["90vh", "100vh"]}
            position="relative"
            overflow="hidden"
        >
            <Image
                src={imageUrlHeader}
                alt={"background"}
                layout="fill"
                objectFit="cover"
                quality={100}
                width="100vw"
                height={'100vh'}
            />

            <Flex
                position="absolute"
                zIndex={1}
                justifyContent={'center'}
                flexDirection='column'
                maxW={['90%', "90%", '66%']}
            >
                <Heading color={'black'} fontFamily={"EB Garamond"} fontSize={["4xl", "48px"]} fontWeight="bold" mb={8}
                         as={"h2"}>
                    {header.title}
                </Heading>
                <Text fontSize={["md", "18px"]} mb={4} color={'black'}>
                    From the heart of our family, we invite you to share in our passion. We are not just about our
                    products; we are about being there for life&#39;`s special moments. Whether it is a heartfelt
                    conversation, a spontaneous toast, or a cherished celebration, our products are your companions in
                    these memorable experiences, bringing people together and creating lasting bonds.
                </Text>
                <Text fontSize={["md", "18px"]} mb={4} color={'black'}>

                    Life’s precious moments deserve nothing less than perfection, nature crafted in a bottle.<br/>
                    Guided by enduring values of integrity, adaptability, and an unwavering commitment to quality, we
                    have earned a regional reputation for excellence and trust in the beverage industry, distributing
                    our products worldwide, and reaching enthusiasts across the globe.
                </Text>
                {/*<Text fontSize={["md", "18px"]} mb={4} color={'black'}>*/}
                {/*    {header.description}*/}
                {/*</Text>*/}
                {/*<Text fontSize={["md", "18px"]} mb={4} color={'black'}>*/}
                {/*    {header.description2}*/}
                {/*</Text>*/}
            </Flex>
            <Box
                position="absolute"
                bottom="20px"
                color="black"
                zIndex={1}
                width="100%"
                textAlign="center"
            >
                <Text fontSize="sm">
                    Scroll down
                </Text>
                <Icon
                    as={FiChevronDown as any}
                    w={6}
                    h={6}
                    animation="upDownFade 2s infinite"
                />
            </Box>
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
        </Flex>
    );
}
