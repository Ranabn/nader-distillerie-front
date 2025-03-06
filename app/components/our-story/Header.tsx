'use client'

import { Box, Flex, Heading, Icon, Image, Text } from "@chakra-ui/react";
import React, {useEffect} from "react";
import { FiChevronDown } from "react-icons/fi";
import { PortableText } from '@portabletext/react';

const portableTextComponents = {
    marks: {
        link: ({ children, value }) => {
            const target = value.blank ? '_blank' : '_self';
            return (
                <a
                    href={value.href}
                    target={target}
                    rel="noopener noreferrer"
                    style={{ textDecoration: 'underline' }}
                >
                    {children}
                </a>
            );
        },
    },
};


export const OurStoryHeader = ({ header, imageUrlHeader }) => {

    return (
        <Flex
            justify="center"
            align="center"
            width="100vw"
            height={["90vh", "100vh"]}
            position="relative"
            overflow="hidden"
            mt={[20, 0, 0]}
        >
            <Image
                src={imageUrlHeader}
                alt="background"
                layout="fill"
                objectFit="cover"
                quality={100}
                width="100vw"
                height={['100vh']}
            />

            <Flex
                position="absolute"
                zIndex={1}
                justifyContent="center"
                flexDirection="column"
                maxW={['90%', "90%", '66%']}
            >
                <Heading
                    color="black"
                    fontFamily="EB Garamond"
                    fontSize={["28px", "4xl", "48px"]}
                    fontWeight="bold"
                    mb={8}
                    as="h2"
                >
                    {header.title}
                </Heading>
                <Box color="black" mb={4}>
                    <PortableText value={header.description} components={portableTextComponents} />
                </Box>
                <Box color="black" mb={4}>
                    <PortableText value={header.description2} components={portableTextComponents} />
                </Box>
            </Flex>
            <Box
                position="absolute"
                bottom="20px"
                color="black"
                zIndex={1}
                width="100%"
                textAlign="center"
            >
                <Text fontSize="sm">Scroll down</Text>
                <Icon as={FiChevronDown} w={6} h={6} animation="upDownFade 2s infinite" />
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
