'use client'
import Background from "@/app/assets/images/landing.png";
import {Box, Flex, Text, Button, Heading, Icon, Image} from "@chakra-ui/react";
import {Btn} from "@/app/components/ui/Btn";
import React from "react";
import {FiChevronDown} from "react-icons/fi"; // Import the arrow down icon

export const HeroBanner = () => {
    return (
        <Flex
            justify="center"
            align="center"
            width="100vw"
            height="100vh"
            position="relative"
            overflow="hidden"
        >
            <Box
                position="absolute"
                bottom={0}
                left={0}
                right={0}
                height="100%"
                width="100%"
            >
                <Image
                    src={Background.src}
                    alt={"background"}
                    quality={100}
                    objectFit="cover"
                    objectPosition={{base: 'center', md: 'bottom'}}
                    width="100%"
                    height="100%"
                />
            </Box>

            <Box
                position="absolute"
                top={0}
                left={0}
                width="100%"
                height="100%"
                bg="blackAlpha.100"
            />
            <Flex
                position="absolute"
                color="white"
                textAlign="left"
                zIndex={1}
                maxWidth="800px"
                left="2.3%"
                flexDirection='column'
                gap={[10, 0]}
                s>
                <Heading fontFamily={"EB Garamond"} fontSize={["4xl", "5xl", "5xl"]} fontWeight="bold" mb={[4, 6, 8]}
                         lineHeight={'1.3em'}
                         as={"h2"}>
                    Master distillers and <br/> fermenters
                    for four generations
                </Heading>
                <Text fontSize={["md", "lg"]} mb={[4, 6, 10]} lineHeight={'30.4px'}>
                    We harvest the finest gifts of nature in a bottle, offering you <br/> the perfect glass to celebrate
                    life&apos;s special moments.
                </Text>
                <Box width={["100%", "30%"]}>
                    <Btn size={'sm'} variant="primaryWhite" text="WORK TOGETHER"/>
                </Box>
            </Flex>
            <Box
                position="absolute"
                bottom="20px"
                color="white"
                zIndex={1}
                width="100%"
                textAlign="center"
            >
                <Text fontSize="sm">
                    Scroll down
                </Text>
                <Icon as={FiChevronDown as any} w={6} h={6}/>
            </Box>
        </Flex>
    );
};
