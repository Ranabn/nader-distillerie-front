import Image from "next/image";
import Background from "@/app/assets/images/landing.png";
import {Box, Flex, Text, Button, Heading, Icon} from "@chakra-ui/react";
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
            <Image
                src={Background}
                alt={"background"}
                layout="fill"
                objectFit="cover"
                quality={100}
            />
            <Box
                position="absolute"
                top={0}
                left={0}
                width="100%"
                height="100%"
                bg="blackAlpha.600"
            />
            <Box
                position="absolute"
                color="white"
                textAlign="left"
                zIndex={1}
                maxWidth="600px"
                left="3%"
            >
                <Heading fontFamily={"EB Garamond"} fontSize="6xl" fontWeight="bold" mb={8} as={"h2"}>
                    Master distillers and fermenters for four generations
                </Heading>
                <Text fontSize="lg" mb={8}>
                    We harvest the finest gifts of nature in a bottle, offering you the perfect glass to celebrate
                    life's special moments.
                </Text>
                <Btn variant="primaryWhite" text="WORK TOGETHER"/>

            </Box>


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
                <Icon as={FiChevronDown} w={6} h={6}/>
            </Box>
        </Flex>
    );
};
