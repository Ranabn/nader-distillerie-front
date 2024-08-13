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
                maxW={['90%', "90%", '65%']}
            >
                <Heading color={'black'} fontFamily={"EB Garamond"} fontSize="4xl" fontWeight="bold" mb={8} as={"h2"}>
                    {header.title}
                </Heading>
                <Text fontSize="md" mb={4} color={'black'}>
                    {header.description}
                </Text>
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
                <Icon as={FiChevronDown} w={6} h={6}/>
            </Box>
        </Flex>
    );
}
